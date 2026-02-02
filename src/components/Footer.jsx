import React from "react";
import logo from "../assets/logo/hope_spring_logo_2048.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-darkBlue text-white py-8 font-raleway border-t border-blue-darkBlue/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Clinic Name */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
         <img
            src={logo}
            alt="Clinic Logo"
            className="h-24 md:h-28 w-auto"
          />
          <div className="leading-tight">
            <div className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
  Medical Clinic
</div>
             
            <div
              className="text-sm text-yellow-600"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4 text-yellow-500 text-lg">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="text-xs text-white/70 text-center md:text-right mt-1">
            &copy; {new Date().getFullYear()} Hope Spring Medical Clinic & Pharmacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
