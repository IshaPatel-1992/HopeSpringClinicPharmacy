import React from "react";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
  FaPrescriptionBottleAlt,
  FaTruck,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden
      bg-gradient-to-br from-white via-brand-primary-light/35 to-brand-accent-light/35 text-text-primary"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-yellow-100/80 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="inline-block px-5 py-2 rounded-full bg-white border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            🌟 Hopespring Medical Clinic & Pharmacy 🌟
          </p>

          <h1
            className="text-2xl md:text-3xl font-extrabold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Complete Medical & Pharmacy Care
            <span className="block text-brand-primary text-xl md:text-2xl mt-3 font-semibold">
              From medical visits to prescriptions and wellness support, all in one place.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Delivering trusted healthcare with a patient-first approach — focused on comfort, convenience, and long-term wellness for your family.
          </p>

       <div className="flex flex-wrap gap-4 pt-2">
  {/* Clinic Services */}
  <Link
    to="/medical-services"
    className="group flex-1 min-w-[220px] inline-flex items-center justify-center gap-3
    px-6 py-4 rounded-2xl font-semibold text-base
    bg-brand-primary text-white
    shadow-[0_10px_25px_rgba(0,64,44,0.18)]
    hover:bg-brand-primary-dark hover:shadow-[0_14px_30px_rgba(0,64,44,0.25)]
    hover:-translate-y-1 transition-all duration-300"
  >
    <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
      <MdMedicalServices className="text-xl" />
    </span>

    <span>Clinic Services</span>
  </Link>

  {/* Pharmacy Services */}
  <Link
    to="/pharmacy-services"
    className="group flex-1 min-w-[220px] inline-flex items-center justify-center gap-3
    px-6 py-4 rounded-2xl font-semibold text-base
    bg-white border border-yellow-200 text-brand-primary
    shadow-sm hover:shadow-lg hover:border-brand-accent
    hover:-translate-y-1 transition-all duration-300"
  >
    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 flex items-center justify-center">
      <FaPrescriptionBottleAlt className="text-2xl text-brand-primary" />
    </span>

    <span>Pharmacy Services</span>
  </Link>

  {/* Contact */}
  <Link
    to="/contactus"
    className="group flex-1 min-w-[220px] inline-flex items-center justify-center gap-3
    px-6 py-4 rounded-2xl font-semibold text-base
    bg-white border border-brand-gray-light text-text-primary
    hover:border-brand-accent hover:shadow-md
    hover:-translate-y-1 transition-all duration-300"
  >
    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 via-green-50 to-yellow-100 flex items-center justify-center">
      <FaNotesMedical className="text-xl text-brand-accent" />
    </span>

    <span>Contact & Hours</span>
  </Link>
</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FeatureCard
            icon={<FaUserMd />}
            title="Medical Clinic"
            text="Family practice, walk-in care, physical exams, women’s health, and minor illness support."
          />

          <FeatureCard
            icon={<FaPrescriptionBottleAlt />}
            title="Pharmacy Services"
            text="Prescriptions, consultations, vaccinations, injections, compounding, and travel health."
          />

          <FeatureCard
            icon={<FaHeartbeat />}
            title="Connected Care"
            text="Clinic and pharmacy services working together for smoother patient support."
          />

          <FeatureCard
            icon={<FaTruck />}
            title="Convenient Support"
            text="Free local delivery, medication packaging, and helpful guidance from the pharmacy team."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div
      className="group relative bg-white/85 p-6 rounded-2xl border border-brand-gray-light shadow-sm
      hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:via-green-50 hover:to-yellow-50
      transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 group-hover:w-full transition-all duration-300" />

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      <h3
        className="text-lg font-semibold mb-2 text-text-primary group-hover:text-brand-primary transition"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      <p
        className="text-sm text-text-secondary leading-relaxed"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {text}
      </p>
    </div>
  );
}