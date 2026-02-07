import React from "react";
import logo from "../assets/logo/HopeSpringLogo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Clinic Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Socials + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex space-x-3">
            {[
              { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com" },
              { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com" },
              { Icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
              { Icon: FaLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com" },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-xl bg-green-50 text-green-800 flex items-center justify-center hover:bg-green-700 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="text-xs text-green-900/70 text-center md:text-right">
            &copy; {new Date().getFullYear()} HopeSpring Clinic &amp; Pharmacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
