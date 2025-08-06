import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { EDUCATION } from "../data";
import { EducationData } from "../interfaces";

interface CardProps {
  data: EducationData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { theme } = useContext(ThemeContext)!;
  const { university, course, cgpa, percentage, year, place } = data;

  return (
    <div
      data-aos="fade-up"
      className={`group relative overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${
        theme === "light"
          ? "bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl border border-gray-200"
          : "bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl border border-gray-700"
      }`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-lg`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with course and year */}
        <div className="flex items-start justify-between mb-3 sm:mb-4 lg:mb-6">
          <div className="flex-1">
            <h3
              className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {course}
            </h3>
            <div
              className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2 rounded inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md`}
            >
              {year}
            </div>
          </div>
        </div>

        {/* University and place */}
        <div className="mb-3 sm:mb-4 lg:mb-6">
          <h4
            className={`font-semibold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 ${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            }`}
          >
            {university}
          </h4>
          <p
            className={`text-xs sm:text-sm lg:text-base ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            📍 {place}
          </p>
        </div>

        {/* Performance metrics */}
        <div
          className={`inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md`}
        >
          <span className="text-xs sm:text-sm font-medium">
            {percentage ? `Percentage: ${percentage}` : `CGPA: ${cgpa}`}
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10 ${
          theme === "light" ? "bg-indigo-500" : "bg-indigo-400"
        } rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10`}
      ></div>
    </div>
  );
};

const Education = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <>
      <section
        id="education"
        className="font-mono px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute bottom-1/4 left-10 w-28 h-28 rounded-full opacity-5 ${
              theme === "light" ? "bg-green-500" : "bg-green-400"
            } blur-3xl`}
          ></div>
        </div>

        {/* Education */}
        <section>
          <div className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
            <div
              className={`w-4 h-px ${
                theme === "light" ? "bg-gray-900" : "bg-gray-100"
              }`}
            ></div>
            <h1
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl p-2 sm:p-3 lg:p-4 border-2 ${
                theme === "light" ? "border-gray-900" : "border-gray-100"
              }`}
            >
              Education
            </h1>
            <div
              className={`flex-1 h-px ${
                theme === "light" ? "bg-gray-900" : "bg-gray-100"
              }`}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {EDUCATION.map((data, index) => {
              return <Card key={index} data={data} />;
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Education;
