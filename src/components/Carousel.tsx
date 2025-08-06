import React, { useState } from "react";

interface CarouselProps {
  arr: string[];
}

const Carousel: React.FC<CarouselProps> = ({ arr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1;

  const nextImages = () => {
    if (currentIndex + 1 < arr.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImages = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleImages = () => {
    return arr.slice(currentIndex, currentIndex + itemsPerView);
  };

  const canGoNext = currentIndex + 1 < arr.length;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="my-8 sm:my-12 lg:my-16">
      <section className="mx-auto items-center flex w-full px-4 sm:px-6 lg:px-8">
        <button
          className={`z-10 cursor-pointer slide-left bg-gray-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 ${
            !canGoPrev ? "pointer-events-none opacity-30" : ""
          }`}
          onClick={prevImages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex-1 flex justify-center items-center px-4 sm:px-6 lg:px-8">
          {getVisibleImages().map((img, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="max-w-xs sm:max-w-md lg:max-w-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden rounded-md shadow-2xl transition-all duration-500 ease-out hover:scale-105"
            >
              {/* Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Main Image */}
              <img
                className="relative z-10 object-contain w-full h-full transition-all duration-500 ease-out hover:scale-110 hover:brightness-110"
                src={img}
                alt={`Certificate ${currentIndex + index + 1}`}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <button
          className={`z-10 cursor-pointer slide-right bg-gray-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 ${
            !canGoNext ? "pointer-events-none opacity-30" : ""
          }`}
          onClick={nextImages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
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
        </button>
      </section>
      <section
        className={
          "my-6 sm:my-8 lg:my-10 flex justify-center items-center gap-2 sm:gap-3 lg:gap-4"
        }
      >
        {Array.from({ length: arr.length }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-1 sm:w-4 sm:h-1 lg:w-5 lg:h-1.5 bg-indigo-600 cursor-pointer rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </section>
    </section>
  );
};

export default Carousel;
