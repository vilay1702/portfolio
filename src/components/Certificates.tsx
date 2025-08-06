import React, { useContext } from "react";
import a from "../images/certificate_NPTEL.WebP";
import b from "../images/certificate_problem_solving.WebP";
import c from "../images/certificate_python_hackerrank.WebP";
import d from "../images/certificate_pointers.WebP";
import e from "../images/certificate_python.WebP";
import f from "../images/certificate_coursera.WebP";
import g from "../images/certificate_CSS.WebP";
import h from "../images/certificate_C.WebP";
import Carousel from "./Carousel";
import { ThemeContext } from "../ThemeContext";

interface CertificateData {
  image: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certificates: CertificateData[] = [
  {
    image: a,
    title: "NPTEL Course Completion",
    issuer: "NPTEL",
    date: "2023",
    description:
      "Advanced programming concepts and software engineering principles",
  },
  {
    image: b,
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "2023",
    description: "Advanced problem solving and algorithmic thinking",
  },
  {
    image: c,
    title: "Python Programming",
    issuer: "HackerRank",
    date: "2023",
    description: "Python programming fundamentals and advanced concepts",
  },
  {
    image: d,
    title: "C Programming",
    issuer: "Coursera",
    date: "2023",
    description: "C programming language and pointer concepts",
  },
  {
    image: e,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2023",
    description: "Comprehensive Python programming course",
  },
  {
    image: f,
    title: "Web Development",
    issuer: "Coursera",
    date: "2023",
    description: "Full-stack web development fundamentals",
  },
  {
    image: g,
    title: "CSS Fundamentals",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "CSS styling and responsive design",
  },
  {
    image: h,
    title: "C Programming",
    issuer: "Coursera",
    date: "2023",
    description: "C programming language fundamentals",
  },
];

const Certificates = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <section id="certificates" className="font-mono">
      {/* Certificates Header */}
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
            Certificates
          </h1>
          <div
            className={`flex-1 h-px ${
              theme === "light" ? "bg-gray-900" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </section>

      {/* Certificates Carousel */}
      <div className="mt-8 sm:mt-12 lg:mt-16  px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Carousel arr={certificates.map((cert) => cert.image)} />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
