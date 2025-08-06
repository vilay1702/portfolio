import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { EXPERIENCE } from "../data";
import { ExperienceData } from "../interfaces";

interface CardProps {
  data: ExperienceData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { theme } = useContext(ThemeContext)!;
  const { role, oranisation, duration, experience } = data;

  return (
    <div
      data-aos="fade-up"
      className={`group relative overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${
        theme === "light"
          ? "bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl border border-gray-200"
          : "bg-gradient-to-br from-gray-800 to-blue-900/20 shadow-xl hover:shadow-2xl border border-gray-700"
      }`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 rounded-lg`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with role and duration */}
        <div className="flex items-start justify-between mb-3 sm:mb-4 lg:mb-6">
          <div className="flex-1">
            <h3
              className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {role}
            </h3>
            <div
              className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2 rounded inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md`}
            >
              {duration}
            </div>
          </div>
        </div>

        {/* Organization */}
        <div className="mb-3 sm:mb-4 lg:mb-6">
          <h4
            className={`font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 ${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            }`}
          >
            🏢 {oranisation}
          </h4>
        </div>

        {/* Experience points */}
        <div className="space-y-2 sm:space-y-3">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 sm:space-x-3"
            >
              <div
                className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                  theme === "light" ? "bg-blue-500" : "bg-blue-400"
                }`}
              ></div>
              <p
                className={`text-xs sm:text-sm lg:text-base leading-relaxed ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10 ${
          theme === "light" ? "bg-blue-500" : "bg-blue-400"
        } rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10`}
      ></div>
    </div>
  );
};

const Experience = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <>
      <section id="experience" className="font-mono relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute top-1/3 right-10 w-32 h-32 rounded-full opacity-5 ${
              theme === "light" ? "bg-blue-500" : "bg-blue-400"
            } blur-3xl`}
          ></div>
        </div>

        {/* Experience */}
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
              Experience
            </h1>
            <div
              className={`flex-1 h-px ${
                theme === "light" ? "bg-gray-900" : "bg-gray-100"
              }`}
            ></div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {EXPERIENCE.map((data, index) => {
                return <Card data={data} key={index} />;
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Experience;
