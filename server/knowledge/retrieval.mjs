import { personalKnowledge, resumeKnowledge } from "../config/knowledge.mjs";

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "about",
  "do",
  "for",
  "how",
  "i",
  "is",
  "me",
  "my",
  "of",
  "or",
  "the",
  "to",
  "what",
  "your",
]);

function tokenize(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token && !stopWords.has(token));
}

function scoreChunk(questionTokens, chunk) {
  const searchableText = `${chunk.title} ${chunk.section} ${chunk.content} ${chunk.keywords.join(" ")}`.toLowerCase();
  const uniqueTokens = [...new Set(questionTokens)];

  return uniqueTokens.reduce((score, token) => {
    if (!searchableText.includes(token)) {
      return score;
    }

    if (chunk.keywords.some((keyword) => keyword.toLowerCase().includes(token))) {
      return score + 4;
    }

    if (chunk.title.toLowerCase().includes(token)) {
      return score + 3;
    }

    return score + 2;
  }, 0);
}

export function retrieveRelevantChunks(question, intent) {
  const questionTokens = tokenize(question);
  const scopedKnowledge =
    intent === "resume"
      ? resumeKnowledge
      : intent === "personal"
        ? personalKnowledge
        : [];

  if (scopedKnowledge.length === 0) {
    return {
      chunks: [],
      hasDirectMatch: false,
    };
  }

  const rankedChunks = scopedKnowledge
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(questionTokens, chunk),
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);

  if (rankedChunks.length > 0) {
    return {
      chunks: rankedChunks,
      hasDirectMatch: true,
    };
  }

  return {
    chunks:
      intent === "resume"
        ? resumeKnowledge.filter((chunk) => chunk.id === "profile-summary")
        : personalKnowledge.slice(0, 2),
    hasDirectMatch: false,
  };
}
