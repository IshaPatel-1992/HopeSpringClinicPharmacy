import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/HopeSpringLogo.png";
import medicalBg from "../assets/background/shutterstock_2430491931.jpg";
import { SITE_INFO } from "../data/siteInfo";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
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
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] grayscale-[10%] contrast-[1.08]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative h-1.5 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400" />

      {/* MAIN FOOTER - OPTION 1 */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* CONTACT / BRAND */}
        <div className="lg:col-span-5 bg-white/85 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <img
            src={logo}
            alt="HopeSpring Medical Clinic & Pharmacy Logo"
            className="h-16 w-auto object-contain"
          />

          <p className="mt-4 text-sm text-text-secondary leading-relaxed">
            Comprehensive family medicine, walk-in care, pharmacy services,
            prescription support, vaccinations, and preventive healthcare for
            individuals and families in Calgary.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-primary-light/40 p-4 border border-brand-gray-light">
              <div className="font-semibold text-text-primary mb-3">
                {SITE_INFO.clinic.name}
              </div>

              <a
                href={`tel:${SITE_INFO.clinic.phoneLink}`}
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand-primary transition"
              >
                <span className="footer-icon">
                  <FaPhoneAlt />
                </span>
                {SITE_INFO.clinic.phone}
              </a>

              <a
                href={`mailto:${SITE_INFO.clinic.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary mt-3 hover:text-brand-primary transition break-all"
              >
                <span className="footer-icon">
                  <FaEnvelope />
                </span>
                {SITE_INFO.clinic.email}
              </a>
            </div>

            <div className="rounded-xl bg-brand-accent-light/40 p-4 border border-brand-gray-light">
              <div className="font-semibold text-text-primary mb-3">
                {SITE_INFO.pharmacy.name}
              </div>

              <a
                href={`tel:${SITE_INFO.pharmacy.phoneLink}`}
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand-primary transition"
              >
                <span className="footer-icon">
                  <FaPhoneAlt />
                </span>
                {SITE_INFO.pharmacy.phone}
              </a>

              <a
                href={`mailto:${SITE_INFO.pharmacy.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary mt-3 hover:text-brand-primary transition break-all"
              >
                <span className="footer-icon">
                  <FaEnvelope />
                </span>
                {SITE_INFO.pharmacy.email}
              </a>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 text-sm text-text-secondary">
            <span className="footer-icon mt-0.5">
              <FaMapMarkerAlt />
            </span>
            <span>{SITE_INFO.address.full}</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:col-span-3 bg-white/85 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <h4
            className="font-bold text-text-primary mb-5 text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Quick Links
          </h4>

          <ul className="space-y-4 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition"
                >
                  {item.icon && (
                    <span className="text-brand-primary">{item.icon}</span>
                  )}

                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 p-4">
            <div className="flex items-center gap-2 text-brand-primary font-semibold">
              <FaFilePrescription />
              Transfer Prescription
            </div>

            <p className="mt-2 text-xs text-text-secondary">
              Transfer your prescription easily to HopeSpring Pharmacy.
            </p>

            <span className="mt-3 inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-yellow-200 text-brand-primary">
              Coming Soon
            </span>
          </div>
        </div>

        {/* HOURS */}
        <div className="lg:col-span-4 bg-white/85 rounded-2xl border border-brand-gray-light p-6 shadow-sm">
          <h4
            className="font-bold text-text-primary mb-5 text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hours
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 text-sm text-text-secondary">
            <div>
              <div className="flex items-center gap-2 font-semibold text-text-primary mb-3">
                <MdMedicalServices className="text-brand-primary" />
                Clinic Hours
              </div>

              <div className="space-y-2">
                <div className="border-b border-gray-100 pb-1">
                  {SITE_INFO.clinic.hours.weekdays}
                </div>
                <div className="border-b border-gray-100 pb-1">
                  {SITE_INFO.clinic.hours.saturday}
                </div>
                <div className="text-red-600 font-medium">
                  {SITE_INFO.clinic.hours.sunday}
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-yellow-200 via-green-300 to-sky-200 md:hidden lg:block" />

            <div>
              <div className="flex items-center gap-2 font-semibold text-text-primary mb-3">
                <FaPrescriptionBottleAlt className="text-brand-primary" />
                Pharmacy Hours
              </div>

              <div className="space-y-2">
                <div className="border-b border-gray-100 pb-1">
                  {SITE_INFO.pharmacy.hours.weekdays}
                </div>
                <div className="border-b border-gray-100 pb-1">
                  {SITE_INFO.pharmacy.hours.saturday}
                </div>
                <div className="text-red-600 font-medium">
                  {SITE_INFO.pharmacy.hours.sunday}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH MAP */}
      <div className="relative max-w-7xl mx-auto px-6 pb-8">
        <div className="rounded-2xl overflow-hidden border border-brand-gray-light bg-white/85 shadow-sm">
          <iframe
            title="HopeSpring Location"
            src="https://www.google.com/maps?q=151%20Skyview%20Bay%20NE%20%232130,%20Calgary,%20AB%20T3N%202K3&output=embed"
            width="100%"
            height="230"
            loading="lazy"
            className="border-0 block"
            allowFullScreen=""
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-brand-gray-light bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            © {year} HopeSpring Medical Clinic & Pharmacy. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary flex items-center justify-center border border-white hover:shadow-md hover:-translate-y-0.5 hover:scale-105 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: SITE_INFO.clinic.name,
              telephone: `+1-${SITE_INFO.clinic.phone}`,
              email: SITE_INFO.clinic.email,
              url: "https://hopespringmedical.ca",
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_INFO.address.full,
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T3N 2K3",
                addressCountry: "CA",
              },
              openingHours: "Mo-Fr 09:00-17:00",
            },
            {
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              name: SITE_INFO.pharmacy.name,
              telephone: `+1-${SITE_INFO.pharmacy.phone}`,
              email: SITE_INFO.pharmacy.email,
              url: "https://hopespringmedical.ca/pharmacy-services",
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_INFO.address.full,
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T3N 2K3",
                addressCountry: "CA",
              },
              openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
            },
          ]),
        }}
      />
    </footer>
  );
}