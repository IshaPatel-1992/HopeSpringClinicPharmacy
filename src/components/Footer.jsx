import React from "react";
import logo from "../assets/logo/Logo2.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 py-8 font-raleway border-t border-green-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Clinic Name */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <img src={logo} alt="Clinic Logo" className="h-24 md:h-28 w-auto" />
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4 text-green-600 text-lg">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 transition duration-300" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 transition duration-300" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 transition duration-300" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 transition duration-300" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>

          <div className="text-xs text-green-700/70 text-center md:text-right mt-1">
            &copy; {new Date().getFullYear()} HopeSpring Clinic & Pharmacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
