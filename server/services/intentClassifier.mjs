import { env } from "../config/env.mjs";
import { createOpenAIResponse, extractOutputText } from "../lib/openai.mjs";
import { intentPrompt } from "../prompts/intentPrompt.mjs";

export async function classifyQuestionIntent(question) {
  const responseBody = await createOpenAIResponse({
    model: env.intentModel,
    reasoning: {
      effort: "low",
    },
    instructions: intentPrompt,
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: question,
          },
        ],
      },
    ],
  });

  const label = extractOutputText(responseBody).trim().toLowerCase();
  return ["resume", "personal", "general"].includes(label) ? label : "general";
}
