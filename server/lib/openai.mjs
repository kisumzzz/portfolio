import { env } from "../config/env.mjs";

export function extractOutputText(responseBody) {
  if (responseBody.output_text) {
    return responseBody.output_text;
  }

  const messageItem = responseBody.output?.find((item) => item.type === "message");
  const textItem = messageItem?.content?.find((item) => item.type === "output_text");
  return textItem?.text || "";
}

export async function createOpenAIResponse(body) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error?.message || "OpenAI API request failed.");
  }

  return responseBody;
}
