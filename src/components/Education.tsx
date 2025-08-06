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
    <section
      data-aos="fade-up"
      className={`shadow-md border-l-4 h-max mx-auto my-2 sm:m-6 p-4 rounded sm:w-96 w-80 text-justify ${
        theme === "light"
          ? "bg-slate-100 border-indigo-900 hover:bg-slate-200"
          : "bg-gray-800 border-indigo-400 hover:bg-gray-700"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1
          className={`${
            theme === "light" ? "text-indigo-900" : "text-indigo-300"
          }`}
        >
          {course}
        </h1>
        <h1>{year}</h1>
      </div>
      <div className="h-px my-1 bg-gray-900"></div>

      <h1 className="font-semibold">{university}</h1>
      <h1>{place}</h1>
      <h1>
        {(percentage && `Percentage: ${percentage}`) ||
          (cgpa && `CGPA: ${cgpa}`)}
      </h1>
    </section>
  );
};

const Education = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <>
      <section id="education" className="mt-16 font-mono">
        {/* Education */}
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
              Education
            </h1>
            <div
              className={`flex-1 h-px ${
                theme === "light" ? "bg-gray-900" : "bg-gray-100"
              }`}
            ></div>
          </div>
          <div className="sm:ml-4 my-6 flex flex-col justify-start flex-wrap items-start">
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
