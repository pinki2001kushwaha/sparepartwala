"use client";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSearch, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center relative">
      {/* Left: Logo + Hamburger */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
        <button
          className="w-9 h-9 bg-yellow-500 flex items-center justify-center md:hidden rounded cursor-pointer hover:bg-yellow-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="text-lg text-black" />
          ) : (
            <BiMenuAltLeft className="text-lg text-black" />
          )}
        </button>
        <span className="text-lg font-bold text-gray-800 uppercase">SparePart</span>
      </div>

      {/* Middle: Nav Links (desktop only) */}
      <div className="hidden md:flex gap-10 text-black font-medium">
        <a href="#" className="hover:text-yellow-500">
          Home
        </a>
        <a href="#" className="hover:text-yellow-500">
          Catalogue
        </a>
        <a href="#" className="hover:text-yellow-500">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-500">
          Contact Us
        </a>
      </div>

      {/* Right: Search Bar */}
      <div className="flex items-center border border-gray-400 rounded-md overflow-hidden w-32 sm:w-40 md:w-56">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 outline-none w-full"
        />
        <button className="bg-yellow-500 text-black px-3 py-2 hover:bg-yellow-600 transition">
          <IoSearch className="text-xl" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 md:hidden z-50">
          <a
            href="#"
            className="hover:text-yellow-500 text-base"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-yellow-500 text-base"
            onClick={() => setMenuOpen(false)}
          >
            Catalogue
          </a>
          <a
            href="#"
            className="hover:text-yellow-500 text-base"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-yellow-500 text-base"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
