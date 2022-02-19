import React, { useContext } from "react";
import a from "../images/certificate_NPTEL.png";
import b from "../images/certificate_problem_solving.png";
import c from "../images/certificate_python_hackerrank.png";
import d from "../images/certificate_pointers.png";
import e from "../images/certificate_python.png";
import f from "../images/certificate_coursera.png";
import g from "../images/certificate_CSS.png";
import h from "../images/certificate_C.png";
import Carousel from "./Carousel";
import { ThemeContext } from "../ThemeContext";

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
      <Carousel arr={certificates} />
    </section>
  );
};

export default Certificates;
