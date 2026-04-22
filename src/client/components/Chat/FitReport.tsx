"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export interface FitReportData {
  fitScore: number;
  topMatches: string[];
  gaps: string[];
  summary: string;
}

interface FitReportProps {
  report: FitReportData;
  onReset: () => void;
}

const scoreColor = (score: number) => {
  if (score >= 85) return "from-emerald-500 to-green-600";
  if (score >= 70) return "from-indigo-500 to-purple-600";
  if (score >= 50) return "from-amber-500 to-orange-600";
  return "from-rose-500 to-red-600";
};

const scoreLabel = (score: number) => {
  if (score >= 85) return "Strong fit";
  if (score >= 70) return "Solid fit";
  if (score >= 50) return "Partial fit";
  return "Not a fit";
};

const FitReport: React.FC<FitReportProps> = ({ report, onReset }) => {
  const { theme } = useContext(ThemeContext)!;
  const { fitScore, topMatches, gaps, summary } = report;

  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (fitScore / 100) * circumference;

  return (
    <div
      className={`rounded-lg p-4 sm:p-6 lg:p-8 border shadow-xl ${
        theme === "light"
          ? "bg-gradient-to-br from-white to-gray-50 border-gray-200"
          : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              strokeWidth="8"
              fill="none"
              className={theme === "light" ? "stroke-gray-200" : "stroke-gray-700"}
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className={`bg-gradient-to-r ${scoreColor(fitScore)}`}
              style={{
                stroke: "url(#fitGradient)",
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transition: "stroke-dashoffset 900ms ease-out",
              }}
            />
            <defs>
              <linearGradient id="fitGradient" x1="0" y1="0" x2="1" y2="1">
                <stop
                  offset="0%"
                  stopColor={
                    fitScore >= 85
                      ? "#10b981"
                      : fitScore >= 70
                      ? "#6366f1"
                      : fitScore >= 50
                      ? "#f59e0b"
                      : "#f43f5e"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    fitScore >= 85
                      ? "#059669"
                      : fitScore >= 70
                      ? "#9333ea"
                      : fitScore >= 50
                      ? "#ea580c"
                      : "#dc2626"
                  }
                />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={`text-3xl sm:text-4xl font-bold ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {fitScore}
            </span>
            <span
              className={`text-[10px] sm:text-xs uppercase tracking-wider ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              / 100
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div
            className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${scoreColor(
              fitScore
            )} text-white mb-3`}
          >
            {scoreLabel(fitScore)}
          </div>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {summary}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
        <div>
          <h4
            className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            <span className="w-5 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
            Top matches
          </h4>
          <ul className="space-y-2">
            {topMatches.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm sm:text-base leading-relaxed"
              >
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <span
                  className={theme === "light" ? "text-gray-800" : "text-gray-200"}
                >
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            <span className="w-5 h-px bg-gradient-to-r from-amber-500 to-orange-500" />
            Gaps to note
          </h4>
          <ul className="space-y-2">
            {gaps.map((g, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm sm:text-base leading-relaxed"
              >
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                <span
                  className={theme === "light" ? "text-gray-800" : "text-gray-200"}
                >
                  {g}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-end">
        <button
          onClick={onReset}
          className={`text-xs sm:text-sm font-medium px-4 py-2 rounded transition-all duration-200 ${
            theme === "light"
              ? "text-indigo-600 hover:bg-indigo-50"
              : "text-indigo-400 hover:bg-indigo-900/20"
          }`}
        >
          Evaluate another JD →
        </button>
      </div>
    </div>
  );
};

export default FitReport;
