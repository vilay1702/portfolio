import React, { useContext } from "react";
import project from "../images/project.WebP";
import { ThemeContext } from "../ThemeContext";
import { PROJECTS } from "../data";
import { ProjectData } from "../interfaces/index";

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
      className={`w-60 rounded mx-6 my-10 p-2 ${
        theme === "light"
          ? "bg-gray-400 hover:bg-gray-800"
          : "bg-gray-600 hover:bg-gray-400"
      }`}
    >
      <img
        src={img ? img : project}
        alt=" random imgee"
        className="w-full h-40 object-cover object-center rounded-lg shadow-md"
      />

      <div className="relative px-4 -mt-16 ">
        <div
          className={`py-4 px-6 rounded-lg flex flex-col items-center justify-between shadow-md h-56  ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          }`}
        >
          <div className="w-full ">
            <h1
              className={`text-center font-semibold ${
                theme === "light" ? "text-indigo-900" : "text-indigo-300"
              }`}
            >
              {name}
            </h1>
            <div className="w-full h-px bg-gray-900"></div>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {techStack.map((item, index) => {
              return (
                <span
                  className="rounded p-1 m-1 bg-indigo-600 text-white text-xs"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <a
              target="_blank"
              rel="noreferrer"
              href={live ? live : "#"}
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-900 hover:text-white"
            >
              Live
            </a>

            <a
              href={code ? code : "#"}
              target="_blank"
              rel="noreferrer"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-900 hover:text-white"
            >
              Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <section id="works" className="mt-16 font-mono">
      {/* Projects */}
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
            Projects
          </h1>
          <div
            className={`flex-1 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </section>
      <section
        className={`projects-scrollbar mt-10 mb-20 flex md:w-9/12 w-10/12 mx-auto overflow-x-scroll ${
          theme === "light" ? "bg-slate-100" : "bg-gray-800"
        }`}
      >
        {PROJECTS.map((item, index) => (
          <Card {...item} key={index} index={index} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
