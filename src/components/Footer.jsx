import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/HopeSpringLogo.png";
import medicalBg from "../assets/background/shutterstock_2430491931.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPrescriptionBottleAlt,
  FaFilePrescription,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/medical-services", label: "Clinic Services", icon: <MdMedicalServices /> },
    { to: "/pharmacy-services", label: "Pharmacy Services", icon: <FaPrescriptionBottleAlt /> },
    { to: "/aboutuspg", label: "About Us" },
    { to: "/contactus", label: "Contact Us" },
  ];

  const socials = [
    { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com" },
    { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com" },
    { Icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
    { Icon: FaLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-brand-gray-light">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-primary-light/25 to-brand-accent-light/35" />
      <div className="absolute -top-28 -right-28 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-28 w-80 h-80 bg-yellow-100/80 rounded-full blur-3xl" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={medicalBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.14] grayscale-[10%] contrast-[1.08]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <div className="relative h-1.5 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400" />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/80 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <img
            src={logo}
            alt="HopeSpring Medical Clinic & Pharmacy Logo"
            className="h-16 w-auto object-contain"
          />

          <p className="mt-4 text-sm text-text-secondary leading-relaxed">
            Complete medical clinic and pharmacy care in one convenient location.
          </p>

          <div className="mt-5 space-y-3 text-sm text-text-secondary">
            <a href="tel:+18259624673" className="flex items-center gap-3 hover:text-brand-primary transition">
              <span className="footer-icon"><FaPhoneAlt /></span>
              (825) 962-4673
            </a>

            <a href="mailto:info@hopespringmedical.ca" className="flex items-center gap-3 hover:text-brand-primary transition">
              <span className="footer-icon"><FaEnvelope /></span>
              info@hopespringmedical.ca
            </a>

            <div className="flex items-start gap-3">
              <span className="footer-icon mt-0.5"><FaMapMarkerAlt /></span>
              <span>151 Skyview Bay NE #2130, Calgary, AB T3N 1N6</span>
            </div>
          </div>

          <Link
            to="/contactus"
            className="mt-5 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
            bg-brand-primary text-white shadow-[0_8px_20px_rgba(0,64,44,0.18)]
            hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Contact / Book Appointment
          </Link>
        </div>

        <div className="bg-white/80 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <h4
            className="font-bold text-text-primary mb-5 text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition"
                >
                  {item.icon && <span className="text-brand-primary">{item.icon}</span>}
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 p-4">
                <div className="flex items-center gap-2 text-brand-primary font-semibold">
                  <FaFilePrescription />
                  Transfer Prescription
                </div>
                <p className="mt-1 text-xs text-text-secondary">
                  Microsoft Form integration coming soon.
                </p>
                <span className="mt-2 inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-yellow-200 text-brand-primary">
                  Coming Soon
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white/80 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <h4
            className="font-bold text-text-primary mb-5 text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hours
          </h4>

          <div className="space-y-3 text-sm text-text-secondary">
            <div className="flex items-center gap-3">
              <span className="footer-icon"><FaClock /></span>
              <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
            </div>
            <div className="pl-11">Saturday: Closed</div>
            <div className="pl-11">Sunday: Closed</div>
          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-100 p-4">
            <div className="font-semibold text-text-primary">Clinic & Pharmacy</div>
            <p className="mt-1 text-sm text-text-secondary">
              Walk-ins and pharmacy services are available based on provider availability and service eligibility.
            </p>
          </div>
        </div>

        <div className="bg-white/80 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <h4
            className="font-bold text-text-primary mb-5 text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Follow Us
          </h4>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-11 w-11 rounded-2xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100
                text-brand-primary flex items-center justify-center border border-white
                hover:shadow-md hover:-translate-y-0.5 hover:scale-105 transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-brand-gray-light bg-white shadow-sm">
            <iframe
              title="HopeSpring Location"
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
              width="100%"
              height="150"
              loading="lazy"
              className="border-0"
              allowFullScreen=""
            />
          </div>

          <p className="mt-3 text-xs text-text-muted">
            Replace map embed link when final Google Maps listing is ready.
          </p>
        </div>
      </div>

      <div className="relative text-center text-xs text-text-muted py-4 border-t border-brand-gray-light bg-white/75">
        © {year} HopeSpring Medical Clinic & Pharmacy. All rights reserved.
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "HopeSpring Medical Clinic",
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
              url: "https://hopespringmedical.ca/pharmacy-services",
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