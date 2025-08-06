import React, { useContext, useState, useEffect } from "react";
import DP from "../images/profile_pic.jpeg";
import { ThemeContext } from "../ThemeContext";
import { ABOUT, NAME, ROLES } from "../data";
import TypingEffect from "./TypingEffect";

const Home = () => {
  const { theme } = useContext(ThemeContext)!;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = DP;
  }, []);

  return (
    <>
      <section
        id="home"
        className="font-mono min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 ${
              theme === "light" ? "bg-indigo-500" : "bg-indigo-400"
            } blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-10 ${
              theme === "light" ? "bg-purple-500" : "bg-purple-400"
            } blur-3xl`}
          ></div>
        </div>

        <section className="pt-8 sm:pt-12 lg:pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16">
            <div
              className="flex justify-center relative"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              {/* Profile image container with enhanced styling */}
              <div className="relative group">
                <div
                  style={{
                    backgroundColor: `${
                      theme === "light" ? "#ffffff" : "#1f2937"
                    }`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
                  }}
                  className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full -mb-48 sm:-mb-52 lg:-mb-56"
                ></div>
                <img
                  className={`object-cover object-center border-4 border-indigo-500/20 shadow-2xl w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/25 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  src={DP}
                  alt="Vilay Bende - Full Stack Developer"
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-gray-300 animate-pulse flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                  </div>
                )}
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <section className="text-center lg:text-left max-w-2xl">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 lg:mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
                {NAME}
              </h1>
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 lg:mb-4 opacity-80 font-medium">
                I am a
              </h3>
              <div className="mb-6 lg:mb-8">
                <div
                  className={`h-12 sm:h-14 lg:h-16 -mb-12 sm:-mb-14 lg:-mb-16 hidden lg:block ${
                    theme === "light" ? "bg-gray-800" : "bg-gray-700"
                  }`}
                ></div>
                <h1 className="h-12 sm:h-14 lg:h-16 text-lg sm:text-xl lg:text-2xl text-white font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-3 sm:p-4 rounded-lg shadow-lg">
                  <span className="transition-all duration-500">
                    <TypingEffect
                      texts={ROLES}
                      typingInterval={80}
                      deletingInterval={50}
                      pauseBeforeDelete={2000}
                    />
                  </span>
                </h1>
              </div>
            </section>
          </div>

          {/* About section with enhanced styling */}
          <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div
                className={`p-6 sm:p-8 lg:p-10 rounded-lg border ${
                  theme === "light"
                    ? "bg-white/50 backdrop-blur-sm border-gray-200 shadow-lg"
                    : "bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg"
                }`}
              >
                <p className="text-justify text-sm sm:text-base lg:text-lg leading-relaxed">
                  <span className="font-mono text-indigo-600 font-bold text-2xl sm:text-3xl lg:text-4xl mx-2">
                    "
                  </span>
                  {ABOUT.map((content, index) => (
                    <>
                      <span key={index}>{content}</span>
                      {index !== ABOUT.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </>
                  ))}
                  <span className="font-mono text-indigo-600 font-bold text-2xl sm:text-3xl lg:text-4xl mx-2">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
