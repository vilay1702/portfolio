import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

const contacts = [
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/vilaybende/",
    color:
      "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://twitter.com/bendevilay",
    color:
      "bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/vilay_bende/",
    color:
      "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
  },
];

const Contact = () => {
  const highlightText = "Liked my portfolio? Hire Me!!".split(" ");
  const highlightTextLength = highlightText.length;
  const { theme } = useContext(ThemeContext)!;
  const [copy, setCopy] = useState("copy");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (current === highlightTextLength - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 200);
  }, [current, highlightTextLength]);

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 lg:py-20 w-full px-4 sm:px-6 lg:px-8 relative ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-gray-800 to-gray-900"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10 ${
            theme === "light" ? "bg-indigo-500" : "bg-indigo-400"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full opacity-10 ${
            theme === "light" ? "bg-purple-500" : "bg-purple-400"
          } blur-3xl`}
        ></div>
      </div>

      <div
        className={`w-max flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 items-center text-center mx-auto`}
      >
        <div className={`w-full h-px overflow-x-hidden`}>
          <div
            className={`line-animation ${
              theme === "light" ? "bg-gray-900" : "bg-white"
            }`}
          ></div>
        </div>
        <h1
          className={`font-serif text-lg sm:text-xl lg:text-2xl space-x-1 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}
        >
          Liked my portfolio?{" "}
          <span
            className={theme === "light" ? "text-blue-600" : "text-blue-400"}
          >
            Hire Me!!
          </span>
        </h1>

        <div
          className={`cursor-pointer w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded text-base sm:text-lg border ${
            theme === "light"
              ? "border-gray-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              : "text-white border-gray-600 bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
          }`}
          onClick={() => {
            navigator.clipboard.writeText("vilay17bende@gmail.com");
            setCopy("copied");
            setTimeout(() => setCopy("copy"), 2000);
          }}
        >
          <h1 className="text-sm sm:text-base lg:text-lg">
            vilay17bende@gmail.com
          </h1>

          <h1
            className={`text-sm sm:text-base ml-4 sm:ml-8 ${
              copy === "copied"
                ? "text-green-600"
                : theme === "light"
                ? "text-blue-600"
                : "text-blue-400"
            }`}
          >
            {copy}
          </h1>
        </div>
        <div className={`flex space-x-3 sm:space-x-4 lg:space-x-6`}>
          {contacts.map(({ icon, link, name, color }, index) => {
            return (
              <a
                key={index}
                className={`transition-all duration-300 px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 inline-block ease-in-out rounded text-xl sm:text-2xl lg:text-3xl ${color} ${
                  theme === "light" ? "text-white" : "text-white"
                } shadow-lg hover:shadow-xl hover:scale-110`}
                href={link}
                target="_blank"
                rel="noreferrer"
                title={name}
              >
                <i className={`object-center ${icon}`}></i>
              </a>
            );
          })}
        </div>
        <div className={`w-full h-px overflow-x-hidden`}>
          <div
            className={`line-animation line-animation-reverse ${
              theme === "light" ? "bg-gray-900" : "bg-white"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
