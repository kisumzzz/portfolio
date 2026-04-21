import { env } from "../config/env.mjs";
import { createOpenAIResponse, extractOutputText } from "../lib/openai.mjs";
import { retrieveRelevantChunks } from "../knowledge/retrieval.mjs";
import { buildGroundedPrompt, systemPrompt } from "../prompts/chatPrompt.mjs";
import { classifyQuestionIntent } from "./intentClassifier.mjs";

export async function createChatReply({ previousResponseId, question }) {
  const intent = await classifyQuestionIntent(question);
  const retrievalResult = await retrieveRelevantChunks(question, intent);
  const retrievedChunks = retrievalResult.chunks;
  const isGroundedKnowledgeQuestion =
    intent !== "general" && retrievalResult.hasDirectMatch;
  const knowledgeSource =
    intent === "resume"
      ? "resumeKnowledge"
      : intent === "personal"
        ? "personalKnowledge"
        : "generalConversation";
  const answerStrategy = isGroundedKnowledgeQuestion
    ? "Ground the answer in semantically retrieved profile context and speak in first person."
    : intent === "general"
      ? "Answer naturally in first person without pretending my saved knowledge contains the answer."
      : "Use the closest saved context carefully and be explicit when details are not specified.";

  const requestBody = {
    model: env.model,
    store: true,
    reasoning: {
      effort: env.reasoningEffort,
      summary: "auto",
    },
    instructions: systemPrompt,
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: buildGroundedPrompt(
              question,
              retrievedChunks,
              isGroundedKnowledgeQuestion,
            ),
          },
        ],
      },
    ],
  };

  if (previousResponseId) {
    requestBody.previous_response_id = previousResponseId;
  }

  const responseBody = await createOpenAIResponse(requestBody);

  return {
    answer: extractOutputText(responseBody),
    intent,
    reasoningPanel: {
      intent,
      knowledgeSource,
      answerStrategy,
    },
    responseId: responseBody.id || null,
  };
}
