"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function VehicleSelector() {
  return (
    <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-8 md:py-10">
      <h3 className="font-bold text-lg sm:text-xl mb-4 md:mb-6 uppercase tracking-wide text-center md:text-left">
        Select Your Vehicle
      </h3>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Brand */}
        <div className="relative w-full bg-[#edf1f7] col-span-1 xs:col-span-2 md:col-span-1">
          <select className="appearance-none border border-gray-400 focus:border-black focus:ring-0 p-2 sm:p-3 w-full pr-10 text-sm sm:text-base">
            <option>Choose Brand</option>
          </select>
          <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 pointer-events-none" />
        </div>

        {/* Model */}
        <div className="relative w-full bg-[#edf1f7]">
          <select className="appearance-none border border-gray-400 focus:border-black focus:ring-0 p-2 sm:p-3 w-full pr-10 text-sm sm:text-base">
            <option>Choose Model</option>
          </select>
          <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 pointer-events-none" />
        </div>

        {/* Year */}
        <div className="relative w-full bg-[#edf1f7]">
          <select className="appearance-none border border-gray-400 focus:border-black focus:ring-0 p-2 sm:p-3 w-full pr-10 text-sm sm:text-base">
            <option>Choose Year</option>
          </select>
          <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 pointer-events-none" />
        </div>

        {/* Modification */}
        <div className="relative w-full bg-[#edf1f7]">
          <select className="appearance-none border border-gray-400 focus:border-black focus:ring-0 p-2 sm:p-3 w-full pr-10 text-sm sm:text-base">
            <option>Choose Modification</option>
          </select>
          <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 pointer-events-none" />
        </div>

        {/* Search Button */}
        <button className="border border-gray-400 bg-yellow-500 cursor-pointer hover:bg-yellow-600 transition-colors flex items-center justify-center text-white w-full py-2 sm:py-3 text-sm sm:text-base col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-1">
          <IoSearch className="text-xl sm:text-2xl" />
        </button>
      </div>
    </section>
  );
}