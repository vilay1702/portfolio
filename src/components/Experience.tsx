import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { EXPERIENCE } from "../data";
import { ExperienceData } from "../interfaces/index";

interface CardProps {
  data: ExperienceData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { theme } = useContext(ThemeContext)!;
  const { role, oranisation, duration, experience } = data;
  return (
    <section
      data-aos="fade-up"
      className={`shadow-md border-l-4 h-max mx-auto my-2 sm:mx-6 p-4 rounded sm:w-96 w-80 text-justify ${
        theme === "light"
          ? "bg-slate-100 border-indigo-900 hover:bg-slate-200"
          : "bg-gray-800 border-indigo-400 hover:bg-gray-700"
      }`}
    >
      <h1
        className={`${
          theme === "light" ? "text-indigo-900" : "text-indigo-300"
        }`}
      >
        {role}
      </h1>
      <h1 className="text-lg font-bold">{oranisation}</h1>
      <div className="h-px my-1 bg-gray-900"></div>
      <h1
        className={`text-sm ${
          theme === "light" ? "text-gray-700" : "text-gray-300"
        }`}
      >
        {duration}
      </h1>
      {experience.map((item, index) => {
        return (
          <h1 key={index}>
            <span
              className={`text-lg font-bold ${
                theme === "light" ? "text-indigo-900" : "text-indigo-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item[0]}
            </span>
            {item.slice(1)}
          </h1>
        );
      })}
    </section>
  );
};

const Experience = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <section id="experience" className="mt-16 font-mono">
      {/* Experience */}
      <section>
        <div className="flex justify-between items-center">
          <div
            className={`w-4 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
          <h1
            className={`font-serif text-5xl p-2 border-2 ${
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
        <div className="sm:ml-4 my-6 flex justify-start flex-wrap items-start">
          {EXPERIENCE.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default Experience;
