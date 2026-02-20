import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden
      bg-gradient-to-br from-white via-brand-primary-light/40 to-brand-accent-light/40 text-text-primary"
    >
      {/* Ambient background glows (soft blue + soft green) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-primary-light/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-brand-accent-light/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Content */}
        <div className="space-y-6">
          {/* Coming Soon Banner (refined) */}
          <p
            className="inline-block px-5 py-2 rounded-full
            bg-brand-primary-light/50 text-brand-primary
            border border-brand-primary-light font-semibold shadow-sm"
          >
            🌟 Coming Soon! 🌟
          </p>

          {/* Hero Heading */}
          <h3
            className="text-3xl md:text-4xl font-extrabold leading-tight mt-6 mb-4 animate-fadeSlideUp"
            style={{
              fontFamily: "'Playfair Display', serif",
              animationDelay: "0.3s",
            }}
          >
            Complete Medical Clinic Care
            <span className="block text-brand-primary text-lg md:text-xl mt-3 font-semibold">
              — Compassionate care, close to home —
            </span>
          </h3>

          {/* Hero Paragraph */}
          <p
            className="text-lg md:text-xl text-text-secondary max-w-xl tracking-wide animate-fadeSlideUp"
            style={{
              fontFamily: "'Raleway', sans-serif",
              animationDelay: "0.5s",
            }}
          >
            Compassionate healthcare with experienced providers and modern
            facilities — designed for your comfort and convenience.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeSlideUp"
            style={{ animationDelay: "0.7s" }}
          >
            {/* Primary CTA (premium depth, cleaned classes) */}
            <Link
              to="/medical-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
              bg-brand-primary text-white
              shadow-[0_8px_20px_rgba(93,122,137,0.25)]
              hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.35)]
              transition duration-300 ease-out transform hover:-translate-y-0.5
              focus:outline-none focus:ring-4 focus:ring-brand-primary-light/60"
            >
              <MdMedicalServices className="text-xl" />
              Medical Services
            </Link>

            {/* Secondary CTA (soft green outline) */}
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
              bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
              hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm
              transition duration-300 ease-out"
            >
              <FaNotesMedical className="text-xl text-brand-accent drop-shadow-sm" />
              Walk-in Info
            </Link>
          </div>
        </div>

        {/* RIGHT: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-stretch">
          <FeatureCard
            icon={<FaUserMd />}
            title="Experienced Providers"
            text="Patient-centred care from trusted medical professionals."
            variant="clinic"
          />

          <FeatureCard
            icon={<FaHeartbeat />}
            title="Continuity of Care"
            text="Coordinated services for better long-term outcomes."
            variant="support"
          />

          <FeatureCard
            icon={<FaStethoscope />}
            title="Modern Clinic"
            text="Welcoming environment with up-to-date technology."
            variant="clinic"
          />

          <FeatureCard
            icon={<FaNotesMedical />}
            title="Walk-in Clinic"
            text="No appointment needed for same-day care and urgent concerns."
            variant="wellness"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text, variant = "clinic" }) {
  const variants = {
    clinic: {
      icon: "text-brand-primary drop-shadow-sm",
      ring: "hover:ring-brand-primary-light/60",
      bgHover: "hover:bg-white/70",
    },
    wellness: {
      icon: "text-brand-accent drop-shadow-sm",
      ring: "hover:ring-brand-accent/40",
      bgHover: "hover:bg-brand-accent-light/50",
    },
    support: {
      icon: "text-brand-gray-dark drop-shadow-sm",
      ring: "hover:ring-border-soft",
      bgHover: "hover:bg-white/70",
    },
  };

  const v = variants[variant] ?? variants.clinic;

  return (
    <div
      className={`group bg-white/80 backdrop-blur-md p-6 rounded-2xl
      border border-brand-gray-light shadow-sm
      transition duration-300 ease-out cursor-pointer
      hover:shadow-lg hover:-translate-y-1 ${v.bgHover}
      hover:ring-4 ${v.ring}`}
    >
      <div className={`${v.icon} text-3xl mb-4 transform transition duration-500 group-hover:rotate-6`}>
        {icon}
      </div>

      <h3
        className="text-lg font-semibold mb-2 text-text-primary"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p
        className="text-sm text-text-secondary"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}