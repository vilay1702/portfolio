import React, { useContext } from "react";
import Typed from "react-typed";
import DP from "../images/profile_pic.jpg";
import { ThemeContext } from "../ThemeContext";

const roles = ["Web Developer", "Competitive Programmer", "Web Designer"];
const name = "Vilay Bende".split("");

const Home = () => {
  const { theme } = useContext(ThemeContext);
  // const [copy, setCopy] = useState("copy");
  return (
    <>
      <section id="home" className="font-mono ">
        <section className="mt-4">
          <div className="flex sm:flex-row flex-col items-center">
            <div
              className="ml-8"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div
                style={{
                  backgroundColor: `${
                    theme === "light" ? "#ffffff" : "#1f2937"
                  }`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
                }}
                className="w-52 h-52 rounded-full -mb-56 ml-4 "
              ></div>
              <img
                className=" object-cover object-center  border-indigo-900 shadow-lg w-52 h-52 rounded-full "
                src={DP}
                alt="DP"
              />
            </div>
            <section className="ml-4 sm:ml-10 mb-12 sm:w-max">
              <h1 className="font-serif text-8xl mt-12">
                {name.map((letter, index) => {
                  return (
                    <span
                      key={index}
                      data-aos="fade-down"
                      data-aos-delay={(index + 1) * 100}
                    >
                      {letter}
                    </span>
                  );
                })}
              </h1>
              <h3 className="sm:ml-4 text-sm mt-6">I am a</h3>
              <div className="mt-2 lg:mt-6">
                <div
                  className={`h-16 -mb-20 ml-4 -mr-4 hidden lg:block ${
                    theme === "light" ? "bg-gray-800" : "bg-gray-700"
                  }`}
                ></div>
                <h1 className=" h-16 lg:mt-0 text-xl sm:text-2xl text-white font-bold bg-gradient-to-r from-indigo-700 to-indigo-500 p-4 ">
                  <Typed strings={roles} typeSpeed={40} backSpeed={30} loop />
                </h1>
              </div>
              {/* <h1 className="sm:ml-4 mt-8 text-lg">
                Hello {userName ? userName : "There"} 👋🏻
              </h1> */}
              {/* <div
                className={`cursor-pointer flex items-center justify-between px-2 py-1 rounded sm:ml-4 mt-8 text-lg ${
                  theme === "light"
                    ? "bg-gray-200"
                    : "bg-gray-100 text-gray-900"
                }`}
                onClick={() => {
                  navigator.clipboard.writeText("vilay17bende@gmail.com");
                  setCopy("copied");
                  setTimeout(() => setCopy("copy"), 2000);
                }}
              >
                <div className="flex items-center ">
                  <img
                    className="sm:w-6 w-4"
                    src="https://img.icons8.com/material-outlined/30/000000/new-post.png"
                    alt="M"
                  />
                  <h1 className="px-1 text-sm sm:text-md">
                    vilay17bende@gmail.com
                  </h1>
                </div>
                <h1
                  className={`text-sm ${
                    copy === "copied" ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {copy}
                </h1>
              </div> */}
            </section>
          </div>
          <p className="px-6 sm:ml-4 w-screen sm:w-10/12 text-justify">
            <span className="font-mono text-indigo-600 font-bold text-4xl mx-4">
              "
            </span>
            I am a Btech undergrad, a Web Developer and a Graphic Designer. I
            love to design and build websites. I am also interested in
            Competitive Programming and learning Data Structures & Algorithms.
            Aimed to build something creative, unique, and useful using my
            skills.
            <br />
            <br />
            Actively looking to work on real world projects.
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
