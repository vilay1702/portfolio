import React, { useContext, Suspense } from "react";
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

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
  </div>
);

const App = () => {
  const { theme } = useContext(ThemeContext)!;

  React.useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "light"
            ? "bg-slate-50 text-gray-900"
            : "bg-gray-900 text-white"
        }`}
      >
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="space-y-16 md:space-y-24 lg:space-y-32">
            <Home />
            <Skills />
            <Education />
            <Experience />
            <PoR />
            <Projects />
            <Certificates />
            <Contact />
          </main>
        </Suspense>
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
