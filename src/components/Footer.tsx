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
      className="bg-gradient-to-r from-white to-gray-100 flex items-center ml-1 text-gray-900 rounded-r-3xl cursor-pointer px-2 sm:px-3 py-1 sm:py-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
      onClick={() => toggleTheme()}
    >
      <i className="text-lg sm:text-xl fas fa-moon"></i>
      <p className="text-xs sm:text-sm ml-2 hidden sm:block">Dark Mode</p>
    </div>
  );
  const lightThemeIcon = (
    <div
      className="bg-gradient-to-r from-gray-800 to-gray-900 flex items-center ml-1 text-white rounded-r-3xl cursor-pointer px-2 sm:px-3 py-1 sm:py-2 transition-all duration-200 hover:shadow-lg hover:scale-105"
      onClick={() => toggleTheme()}
    >
      <i className="text-lg sm:text-xl fas fa-sun"></i>
      <p className="text-xs sm:text-sm ml-2 hidden sm:block">Light Mode</p>
    </div>
  );
  return (
    <footer
      className={`h-16 sm:h-20 sticky bottom-0 flex z-50 items-center justify-between px-4 sm:px-6 lg:px-8 backdrop-blur-md border-t ${
        theme === "light"
          ? "bg-white/80 border-gray-200 shadow-lg"
          : "bg-gray-900/80 border-gray-700 shadow-lg"
      }`}
    >
      {theme === "light" ? darkThemeIcon : lightThemeIcon}
      <div
        className={`flex-1 h-px mx-2 sm:mx-4 lg:mx-6 ${
          theme === "light"
            ? "bg-gradient-to-r from-gray-300 to-gray-400"
            : "bg-gradient-to-r from-gray-600 to-gray-500"
        }`}
      ></div>
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
        {footerNav.map(({ icon, link, name }, index) => {
          return (
            <a
              key={index}
              className={`transition-all duration-300 ease-in-out text-lg sm:text-xl lg:text-2xl hover:text-indigo-600 hover:scale-110 ${
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
