"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext";
import ChatPanel from "./ChatPanel";

const ChatSection = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <section id="ask" className="font-mono relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-1/3 left-10 w-32 h-32 rounded-full opacity-5 ${
            theme === "light" ? "bg-indigo-500" : "bg-indigo-400"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-10 w-32 h-32 rounded-full opacity-5 ${
            theme === "light" ? "bg-purple-500" : "bg-purple-400"
          } blur-3xl`}
        ></div>
      </div>

      {/* Header */}
      <section>
        <div className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
          <div
            className={`w-7 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
          <h1
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl p-2 sm:p-3 lg:p-4 border-2 ${
              theme === "light" ? "border-gray-900" : "border-gray-100"
            }`}
          >
            Hiring?
          </h1>
          <div
            className={`flex-1 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </section>

      {/* Panel */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p
            className={`text-center text-sm sm:text-base mb-6 sm:mb-8 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Ask anything about Vilay&apos;s experience or paste a job
            description to see how he stacks up.{" "}
            <Link
              href="/chat"
              className={`font-semibold ${
                theme === "light"
                  ? "text-indigo-600 hover:text-indigo-700"
                  : "text-indigo-400 hover:text-indigo-300"
              }`}
            >
              Open full chat ↗
            </Link>
          </p>
          <ChatPanel variant="section" />
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
