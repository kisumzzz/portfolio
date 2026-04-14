import { createChatReply } from "../services/chatService.mjs";
import { collectRequestBody, sendJson } from "../lib/http.mjs";
import { env } from "../config/env.mjs";

export async function handleChatRoute(request, response) {
  if (!env.apiKey) {
    sendJson(response, 500, {
      error:
        "Missing OPENAI_API_KEY. Add it to your environment before starting the API server.",
    });
    return;
  }

  let payload;

  try {
    payload = await collectRequestBody(request);
  } catch {
    sendJson(response, 400, { error: "Request body must be valid JSON." });
    return;
  }

  const question = payload.question?.trim();

  if (!question) {
    sendJson(response, 400, { error: "Question is required." });
    return;
  }

  try {
    const chatReply = await createChatReply({
      previousResponseId: payload.previousResponseId,
      question,
    });

    sendJson(response, 200, chatReply);
  } catch (error) {
    sendJson(response, 502, {
      error: error.message || "The chatbot could not complete the request.",
    });
  }
}
