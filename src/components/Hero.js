"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// ✅ Slides data
const slides = [
  {
    title: "Best Quality",
    subtitle: "WHAT IS LOREM IPSUM?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/image.png",
  },
  {
    title: "Affordable Prices",
    subtitle: "GET THE BEST DEALS",
    desc: "We provide top spare parts at unbeatable prices.",
    img: "/card/engine.png",
  },
  {
    title: "Fast Delivery",
    subtitle: "RIGHT AT YOUR DOORSTEP",
    desc: "Your car parts will reach you quickly and safely.",
    img: "/card/equipment.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#e6e9ef] px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-200 transition"
      >
        <IoIosArrowBack className="text-lg sm:text-2xl text-gray-800 cursor-pointer" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-200 transition"
      >
        <IoIosArrowForward className="text-lg sm:text-2xl text-gray-800 cursor-pointer" />
      </button>

      {/* Left content */}
      <div className="w-full max-w-lg text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
          {slides[current].title} <br />
          <span className="text-[#4465a4]">{slides[current].subtitle}</span>
        </h2>
        <p className="text-gray-600 my-4 text-sm sm:text-base lg:text-lg">
          {slides[current].desc}
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 sm:gap-3 bg-yellow-500 px-6 sm:px-8 py-2 sm:py-3 text-black rounded-md font-bold hover:bg-yellow-600 transition-colors shadow-lg cursor-pointer text-sm sm:text-base">
            SHOP NOW <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Right Image with Fixed Box */}
      <div className="relative flex justify-center w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
