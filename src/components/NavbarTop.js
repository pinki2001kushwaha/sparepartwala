"use client";
import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart, FaCar } from "react-icons/fa";
import Image from "next/image";
import { HiMiniLanguage } from "react-icons/hi2";

function NavbarTop() {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    if (!isClient) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClient]);

  // Don't render anything during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="bg-white text-black py-3 px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center relative border-b border-gray-300 gap-3 md:gap-0">
        {/* Simplified version for SSR */}
        <div className="flex justify-center md:justify-start">
          <div className="w-32 h-10 bg-gray-200 animate-pulse rounded"></div>
        </div>
        <div className="flex items-center border border-gray-400 overflow-hidden rounded-md w-full md:w-[450px] lg:w-[500px]">
          <div className="flex-1 h-10 bg-gray-100"></div>
          <div className="w-12 h-10 bg-yellow-500"></div>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-4 sm:gap-6">
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-9 bg-yellow-500 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black py-3 px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center relative border-b border-gray-300 gap-3 md:gap-0">
      {/* Left: Logo */}
      <div className="flex justify-center md:justify-start">
        <Image 
          src="/logo/logo.png" 
          alt="SparePartWala" 
          width={120} 
          height={40} 
          priority
        />
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center border border-gray-400 overflow-hidden rounded-md w-full md:w-[450px] lg:w-[500px]">
        <input
          type="text"
          placeholder="Search Name by Part Number, Car Model, Car Maker"
          className="px-3 py-2 outline-none w-full text-sm bg-gray-100"
          suppressHydrationWarning
        />
        <button
          className="bg-yellow-500 text-black px-3 sm:px-4 py-2 transition"
          suppressHydrationWarning
        >
          <IoSearch className="text-lg sm:text-xl" />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex justify-center md:justify-end items-center gap-4 sm:gap-6 text-lg sm:text-xl relative">
        {/* 1: Car */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full text-black cursor-pointer">
          <FaCar />
        </div>

        {/* 2: Profile with dropdown */}
        <div className="relative flex justify-center" ref={dropdownRef}>
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full text-black cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FaUser />
          </div>

          {open && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-44 bg-white border border-gray-200 rounded-md shadow-xl z-50">
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

              {/* Content */}
              <div className="flex flex-col p-4">
                <button className="cursor-pointer w-full px-4 py-2 mb-3 border border-yellow-500 rounded-md uppercase font-semibold text-sm hover:bg-yellow-500 hover:text-white transition">
                  LOGIN
                </button>
                <button className="cursor-pointer w-full px-4 py-2 bg-yellow-500 text-black rounded-md uppercase font-semibold text-sm hover:bg-yellow-600 transition">
                  SIGN UP
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3: Bag / Cart */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full text-black cursor-pointer">
          <FaShoppingCart />
        </div>

        {/* 4: Language */}
        <div className="w-auto px-3 h-9 flex items-center justify-center rounded-lg bg-yellow-500 text-black font-semibold cursor-pointer text-sm">
          <HiMiniLanguage className="mr-1 text-lg" />
          EN
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;