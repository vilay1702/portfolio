/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Education", href: "#education", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Positions", href: "#por", current: false },
  { name: "Projects", href: "#works", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <Disclosure
      as="nav"
      className={`z-50 sticky top-0 + ${
        theme === "light" ? "bg-white" : "bg-gray-900"
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
                          `px-3 py-2 rounded-md text-md font-mono font-medium ${
                            theme === "light"
                              ? "text-gray-900 hover:bg-gray-200"
                              : "text-white hover:bg-gray-700"
                          }`
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
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
          <Disclosure.Panel className="sm:hidden border-b-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    `block px-3 py-2 rounded-md text-md font-medium ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    } `
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
