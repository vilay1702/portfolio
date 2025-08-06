import React, { useState } from "react";

interface CarouselProps {
  arr: string[];
}

const Carousel: React.FC<CarouselProps> = ({ arr }) => {
  const [current, setCurrent] = useState(0);
  setInterval(() => {}, 5000);
  return (
    <section className="my-8">
      <section className="mx-auto items-center flex  md:w-7/12 w-11/12">
        <p
          className="z-10 cursor-pointer slide-left bg-gray-900 p-1"
          onClick={() =>
            setCurrent(current === 0 ? arr.length - 1 : current - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:h-10 sm:w-10 h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <div className="">
          {arr.map((img, index) => {
            return (
              <img
                key={index}
                className={`object-cover object-center transition-all duration-500 ease-in 
                  ${
                    index === current
                      ? "w-full h-full  visible opacity-100"
                      : "w-0 h-0 invisible opacity-0 "
                  }`}
                src={img}
                alt="img"
              />
            );
          })}
        </div>
        <p
          className="z-10 cursor-pointer slide-right bg-gray-900 p-1"
          onClick={() =>
            setCurrent(current === arr.length - 1 ? 0 : current + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:h-10 sm:w-10 h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </section>
      <div className="my-4 w-max mx-auto flex items-center">
        {Array(arr.length)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-1 cursor-pointer hover:bg-indigo-900 mx-1 ${
                  index === current ? "bg-indigo-900" : "bg-gray-200"
                }`}
              ></div>
            );
          })}
      </div>
    </section>
  );
};

export default Carousel;
