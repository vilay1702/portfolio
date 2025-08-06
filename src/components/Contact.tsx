import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

const contacts = [
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/vilaybende/",
    color: "bg-blue-500 hover:bg-blue-700",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://twitter.com/bendevilay",
    color: "bg-blue-400 hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/vilay_bende/",
    color: "bg-pink-600 hover:bg-pink-800",
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
      className={`py-12 w-full  ${
        theme === "light" ? "bg-gray-200 border" : "bg-gray-800"
      }`}
    >
      <div
        className={`w-max flex flex-col space-y-4 items-center text-center mx-auto`}
      >
        <div className={`w-full h-px overflow-x-hidden`}>
          <div
            className={`line-animation ${
              theme === "light" ? "bg-gray-900" : "bg-white"
            }`}
          ></div>
        </div>
        <h1 className={`font-serif text-xl space-x-1 font-semibold`}>
          Liked my portfolio?{" "}
          <span
            className={theme === "light" ? "text-blue-600" : "text-blue-400"}
          >
            Hire Me!!
          </span>
        </h1>

        <div
          className={`cursor-pointer w-full flex items-center justify-between px-2 py-1 rounded text-lg border ${
            theme === "light" ? "border-gray-900" : "text-white border-white"
          }`}
          onClick={() => {
            navigator.clipboard.writeText("vilay17bende@gmail.com");
            setCopy("copied");
            setTimeout(() => setCopy("copy"), 2000);
          }}
        >
          <h1 className="text-sm sm:text-md ">vilay17bende@gmail.com</h1>

          <h1
            className={`text-sm ml-8 ${
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
        <div className={`flex space-x-4`}>
          {contacts.map(({ icon, link, name, color }, index) => {
            return (
              <a
                key={index}
                className={`transition-all duration-300 px-2 py-1 inline-block  ease-in-out rounded-full text-2xl ${color} ${
                  theme === "light" ? "text-gray-200" : "text-gray-800"
                }`}
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
