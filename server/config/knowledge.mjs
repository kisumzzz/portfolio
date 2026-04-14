import { readFileSync } from "node:fs";

export const resumeKnowledge = JSON.parse(
  readFileSync(new URL("../../src/data/resumeKnowledge.json", import.meta.url), "utf8"),
);

export const personalKnowledge = JSON.parse(
  readFileSync(new URL("../../src/data/personalKnowledge.json", import.meta.url), "utf8"),
);
