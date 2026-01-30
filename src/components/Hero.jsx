import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-dark via-teal to-dark text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-green-light/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: Content */}
        <div>
          {/* <span className="inline-block mb-4 px-4 py-1 rounded-full bg-yellow text-teal-dark font-bold shadow">
            Accepting New Patients
          </span> */}

          {/* Coming Soon Banner */}
          <p className="mt-4 inline-block px-4 py-2 bg-teal-light/20 text-yellow-light font-semibold rounded-full animate-pulse shadow-md">
            🌟 Coming Soon! 🌟
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6 font-space">
            Complete Medical & Pharmacy Care
            <span className="block text-yellow-light">
              — All in One Place —
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl font-raleway">
            Compassionate healthcare with experienced providers, modern
            facilities, and an on-site pharmacy for your convenience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link
              to="/medical-services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow hover:bg-yellow-dark text-teal-dark font-semibold rounded-full shadow-lg transition"
            >
              <MdMedicalServices className="text-xl" />
              Medical Services
            </Link>

            <Link
              to="/pharmacy-services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-yellow text-yellow hover:bg-yellow hover:text-teal-dark font-semibold rounded-full transition"
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
    <div className="bg-dark-soft/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:bg-dark-muted transition">
      <div className="text-yellow text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 font-space">{title}</h3>
      <p className="text-sm text-white/80 font-raleway">{text}</p>
    </div>
  );
}
