import React, { useContext } from "react";
import {
  Home,
  Skills,
  Education,
  Experience,
  PoR,
  Projects,
  Certificates,
  Contact,
  Header,
  Footer,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  AOS.init({ duration: 500 });
  return (
    <>
      <div
        className={
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }
      >
        <Header />
        <Home />
        <Skills />
        <Education />
        <Experience />
        <PoR />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
