import { existsSync, readFileSync } from "node:fs";

export function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const fileContents = readFileSync(filePath, "utf8");
  const lines = fileContents.split(/\r?\n/);

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env");

export const env = {
  port: Number(process.env.OPENAI_PROXY_PORT || 8787),
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL || "gpt-5",
  reasoningEffort: process.env.OPENAI_REASONING_EFFORT || "medium",
  intentModel: process.env.OPENAI_INTENT_MODEL || process.env.OPENAI_MODEL || "gpt-5",
};
