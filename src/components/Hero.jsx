import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 bg-gradient-to-br from-teal-dark via-teal to-dark text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-green-light/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Content */}
        <div className="space-y-6">
          {/* Coming Soon Banner */}
          <p
            className="mt-4 inline-block px-4 py-2 bg-teal-light/20 text-yellow-light font-semibold rounded-full animate-fadeSlideUp shadow-md font-space"
            style={{ animationDelay: "0.1s" }}
          >
            🌟 Coming Soon! 🌟
          </p>

          {/* Hero Heading */}
          <h3
            className="text-3xl md:text-3xl font-extrabold leading-tight mt-6 mb-6 animate-fadeSlideUp"
            style={{
              fontFamily: "'Playfair Display', serif",
              animationDelay: "0.3s",
            }}
          >
            Complete Medical & Pharmacy Care
            <span className="block text-yellow-light text-1xl md:text-1xl mt-2">
              — All in One Place —
            </span>
          </h3>

          {/* Hero Paragraph */}
          <p
            className="text-lg md:text-xl text-white/90 max-w-xl tracking-wide animate-fadeSlideUp"
            style={{
              fontFamily: "'Raleway', sans-serif",
              animationDelay: "0.5s",
            }}
          >
            Compassionate healthcare with experienced providers, modern
            facilities, and an on-site pharmacy for your convenience.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeSlideUp"
            style={{ animationDelay: "0.7s" }}
          >
            <Link
              to="/medical-services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow hover:bg-yellow-dark text-teal-dark font-semibold font-space rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_15px_rgba(236,201,75,0.7)] animate-subtleBounce"
              style={{ animationDelay: "0.9s" }}
            >
              <MdMedicalServices className="text-xl" />
              Medical Services
            </Link>

            <Link
              to="/pharmacy-services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-yellow text-yellow hover:bg-yellow hover:text-teal-dark font-semibold font-space rounded-full transition transform hover:scale-105 hover:shadow-[0_0_15px_rgba(236,201,75,0.7)] animate-subtleBounce"
              style={{ animationDelay: "1.1s" }}
            >
              <GiMedicines className="text-xl" />
              Pharmacy Services
            </Link>
          </div>
        </div>

        {/* RIGHT: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<FaUserMd />}
            title="Experienced Providers"
            text="Patient-centred care from trusted medical professionals."
          />
          <FeatureCard
            icon={<MdLocalPharmacy />}
            title="On-Site Pharmacy"
            text="Fast prescriptions with expert medication guidance."
          />
          <FeatureCard
            icon={<FaHeartbeat />}
            title="Continuity of Care"
            text="Coordinated services for better long-term outcomes."
          />
          <FeatureCard
            icon={<FaStethoscope />}
            title="Modern Clinic"
            text="Welcoming environment with up-to-date technology."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="group bg-dark-soft/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg 
                    hover:shadow-2xl hover:scale-105 hover:bg-dark-soft/90 
                    transition duration-300 ease-out cursor-pointer">
      <div className="text-yellow text-3xl mb-4 transform transition duration-500 
                      group-hover:text-yellow-light group-hover:rotate-12">
        {icon}
      </div>

      <h3
        className="text-lg font-semibold mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm text-white/80"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}
