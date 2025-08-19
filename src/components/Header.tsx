import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Bars3Icon as MenuIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { theme } = useContext(ThemeContext)!;
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", icon: "fas fa-home" },
    { name: "Skills", href: "#skills", icon: "fas fa-pen" },
    { name: "Education", href: "#education", icon: "fas fa-graduation-cap" },
    { name: "Experience", href: "#experience", icon: "fas fa-briefcase" },
    { name: "Positions", href: "#por", icon: "fas fa-user" },
    { name: "Projects", href: "#works", icon: "fas fa-code" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`z-50 sticky top-0 backdrop-blur-md `}>
      {/* <nav
      className={`z-50 sticky top-0 backdrop-blur-md border-b ${
        theme === "light"
          ? "bg-white/80 border-gray-200 shadow-lg"
          : "bg-gray-900/80 border-gray-700 shadow-lg"
      }`}
    > */}
      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex space-x-2 md:space-x-4 lg:space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`pl-2 py-2 md:pl-3 md:py-2 lg:pl-4 lg:py-2 rounded-md text-sm md:text-base font-mono font-medium transition-all duration-300 ease-in-out flex items-center ${
                      theme === "light"
                        ? "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-600"
                        : "hover:bg-gradient-to-r hover:from-indigo-900/20 hover:to-purple-900/20 text-gray-200 hover:text-indigo-400"
                    }`}
                  >
                    <i
                      className={`${
                        theme === "light" ? "text-gray-900" : "text-white"
                      } ${item.icon}`}
                    ></i>
                    <span
                      className={`ml-1 text-xs md:text-sm ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`h-px flex-1 mx-2 md:mx-4 ${
              theme === "light"
                ? "bg-gradient-to-r from-gray-300 to-gray-400"
                : "bg-gradient-to-r from-gray-600 to-gray-500"
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`sm:hidden border-b-2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ${
          theme === "light" ? "border-gray-200" : "border-gray-700"
        }`}
      >
        <div className="pl-4 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`transition-all duration-300 ease-in-out block w-full text-left pl-3 py-3 rounded-md text-base font-medium ${
                theme === "light"
                  ? "text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                  : "text-white hover:bg-gradient-to-r hover:from-indigo-900/20 hover:to-purple-900/20"
              }`}
            >
              <i
                className={`${
                  theme === "light" ? "text-gray-900" : "text-white"
                } ${item.icon}`}
              ></i>
              <span
                className={`ml-2 text-sm ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
