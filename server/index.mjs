import { createServer } from "node:http";
import { env } from "./config/env.mjs";
import { sendJson } from "./lib/http.mjs";
import { handleChatRoute } from "./routes/chatRoute.mjs";

const server = createServer((request, response) => {
  if (!request.url) {
    sendJson(response, 404, { error: "Not found." });
    return;
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

  if (request.url === "/api/chat" && request.method === "POST") {
    handleChatRoute(request, response);
    return;
  }

  sendJson(response, 404, { error: "Not found." });
});

server.listen(env.port, "127.0.0.1", () => {
  console.log(`OpenAI proxy listening on http://127.0.0.1:${env.port}`);
});
