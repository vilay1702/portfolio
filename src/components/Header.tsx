import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const navigation = [
  { name: "Home", href: "#", icon: "fas fa-home", current: false },
  { name: "Skills", href: "#skills", icon: "fas fa-pen", current: false },
  {
    name: "Education",
    href: "#education",
    icon: "fas fa-graduation-cap",
    current: false,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: "fas fa-briefcase",
    current: false,
  },
  { name: "Positions", href: "#por", icon: "fas fa-user", current: false },
  { name: "Projects", href: "#works", icon: "fas fa-code", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <Disclosure
      as="nav"
      className={`z-50 sticky top-0 + ${
        theme === "light" ? "bg-slate-50" : "bg-gray-900"
      }
      `}
    >
      {({ open }) => (
        <>
          <div className=" pl-2  ">
            <div className="relative flex items-center justify-between h-16">
              <div className=" flex items-center sm:hidden ">
                {/* Mobile menu button*/}

                <Disclosure.Button
                  className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          `px-3 py-2 rounded-md text-md font-mono font-medium transition-all duration-300 ease-in-out flex items-center ${
                            theme === "light"
                              ? "hover:bg-gray-200"
                              : "hover:bg-gray-700"
                          }`
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        <i
                          className={` ${
                            theme === "light" ? "text-gray-900" : "text-white "
                          } ${item.icon}`}
                        ></i>
                        <span
                          className={`ml-1 text-sm  ${
                            theme === "light"
                              ? "text-gray-700"
                              : "text-gray-200"
                          }`}
                        >
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`h-px ml-4 w-full ${
                  theme === "light" ? "bg-gray-500" : "bg-gray-200"
                }`}
              ></div>
            </div>
          </div>
          <Disclosure.Panel className=" sm:hidden border-b-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    `transition-all duration-300 ease-in-out block px-3 py-2 rounded-md text-md font-medium ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    } `
                  )}
                >
                  <i
                    className={` ${
                      theme === "light" ? "text-gray-900" : "text-white "
                    } ${item.icon}`}
                  ></i>
                  <span
                    className={`ml-1 text-sm  ${
                      theme === "light" ? "text-gray-700" : "text-gray-300 "
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
