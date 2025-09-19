import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 px-6 md:px-12 py-12">
      <div className="w-[95%] md:w-[90%] mx-auto">
        {/* Top: Logo + Description */}
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6 mb-10 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo/logo.png" alt="Spare Part Wale" className="w-32 md:w-40" />
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-base text-gray-500 leading-relaxed text-center md:text-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-base">
          {/* Policy */}
          <div>
            <h4 className="font-bold mb-3 text-blue-900">Policy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Return Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Buyer’s Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Seller’s Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Anti-Corruption Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Catalogues</a></li>
            </ul>
          </div>

          {/* Useful */}
          <div>
            <h4 className="font-bold mb-3 text-blue-900">Useful</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Car Makers</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Catalogues</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-3 text-blue-900">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-500 cursor-pointer">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-3 text-blue-900">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-900">
                <FaLocationDot className="mt-1" />
                250 Main Street. 2nd Floor D – Block, New York
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-blue-900" />
                <a href="mailto:support@abcxyz.com" className="hover:text-yellow-500 cursor-pointer">
                  support@abcxyz.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-blue-900" />
                <a href="tel:+911234567890" className="hover:text-yellow-500 cursor-pointer">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-4">
          <p className="text-center text-sm md:text-base text-gray-500">
            Copyright <span className="text-yellow-500">@sparepartwale</span> 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
