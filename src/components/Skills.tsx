import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { SKILLS } from "../data";

const Skills = () => {
  const { theme } = useContext(ThemeContext)!;
  return (
    <section id="skills" className="mt-16">
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
          Skills
        </h1>
        <div
          className={`flex-1 h-px ${
            theme === "light" ? "bg-gray-900" : "bg-gray-100"
          }`}
        ></div>
      </div>

      {SKILLS.map(({ category, items }, index) => {
        return (
          <div
            key={index}
            className={`ml-4 sm:ml-10 my-8 border-l-2 pl-4 ${
              theme === "light" ? "border-gray-900" : "border-white"
            }`}
          >
            <h1 className="text-xl mt-4 mb-1 font-bold">{category}</h1>
            <div className="ml-4 flex flex-wrap">
              {items.map((item, index) => {
                return (
                  <span
                    data-aos="fade-right"
                    data-aos-delay={50 * (index + 1)}
                    className="m-2 px-2 bg-indigo-600 text-white shadow py-1 bg-gradient-to-r from-indigo-600 to-indigo-700"
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
    </section>
  );
};

export default Skills;
