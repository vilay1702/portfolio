import React, { useContext } from "react";
import project from "../images/project.WebP";
import { ThemeContext } from "../ThemeContext";
import { PROJECTS } from "../data";
import { ProjectData } from "../interfaces";

interface CardProps extends ProjectData {
  index: number;
}

const Card: React.FC<CardProps> = ({
  name,
  techStack,
  code,
  live,
  img,
  index,
}) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      key={index}
      className={`group relative w-72 sm:w-80 lg:w-96 rounded-lg mx-2 my-4 overflow-hidden transition-all duration-500 hover:scale-105 ${
        theme === "light"
          ? "bg-white shadow-xl hover:shadow-2xl border border-gray-200"
          : "bg-gray-800 shadow-xl hover:shadow-2xl border border-gray-700"
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
        <img
          src={img ? img : project}
          alt={`${name} project screenshot`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {/* Enhanced overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        {/* Project title overlay on hover */}
        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-lg">{name}</h3>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Project Title */}
        <h3
          className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 text-center transition-colors duration-300 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {name}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
          {techStack.map((item, techIndex) => (
            <span
              key={techIndex}
              className={`px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded text-xs sm:text-sm font-medium transition-all duration-300 ${
                theme === "light"
                  ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200 border border-indigo-200"
                  : "bg-gradient-to-r from-indigo-900 to-purple-900 text-indigo-200 hover:from-indigo-800 hover:to-purple-800 border border-indigo-700"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            href={live || "#"}
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded text-center font-medium transition-all duration-300 transform ${
              live
                ? `hover:scale-105 ${
                    theme === "light"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl"
                  }`
                : `cursor-not-allowed opacity-50 ${
                    theme === "light"
                      ? "bg-gray-300 text-gray-500"
                      : "bg-gray-600 text-gray-400"
                  }`
            }`}
            onClick={!live ? (e) => e.preventDefault() : undefined}
          >
            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live
            </span>
          </a>

          <a
            href={code || "#"}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded text-center font-medium transition-all duration-300 transform ${
              code
                ? `hover:scale-105 ${
                    theme === "light"
                      ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border border-gray-300"
                      : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 hover:from-gray-600 hover:to-gray-700 border border-gray-600"
                  }`
                : `cursor-not-allowed opacity-50 ${
                    theme === "light"
                      ? "bg-gray-300 text-gray-500"
                      : "bg-gray-600 text-gray-400"
                  }`
            }`}
            onClick={!code ? (e) => e.preventDefault() : undefined}
          >
            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Code
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <section id="works" className="font-mono px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-1/3 left-10 w-32 h-32 rounded-full opacity-5 ${
            theme === "light" ? "bg-purple-500" : "bg-purple-400"
          } blur-3xl`}
        ></div>
      </div>

      {/* Projects */}
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
            Projects
          </h1>
          <div
            className={`flex-1 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className={`projects-scrollbar mt-8 sm:mt-12 lg:mt-16 mb-12 sm:mb-16 lg:mb-20 flex w-full mx-auto overflow-x-scroll ${
          theme === "light"
            ? "bg-gradient-to-r from-slate-50 to-gray-100"
            : "bg-gradient-to-r from-gray-800 to-gray-900"
        }`}
      >
        <div className="flex gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 min-w-max">
          {PROJECTS.map((item, index) => (
            <Card {...item} key={index} index={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
