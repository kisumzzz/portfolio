import { env } from "../config/env.mjs";
import { personalKnowledge, resumeKnowledge } from "../config/knowledge.mjs";
import { createEmbedding } from "../lib/openai.mjs";

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

const embeddingCache = new Map();

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

function buildChunkText(chunk) {
  return `${chunk.title}\n${chunk.section}\n${chunk.content}\n${chunk.keywords.join(" ")}`;
}

function cosineSimilarity(left, right) {
  let dotProduct = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (let index = 0; index < left.length; index += 1) {
    const leftValue = left[index];
    const rightValue = right[index];
    dotProduct += leftValue * rightValue;
    leftMagnitude += leftValue * leftValue;
    rightMagnitude += rightValue * rightValue;
  }

  if (!leftMagnitude || !rightMagnitude) {
    return 0;
  }

  return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}

async function getKnowledgeEmbeddings(intent, scopedKnowledge) {
  const cacheKey = `${intent}:${env.embeddingModel}`;

  if (embeddingCache.has(cacheKey)) {
    return embeddingCache.get(cacheKey);
  }

  const responseBody = await createEmbedding({
    model: env.embeddingModel,
    input: scopedKnowledge.map((chunk) => buildChunkText(chunk)),
  });

  const embeddedKnowledge = scopedKnowledge.map((chunk, index) => ({
    ...chunk,
    embedding: responseBody.data[index]?.embedding || [],
  }));

  embeddingCache.set(cacheKey, embeddedKnowledge);
  return embeddedKnowledge;
}

export async function retrieveRelevantChunks(question, intent) {
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

  const [embeddedKnowledge, questionEmbeddingResponse] = await Promise.all([
    getKnowledgeEmbeddings(intent, scopedKnowledge),
    createEmbedding({
      model: env.embeddingModel,
      input: question,
    }),
  ]);

  const questionEmbedding = questionEmbeddingResponse.data[0]?.embedding || [];

  const rankedChunks = embeddedKnowledge
    .map((chunk) => {
      const keywordScore = scoreChunk(questionTokens, chunk);
      const semanticScore = cosineSimilarity(questionEmbedding, chunk.embedding);

      return {
        ...chunk,
        keywordScore,
        semanticScore,
        score: semanticScore * 100 + keywordScore,
      };
    })
    .filter((chunk) => chunk.semanticScore > 0.15 || chunk.keywordScore > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map(({ embedding, keywordScore, semanticScore, score, ...chunk }) => chunk);

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
