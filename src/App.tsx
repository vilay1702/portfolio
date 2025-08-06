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
import { ThemeContext, ThemeProvider } from "./ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext)!;

  React.useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "light"
            ? "bg-slate-50 text-gray-900"
            : "bg-gray-900 text-white"
        }`}
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

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
