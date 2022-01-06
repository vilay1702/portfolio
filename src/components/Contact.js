import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const contacts = [
  {
    name: "instagram",
    img: "https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png",
    link: "https://www.instagram.com/_vilay.b_/",
  },
  {
    name: "LinkedIn",
    img: "https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",
    link: "https://www.linkedin.com/in/vilaybende/",
  },
  {
    name: "Twitter",
    img: "https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png",
    link: "https://twitter.com/bendevilay",
  },
];

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [copy, setCopy] = useState("copy");
  return (
    <section
      id="contact"
      className={`py-12 w-full flex flex-col items-center text-center ${
        theme === "light" ? "bg-gray-200 border" : "bg-gray-800"
      }`}
    >
      <h1 className={`font-serif text-xl`}>Liked my portfolio? Hire Me!!</h1>
      <div
        className={`cursor-pointer flex items-center justify-between px-2 py-1 rounded my-4 text-lg border ${
          theme === "light" ? "border-gray-900" : "text-white border-white"
        }`}
        onClick={() => {
          navigator.clipboard.writeText("vilay17bende@gmail.com");
          setCopy("copied");
          setTimeout(() => setCopy("copy"), 2000);
        }}
      >
        <h1 className="text-sm sm:text-md">vilay17bende@gmail.com</h1>

        <h1
          className={`text-sm ml-8 ${
            copy === "copied" ? "text-green-600" : "text-blue-600"
          }`}
        >
          {copy}
        </h1>
      </div>
      <div className={`flex space-x-2`}>
        {contacts.map(({ img, link, name }, index) => {
          return (
            <acronym key={name} title={name}>
              <a
                key={index}
                className={`h-10 w-10 rounded-full flex justify-center items-center bg-white mx-1 hover:bg-indigo-300 ${
                  theme === "light" ? "text-gray-900" : ""
                }`}
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
    </section>
  );
};

export default Contact;
