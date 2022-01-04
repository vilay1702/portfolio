import React, { useContext } from "react";
import bad from "../images/project_bad.PNG";
import project from "../images/project.jfif";
import githubUsers from "../images/project_github.jfif";
import reduxCart from "../images/project_redux.jfif";
import custom from "../images/project_custom.PNG";
import { ThemeContext } from "../ThemeContext";

const projectsList = [
  {
    name: "Github Users",
    techStack: ["React", "Javascript", "HTML", "CSS", "API"],
    code: "https://github.com/vilay1702/github-users",
    live: "https://vilay1702.github.io/github-users/",
    img: githubUsers,
  },
  {
    name: "Redux Cart",
    techStack: ["React", "Redux", "Javascript", "HTML", "CSS", "API"],
    code: "https://github.com/vilay1702/redux-cart",
    live: "https://vilay1702.github.io/redux-cart/",
    img: reduxCart,
  },
  {
    name: "Breaking Bad Characters",
    techStack: ["React", "Javascript", "HTML", "CSS", "API"],
    code: "https://github.com/vilay1702/breakingBadCharacters",
    live: "https://breakingbadbyvilay.netlify.app/",
    img: bad,
  },
  {
    name: "Notes App",
    techStack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"],
    code: "https://github.com/vilay1702/NotesApp",
    live: null,
    img: null,
  },
  {
    name: "Custom Resume Page",
    techStack: ["HTML", "SASS", "React Js"],
    code: "https://github.com/vilay1702/custom-resume-page",
    live: "https://vilay1702.github.io/custom-resume-page/",
    img: custom,
  },
];

const Card = ({ name, techStack, code, live, img }, index) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      key={index}
      className={`w-60 rounded m-4 p-2 ${
        theme === "light"
          ? "bg-gray-100 hover:bg-gray-800"
          : "bg-gray-800 hover:bg-gray-600"
      }`}
    >
      <img
        src={img ? img : project}
        alt=" random imgee"
        className="w-full h-40 object-cover object-center rounded-lg shadow-md"
      />

      <div className="relative px-4 -mt-16 ">
        <div
          className={`py-4 px-6 rounded-lg flex flex-col items-center justify-between shadow-md h-56 hover:scale-125 ${
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
  const { theme } = useContext(ThemeContext);

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
        className={`my-4 flex w-full mx-auto overflow-x-scroll ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        {projectsList.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
