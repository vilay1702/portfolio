import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const footerNav = [
  {
    name: "vilay17bende@gmail.com",
    icon: "fas fa-envelope",
    link: "mailto:vilay17bende@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/vilaybende/",
  },
  {
    name: "Github",
    icon: "fab fa-github",
    link: "https://github.com/vilay1702",
  },
  {
    name: "Hackerrank",
    icon: "fab fa-hackerrank",
    link: "https://www.hackerrank.com/vilay17bende",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://twitter.com/bendevilay",
  },
  // add CodeChef also
];

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  const darkThemeIcon = (
    <div
      className="bg-white flex items-center ml-1 text-gray-900 rounded-r-3xl cursor-pointer"
      onClick={() => toggleTheme()}
    >
      <i className="text-xl fas fa-moon"></i>
      <p className="text-sm ml-2 hidden sm:block">Dark Mode</p>
    </div>
  );
  const lightThemeIcon = (
    <div
      className="flex items-center ml-1 text-white rounded-r-3xl cursor-pointer"
      onClick={() => toggleTheme()}
    >
      <i className="text-xl fas fa-sun"></i>
      <p className="text-sm ml-2 hidden sm:block">Light Mode</p>
    </div>
  );
  return (
    <footer
      className={` h-16 sticky bottom-0 flex z-50 items-center justify-between ${
        theme === "light" ? "bg-slate-50" : "bg-gray-900"
      }`}
    >
      {theme === "light" ? darkThemeIcon : lightThemeIcon}
      <div
        className={`flex-1 h-px mx-2 ${
          theme === "light" ? "bg-gray-500" : "bg-gray-200"
        }`}
      ></div>
      <div className="flex items-center">
        {footerNav.map(({ icon, link, name }, index) => {
          return (
            <a
              key={index}
              className={`transition-all duration-300 ease-in-out text-xl hover:text-indigo-600  mx-2 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              href={link}
              target={link === "#contact" ? "_self" : "_blank"}
              rel="noreferrer"
              title={name}
            >
              <i className={icon}></i>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
