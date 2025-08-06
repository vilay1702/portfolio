import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { SKILLS } from "../data";

const Skills = () => {
  const { theme } = useContext(ThemeContext)!;
  return (
    <section id="skills" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-1/4 right-10 w-24 h-24 rounded-full opacity-5 ${
            theme === "light" ? "bg-indigo-500" : "bg-indigo-400"
          } blur-3xl`}
        ></div>
      </div>

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
          Skills
        </h1>
        <div
          className={`flex-1 h-px ${
            theme === "light" ? "bg-gray-900" : "bg-gray-100"
          }`}
        ></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {SKILLS.map(({ category, items }, index) => {
            return (
              <div
                key={index}
                className={`ml-4 sm:ml-8 lg:ml-12 border-l-2 pl-4 sm:pl-6 lg:pl-8 ${
                  theme === "light" ? "border-gray-900" : "border-white"
                }`}
              >
                <h1 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 font-bold text-white">
                  {category}
                </h1>
                <div className="ml-4 sm:ml-6 lg:ml-8 flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                  {items.map((item, index) => {
                    return (
                      <span
                        data-aos="fade-right"
                        data-aos-delay={50 * (index + 1)}
                        className="px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base rounded border border-indigo-500/20 hover:scale-105 hover:border-indigo-400/40"
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
