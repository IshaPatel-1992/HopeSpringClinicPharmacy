import React from "react";
import logo from "../assets/logo/Logo1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 font-raleway border-t border-teal-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Clinic Name */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src={logo}
            alt="Hope Spring Logo"
            className="h-16 w-auto rounded-xl border-2 border-teal-dark shadow-lg transition duration-500 hover:scale-105"
          />
          <div className="leading-tight">
            <div className="text-lg text-teal-light font-semibold font-space">
              Hope Spring Medical Clinic
            </div>
            <div className="text-sm text-yellow-light italic font-raleway">
              & Pharmacy
            </div>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex space-x-4 text-yellow-light text-lg">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-light transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-light transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-light transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-light transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="text-xs text-teal-light/70 text-center md:text-right mt-1">
            &copy; {new Date().getFullYear()} Hope Spring Medical Clinic & Pharmacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
