import { useState } from "react";

const suggestedQuestions = [
  "What kind of engineering work do you do?",
  "Tell me about your Amazon experience.",
  "What is your background in AI and distributed systems?",
  "Are you open to AI agent or backend platform roles?",
  "What do you enjoy outside of work?",
];

const initialMessages = [
  {
    id: "welcome",
    sender: "bot",
    text: "Ask me anything about my work, projects, or life outside of work. I use an OpenAI model to understand the type of question first, then answer in my voice.",
  },
];

const loadingSteps = [
  "Understanding the question",
  "Classifying intent",
  "Retrieving relevant context",
  "Drafting a reply in my voice",
];

function ChatMessage({ message }) {
  return (
    <div
      className={`resume-chatbot__message resume-chatbot__message--${message.sender}`}
    >
      <p>{message.text}</p>
      {message.reasoningPanel ? (
        <div className="resume-chatbot__reasoning-panel">
          <div className="resume-chatbot__reasoning-row">
            <span className="resume-chatbot__reasoning-label">Intent</span>
            <span>{message.reasoningPanel.intent}</span>
          </div>
          <div className="resume-chatbot__reasoning-row">
            <span className="resume-chatbot__reasoning-label">Knowledge</span>
            <span>{message.reasoningPanel.knowledgeSource}</span>
          </div>
          <div className="resume-chatbot__reasoning-row">
            <span className="resume-chatbot__reasoning-label">Strategy</span>
            <span>{message.reasoningPanel.answerStrategy}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function ResumeChatbot({ variant = "inline" }) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [isOpen, setIsOpen] = useState(variant === "inline");
  const [isLoading, setIsLoading] = useState(false);
  const [previousResponseId, setPreviousResponseId] = useState(null);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);

  async function submitQuestion(rawQuestion) {
    const question = rawQuestion.trim();

    if (!question || isLoading) {
      return;
    }

    const timestamp = Date.now();

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `${timestamp}-user`,
        sender: "user",
        text: question,
      },
    ]);
    setDraft("");
    setIsLoading(true);
    setLoadingStepIndex(0);

    const loadingInterval = window.setInterval(() => {
      setLoadingStepIndex((currentIndex) =>
        currentIndex === loadingSteps.length - 1 ? currentIndex : currentIndex + 1,
      );
    }, 900);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          previousResponseId,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Chat request failed.");
      }

      setPreviousResponseId(payload.responseId || null);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `${timestamp}-bot`,
          sender: "bot",
          text: payload.answer?.trim() || "I do not have a good answer for that yet.",
          reasoningPanel: payload.reasoningPanel || null,
        },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `${timestamp}-bot-error`,
          sender: "bot",
          text:
            error.message ||
            "The chatbot could not reach the LLM API. Check the local API server and your OpenAI key.",
        },
      ]);
    } finally {
      window.clearInterval(loadingInterval);
      setIsLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitQuestion(draft);
  }

  const isFloating = variant === "floating";

  return (
    <section
      className={
        isFloating
          ? "resume-chatbot resume-chatbot--floating"
          : "resume-chatbot section section-tight"
      }
      aria-labelledby="resume-chatbot-title"
    >
      {isFloating ? (
        <button
          className="resume-chatbot__launcher"
          type="button"
          aria-expanded={isOpen}
          aria-controls="resume-chatbot-panel"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="resume-chatbot__launcher-icon">AI</span>
          <span className="resume-chatbot__launcher-label">Chat</span>
        </button>
      ) : null}

      <div
        id="resume-chatbot-panel"
        className={`resume-chatbot__panel${
          isFloating ? " resume-chatbot__panel--floating" : ""
        }${isFloating && !isOpen ? " resume-chatbot__panel--hidden" : ""}`}
      >
        <div className="resume-chatbot__intro">
          <div className="resume-chatbot__title-row">
            <div>
              <p className="section-kicker">Resume chatbot</p>
              <h2 id="resume-chatbot-title">Ask about my background</h2>
            </div>
            {isFloating ? (
              <button
                className="resume-chatbot__close"
                type="button"
                aria-label="Close chatbot"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            ) : null}
          </div>
          <p>
            A recruiter-friendly assistant that retrieves resume context first,
            then asks an OpenAI reasoning model to answer from that grounding.
          </p>
        </div>

        <div
          className="resume-chatbot__suggestions"
          aria-label="Suggested questions"
        >
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              className="resume-chatbot__chip"
              type="button"
              onClick={() => submitQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="resume-chatbot__messages" aria-live="polite">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading ? (
            <div className="resume-chatbot__message resume-chatbot__message--bot">
              <p>{loadingSteps[loadingStepIndex]}...</p>
            </div>
          ) : null}
        </div>

        <form className="resume-chatbot__form" onSubmit={handleSubmit}>
          <label
            className="resume-chatbot__label"
            htmlFor="resume-chatbot-input"
          >
            Ask a question
          </label>
          <div className="resume-chatbot__input-row">
            <input
              id="resume-chatbot-input"
              className="resume-chatbot__input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about Amazon, AI systems, education..."
            />
            <button className="resume-chatbot__submit" type="submit">
              {isLoading ? "Thinking..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
