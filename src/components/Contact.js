import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

const contacts = [
  {
    name: "Instagram",
    img: "https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png",
    link: "https://www.instagram.com/_vilay.b_/",
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    name: "LinkedIn",
    img: "https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",
    link: "https://www.linkedin.com/in/vilaybende/",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Twitter",
    img: "https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png",
    link: "https://twitter.com/bendevilay",
    color: "bg-blue-400 hover:bg-blue-600",
  },
];

const Contact = () => {
  const highlightText = "Liked my portfolio? Hire Me!!".split(" ");
  const highlightTextLength = highlightText.length;
  const { theme } = useContext(ThemeContext);
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
          {/* {highlightText.map((character, index) => {
            return (
              <span
                key={index}
                className={`${
                  index === current ? "text-indigo-500 " : "text-current"
                }`}
              >
                {character}
              </span>
            );
          })} */}
          Liked my portfolio?{" "}
          <span className={`text-indigo-500`}>Hire Me!!</span>
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
              copy === "copied" ? "text-green-600" : "text-blue-600"
            }`}
          >
            {copy}
          </h1>
        </div>
        <div className={`flex space-x-2`}>
          {contacts.map(({ img, link, name, color }, index) => {
            return (
              <acronym key={name} title={name}>
                <a
                  key={index}
                  className={`h-10 w-10 rounded-full flex justify-center items-center mx-1 ${color}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img} className="h-8 w-8 " alt={name} />
                </a>
              </acronym>
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
        {/* <h1 className="">
          <span className="text-lg">&#9400;</span> {new Date().getFullYear()}{" "}
          Vilay Bende
        </h1> */}
      </div>
    </section>
  );
};

export default Contact;
