import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const footerNav = [
  {
    name: "vilay17bende@gmail.com",
    img: "https://img.icons8.com/material-sharp/24/000000/mail.png",
    link: "mailto:vilay17bende@gmail.com",
  },
  {
    name: "LinkedIn",
    img: "https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",
    link: "https://www.linkedin.com/in/vilaybende/",
  },
  {
    name: "Github",
    img: "https://img.icons8.com/material-outlined/24/000000/github.png",
    link: "https://github.com/vilay1702",
  },
  {
    name: "Hackerrank",
    img: "https://img.icons8.com/windows/32/000000/hackerrank.png",
    link: "https://www.hackerrank.com/vilay17bende",
  },
  {
    name: "CodeChef",
    img: "https://img.icons8.com/ios-filled/50/000000/codechef.png",
    link: "https://www.codechef.com/users/vilay_bende",
  },
  {
    name: "Twitter",
    img: "https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png",
    link: "https://twitter.com/bendevilay",
  },
];

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const darkThemeIcon = (
    <div
      className="bg-white flex items-center ml-1 text-gray-900 rounded-r-3xl cursor-pointer"
      onClick={() => toggleTheme()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <p className="text-sm ml-2 hidden sm:block">Dark Mode</p>
    </div>
  );
  const lightThemeIcon = (
    <div
      className="flex items-center ml-1 text-white rounded-r-3xl cursor-pointer"
      onClick={() => toggleTheme()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <p className="text-sm ml-2 hidden sm:block">Light Mode</p>
    </div>
  );
  return (
    <footer
      className={`h-16 sticky bottom-0 flex z-50 items-center justify-between ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      {theme === "light" ? darkThemeIcon : lightThemeIcon}
      <div
        className={`flex-1 h-px mx-2 ${
          theme === "light" ? "bg-gray-500" : "bg-gray-200"
        }`}
      ></div>
      <div className="flex items-center">
        {footerNav.map(({ img, link, name }, index) => {
          return (
            <acronym key={name} title={name}>
              <a
                key={index}
                className={`h-8 w-8 rounded-full flex justify-center items-center hover:bg-indigo-300 mx-1 ${
                  theme === "light" ? "text-gray-900" : "bg-white"
                }`}
                href={link}
                target={link === "#contact" ? "_self" : "_blank"}
                rel="noreferrer"
              >
                <img src={img} className="h-6 w-6 " alt={name} />
              </a>
            </acronym>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
