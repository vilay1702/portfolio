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
      <section id="home" className="font-mono min-h-screen">
        <section className="mt-4 ml-4">
          <div className="flex sm:flex-row flex-col items-center">
            <div
              className="ml-8 aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div
                className="w-52 h-52 rounded-full -mb-56 ml-4"
                style={{
                  backgroundColor: "rgb(31, 41, 55)",
                  backgroundImage:
                    "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E)",
                }}
              ></div>
              <img
                className="object-cover object-center border-indigo-900 shadow-lg w-52 h-52 rounded-full"
                alt="DP"
                src={DP}
              />
            </div>
            <section className="ml-4 sm:ml-10 mb-12 sm:w-max">
              <h1 className="font-serif text-8xl mt-12">Vilay Bende</h1>
              <h3 className="sm:ml-4 text-sm mt-6">I am a</h3>
              <div className="mt-2 lg:mt-6">
                <div className="h-16 -mb-20 ml-4 -mr-4 hidden lg:block bg-gray-700"></div>
                <h1 className="h-16 lg:mt-0 text-xl sm:text-2xl text-white font-bold bg-gradient-to-r from-indigo-700 to-indigo-500 p-4">
                  <span className="transition-all duration-500">
                    <span className="">
                      <TypingEffect
                        texts={[
                          "Full-stack Developer",
                          "Shopify Developer",
                          "Software Engineer",
                        ]}
                        typingInterval={80}
                        deletingInterval={50}
                        pauseBeforeDelete={1000}
                      />
                    </span>
                  </span>
                </h1>
              </div>
            </section>
          </div>
          <p className="px-6 sm:ml-4 w-screen sm:w-10/12 text-justify">
            <span className="font-mono text-indigo-600 font-bold text-4xl mx-4">
              "
            </span>
            {ABOUT.map((content, index) => (
              <>
                <span key={`about-content-${index}`}>{content}</span>
                {index !== ABOUT.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </>
            ))}
            <span className="font-mono text-indigo-600 font-bold text-4xl mx-4">
              "
            </span>
          </p>
        </section>
      </section>
    </>
  );
};

export default Home;
