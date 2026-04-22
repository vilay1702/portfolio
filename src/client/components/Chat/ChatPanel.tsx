"use client";

import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  FormEvent,
  KeyboardEvent,
} from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ThemeContext } from "../../context/ThemeContext";
import FitReport, { FitReportData } from "./FitReport";

type Mode = "ask" | "qualify";

interface ChatPanelProps {
  variant?: "section" | "page";
}

const STARTER_PROMPTS = [
  "What is Vilay's experience with React?",
  "Has he worked with Shopify?",
  "Tell me about his biggest project.",
  "Is he open to new roles?",
];

const getMessageText = (
  parts: Array<{ type: string; text?: string }>,
): string =>
  parts
    .filter((p) => p.type === "text" && typeof p.text === "string")
    .map((p) => p.text as string)
    .join("");

const ChatPanel: React.FC<ChatPanelProps> = ({ variant = "section" }) => {
  const { theme } = useContext(ThemeContext)!;
  const [mode, setMode] = useState<Mode>("ask");

  const [sessionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36)
  );

  // Ask mode
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { sessionId },
      }),
    [sessionId]
  );
  const { messages, sendMessage, status, error, setMessages } = useChat({
    transport,
  });
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Qualify mode
  const [jd, setJd] = useState("");
  const [qualifying, setQualifying] = useState(false);
  const [qualifyError, setQualifyError] = useState<string | null>(null);
  const [report, setReport] = useState<FitReportData | null>(null);

  const isStreaming = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, status]);

  const submitAsk = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const onAskSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitAsk(input);
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitAsk(input);
    }
  };

  const onQualifySubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = jd.trim();
    if (trimmed.length < 40) {
      setQualifyError(
        "Please paste a full job description (at least 40 characters).",
      );
      return;
    }
    setQualifyError(null);
    setReport(null);
    setQualifying(true);
    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: trimmed, sessionId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setQualifyError(data?.error || "Could not generate a fit report.");
      } else {
        setReport(data as FitReportData);
      }
    } catch {
      setQualifyError("Network error. Please try again.");
    } finally {
      setQualifying(false);
    }
  };

  const resetQualify = () => {
    setReport(null);
    setJd("");
    setQualifyError(null);
  };

  const resetAsk = () => {
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  };

  const wrapperMaxHeight =
    variant === "page" ? "h-[calc(100vh-4rem)]" : "h-[640px] max-h-[80vh]";

  const panelBg =
    theme === "light"
      ? "bg-gradient-to-br from-white to-slate-50 border-gray-200"
      : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700";

  return (
    <div
      className={`flex flex-col ${wrapperMaxHeight} rounded-lg border shadow-2xl overflow-hidden ${panelBg}`}
    >
      {/* Top bar: mode toggle + reset */}
      <div
        className={`flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b ${
          theme === "light" ? "border-gray-200" : "border-gray-700"
        }`}
      >
        <div
          className={`inline-flex rounded-full p-1 border ${
            theme === "light"
              ? "bg-gray-100 border-gray-200"
              : "bg-gray-900 border-gray-700"
          }`}
        >
          <button
            type="button"
            onClick={() => setMode("ask")}
            className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
              mode === "ask"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                : theme === "light"
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Ask
          </button>
          <button
            type="button"
            onClick={() => setMode("qualify")}
            className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
              mode === "qualify"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                : theme === "light"
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Qualify
          </button>
        </div>

        {mode === "ask" && messages.length > 0 && (
          <button
            onClick={resetAsk}
            className={`text-xs font-medium px-3 py-1.5 rounded transition-all duration-200 ${
              theme === "light"
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-400 hover:bg-gray-700/50"
            }`}
          >
            Clear
          </button>
        )}
        {mode === "qualify" && (report || jd.length > 0) && (
          <button
            onClick={resetQualify}
            className={`text-xs font-medium px-3 py-1.5 rounded transition-all duration-200 ${
              theme === "light"
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-400 hover:bg-gray-700/50"
            }`}
          >
            Clear
          </button>
        )}
      </div>

      {mode === "ask" ? (
        <>
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <i className="fas fa-sparkles text-white text-xl"></i>
                </div>
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    Ask me anything about Vilay
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Answers come from his portfolio data, no fluff, no
                    fabrication.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-xl">
                  {STARTER_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => submitAsk(p)}
                      className={`text-xs sm:text-sm px-3 py-2 rounded border transition-all duration-200 hover:scale-105 ${
                        theme === "light"
                          ? "bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
                          : "bg-gray-800 text-gray-300 border-gray-600 hover:border-indigo-500 hover:text-indigo-400"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = getMessageText(m.parts || []);
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-lg px-4 py-3 text-sm sm:text-base leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : theme === "light"
                          ? "bg-gray-100 text-gray-900 border border-gray-200"
                          : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    {text || (
                      <span className="inline-flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse" />
                        <span
                          className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse"
                          style={{ animationDelay: "200ms" }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-current opacity-60 animate-pulse"
                          style={{ animationDelay: "400ms" }}
                        />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {error && (
              <div
                className={`text-sm rounded-md p-3 ${
                  theme === "light"
                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                    : "bg-rose-950/40 text-rose-300 border border-rose-900"
                }`}
              >
                {error.message || "Something went wrong. Please try again."}
              </div>
            )}
          </div>

          <form
            onSubmit={onAskSubmit}
            className={`p-3 sm:p-4 border-t ${
              theme === "light"
                ? "bg-white/70 border-gray-200"
                : "bg-gray-900/70 border-gray-700"
            }`}
          >
            <div
              className={`flex items-end gap-2 rounded-lg border transition-all duration-200 focus-within:border-indigo-500 ${
                theme === "light"
                  ? "bg-white border-gray-300"
                  : "bg-gray-800 border-gray-600"
              }`}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Ask about Vilay's experience, skills, projects…"
                rows={1}
                maxLength={2000}
                disabled={isStreaming}
                className={`flex-1 bg-transparent resize-none px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none disabled:opacity-50 ${
                  theme === "light"
                    ? "text-gray-900 placeholder-gray-400"
                    : "text-white placeholder-gray-500"
                }`}
                style={{ maxHeight: 120 }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="m-1 p-2 sm:p-3 rounded bg-gradient-to-r from-indigo-600 to-purple-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                aria-label="Send"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19V5m0 0l-7 7m7-7l7 7"
                  />
                </svg>
              </button>
            </div>
            <p
              className={`text-[10px] sm:text-xs mt-2 text-center ${
                theme === "light" ? "text-gray-500" : "text-gray-500"
              }`}
            >
              AI-generated · grounded in Vilay's portfolio data · may
              occasionally miss nuance
            </p>
          </form>
        </>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
          {!report ? (
            <form
              onSubmit={onQualifySubmit}
              className="space-y-4 h-full flex flex-col"
            >
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  Paste a job description
                </label>
                <p
                  className={`text-xs mb-3 ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  You&apos;ll get an honest fit score, specific matches, and
                  real gaps. Not a sales pitch.
                </p>
              </div>
              <textarea
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the full job description here…"
                maxLength={6000}
                disabled={qualifying}
                className={`flex-1 min-h-[200px] rounded-lg border px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:border-indigo-500 transition-all duration-200 ${
                  theme === "light"
                    ? "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    : "bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                } disabled:opacity-50`}
              />
              {qualifyError && (
                <div
                  className={`text-sm rounded-md p-3 ${
                    theme === "light"
                      ? "bg-rose-50 text-rose-700 border border-rose-200"
                      : "bg-rose-950/40 text-rose-300 border border-rose-900"
                  }`}
                >
                  {qualifyError}
                </div>
              )}
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`text-xs ${
                    theme === "light" ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {jd.length} / 6000
                </span>
                <button
                  type="submit"
                  disabled={qualifying || jd.trim().length < 40}
                  className="px-5 sm:px-6 py-2 sm:py-3 rounded bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm sm:text-base disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  {qualifying ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          opacity="0.25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                      Evaluating…
                    </>
                  ) : (
                    <>Evaluate fit →</>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <FitReport report={report} onReset={resetQualify} />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatPanel;
