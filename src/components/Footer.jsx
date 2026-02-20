import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/HopeSpringLogo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import medicalBg from "../assets/background/shutterstock_2430491931.jpg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-emerald-100 overflow-hidden">

      {/* Soft luxury background (more subtle than before) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-emerald-50/70" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.10),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(5,150,105,0.08),transparent_50%)]" />

      {/* Full-width medical background (slightly darker, premium) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={medicalBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover
               opacity-[0.24] md:opacity-[0.24]
               grayscale-[10%] contrast-[1.1] brightness-[0.95]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />

        {/* Soft emerald tone overlay (makes it brand-consistent) */}
        <div className="absolute inset-0 bg-emerald-900/5" />
      </div>

      {/* Smooth blended wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute -top-1 left-0 w-full h-12 text-slate-100"
      >
        <path
          fill="currentColor"
          d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64V0H0Z"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-4 gap-10">
        {/* Logo + Info + CTA */}
        <div>
          <img src={logo} alt="HopeSpring Clinic & Pharmacy Logo" className="h-16 w-auto object-contain" />

          <div className="mt-4 text-sm text-slate-600 space-y-1">
            <div>
              Phone:{" "}
              <a href="tel:+18259624673" className="text-emerald-700 hover:text-emerald-800 transition">
                (825) 962-4673
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                href="mailto:info@hopespringmedical.ca"
                className="text-emerald-700 hover:text-emerald-800 transition"
              >
                info@hopespringmedical.ca
              </a>
            </div>
            <div>Mon–Fri: 9:00 AM – 5:00 PM</div>
            <div>Sat & Sun: Closed</div>
          </div>

          {/* Book Appointment CTA */}
          <div className="mt-5">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                bg-emerald-700 text-white shadow-sm
                hover:bg-emerald-800 hover:shadow-md transition"
            >
              Book Appointment
            </Link>
            <div className="mt-2 text-xs text-slate-500">Fast booking — takes under 1 minute.</div>
          </div>
        </div>

        {/* Quick Links (underline animation) */}
        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="group inline-flex items-center">
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Glass Map Card */}
        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Our Location</h4>
          <div className="rounded-2xl overflow-hidden border border-white/60 bg-white/35 backdrop-blur-md shadow-sm">
            <div className="p-2">
              <iframe
                title="HopeSpring Location"
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
                width="100%"
                height="160"
                loading="lazy"
                className="border-0 rounded-xl"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-500">Tap map for directions.</div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-emerald-900 mb-4">Follow Us</h4>
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
                className="h-10 w-10 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 text-emerald-700
                  flex items-center justify-center hover:bg-white hover:text-emerald-800 hover:shadow-sm transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative text-center text-xs text-slate-500 py-4 border-t border-emerald-100 bg-white/50">
        © {year} HopeSpring Clinic & Pharmacy. All rights reserved.
      </div>

      {/* Schema: Clinic + Pharmacy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "HopeSpring Clinic",
              telephone: "+1-825-962-4673",
              email: "info@hopespringmedical.ca",
              url: "https://hopespringmedical.ca",
              address: {
                "@type": "PostalAddress",
                streetAddress: "151 Skyview Bay NE #2130",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T3N 1N6",
                addressCountry: "CA",
              },
              openingHours: "Mo-Fr 09:00-17:00",
            },
            {
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              name: "HopeSpring Pharmacy",
              telephone: "+1-825-962-4673",
              url: "https://hopespringmedical.ca/pharmacy",
              address: {
                "@type": "PostalAddress",
                streetAddress: "151 Skyview Bay NE #2130",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T3N 1N6",
                addressCountry: "CA",
              },
              openingHours: "Mo-Fr 09:00-17:00",
            },
          ]),
        }}
      />
    </footer>
  );
}