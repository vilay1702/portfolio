import React, { useContext } from "react";
import a from "../images/certificate_NPTEL.PNG";
import b from "../images/certificate_problem_solving.PNG";
import c from "../images/certificate_python_hackerrank.PNG";
import d from "../images/certificate_pointers.PNG";
import e from "../images/certificate_python.PNG";
import f from "../images/certificate_coursera.PNG";
import g from "../images/certificate_CSS.PNG";
import h from "../images/certificate_C.PNG";
import Carousel from "./Carousel";
import { ThemeContext } from "../ThemeContext";

// const Card = ({ data, id }) => {
//   return (
//     <img
//       data-aos="fade-up"
//       className="shadow-lg w-80 m-6"
//       key={id}
//       src={data}
//       alt="certificate"
//     />
//   );
// };

const certificates = [a, b, c, d, e, f, g, h];

const Certificates = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="certificates" className="mt-16   font-mono">
      {/* Certificates */}
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
            Certificates
          </h1>
          <div
            className={`flex-1 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </section>
      {/* <div className=" flex sm:justify-start justify-center flex-wrap items-start">
        {certificates.map((data, index) => {
          return <Card data={data} id={index} />;
        })}
      </div> */}
      <Carousel arr={certificates} />
    </section>
  );
};

export default Certificates;
