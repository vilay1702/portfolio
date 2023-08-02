import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Loader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`fixed top-0 left-0 w-screen h-screen ${
        theme === "light"
          ? "bg-slate-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="mx-auto text-center my-20">Loading...</div>
    </section>
  );
};

export default Loader;
