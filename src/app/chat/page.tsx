"use client";

import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../client/context/ThemeContext";
import { ChatPanel } from "../../client/components/Chat";

export default function ChatPage() {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "light"
          ? "bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900"
          : "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      }`}
    >
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          theme === "light"
            ? "bg-white/70 border-gray-200"
            : "bg-gray-900/70 border-gray-700"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className={`text-sm font-mono font-medium transition-colors ${
              theme === "light"
                ? "text-gray-700 hover:text-indigo-600"
                : "text-gray-300 hover:text-indigo-400"
            }`}
          >
            ← Vilay Bende
          </Link>
          <span
            className={`text-xs sm:text-sm font-mono ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            AI Assistant
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col">
        <div className="mb-6 sm:mb-8 text-center">
          <h1
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Chat with Vilay&apos;s AI
          </h1>
          <p
            className={`mt-3 text-sm sm:text-base max-w-2xl mx-auto ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Ask anything about his experience, or paste a job description to
            see how he stacks up. Answers are grounded in his actual portfolio
            — no fluff.
          </p>
        </div>
        <div className="flex-1 min-h-0">
          <ChatPanel variant="page" />
        </div>
      </main>
    </div>
  );
}
