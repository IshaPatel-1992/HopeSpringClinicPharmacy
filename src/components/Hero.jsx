import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
// import { MdLocalPharmacy } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
// import { GiMedicines } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 bg-gradient-to-br from-green-100 to-green-50 text-gray-800 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Content */}
        <div className="space-y-6">
          {/* Coming Soon Banner */}
          <p
            className="mt-4 inline-block px-6 py-4 bg-green-200/70 text-green-900 font-extrabold uppercase text-2xl tracking-wider rounded-full animate-fadeSlideUp shadow-lg font-space"
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
            Complete Medical Clinic Care
            <span className="block text-green-800 text-lg md:text-1xl mt-2 font-semibold">
              — Compassionate care, close to home —
            </span>
          </h3>

          {/* Hero Paragraph */}
          <p
            className="text-lg md:text-xl text-gray-700 max-w-xl tracking-wide animate-fadeSlideUp"
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
            {/* Medical Services Button */}
            <Link
              to="/medical-services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-300 hover:bg-green-400 text-green-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300 ease-out animate-subtleBounce"
              style={{ animationDelay: "0.9s" }}
            >
              <MdMedicalServices className="text-xl" />
              Medical Services
            </Link>

            {/* Pharmacy Services Button (TEMPORARY OFF)
            <Link
              to="/pharmacy-services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300 ease-out animate-subtleBounce"
              style={{ animationDelay: "1.1s" }}
            >
              <GiMedicines className="text-xl" />
              Pharmacy Services
            </Link>
            */}
          </div>
        </div>

        {/* RIGHT: Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-stretch md:place-items-stretch">
          <FeatureCard
            icon={<FaUserMd />}
            title="Experienced Providers"
            text="Patient-centred care from trusted medical professionals."
            color="green"
          />

          {/* On-Site Pharmacy (TEMPORARY OFF)
          <FeatureCard
            icon={<MdLocalPharmacy />}
            title="On-Site Pharmacy"
            text="Fast prescriptions with expert medication guidance."
            color="yellow"
          />
          */}

          <FeatureCard
            icon={<FaHeartbeat />}
            title="Continuity of Care"
            text="Coordinated services for better long-term outcomes."
            color="blue"
          />

          <FeatureCard
            icon={<FaStethoscope />}
            title="Modern Clinic"
            text="Welcoming environment with up-to-date technology."
            color="teal"
          />

          <FeatureCard
  icon={<FaNotesMedical />}
  title="Walk-in Clinic"
  text="No appointment needed for same-day care and urgent concerns."
  color="green"
/>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text, color }) {
  const colors = {
    green: "text-green-500",
    yellow: "text-yellow-500",
    blue: "text-blue-500",
    teal: "text-teal-500",
  };

  return (
    <div
      className={`group bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-md 
      hover:shadow-lg hover:scale-105 hover:bg-white/60 transition duration-300 ease-out cursor-pointer`}
    >
      <div
        className={`${colors[color]} text-3xl mb-4 transform transition duration-500 group-hover:rotate-12`}
      >
        {icon}
      </div>

      <h3
        className="text-lg font-semibold mb-2 text-gray-900"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm text-gray-700"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}
