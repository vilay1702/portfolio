"use client";

import { useContext, Suspense } from "react";
import {
  Home,
  Skills,
  Education,
  Experience,
  PoR,
  Projects,
  Certificates,
  Contact,
  ChatSection,
  Header,
  Footer,
} from "../client/components";
import { ThemeContext } from "../client/context/ThemeContext";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
  </div>
);

export default function Page() {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light"
          ? "bg-slate-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <main className="space-y-16 md:space-y-24 lg:space-y-32">
          <Home />
          <Skills />
          <Education />
          <Experience />
          <PoR />
          <Projects />
          <Certificates />
          <Contact />
          <ChatSection />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}
