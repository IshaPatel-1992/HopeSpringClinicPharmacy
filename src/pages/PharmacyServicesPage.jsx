import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaUserMd,
  FaStethoscope,
  FaNotesMedical,
  FaPills,
  FaFilePrescription,
  FaPlaneDeparture,
  FaHome,
  FaBaby,
  FaTruck,
  FaFileInvoice,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- PHARMACY SERVICES DATA ---------------- */
const pharmacyServices = [
  {
    title: "Vaccinations & Immunizations",
    icon: <FaSyringe className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Stay protected with flu, shingles, pneumonia vaccines, and travel immunizations.",
  },
  {
    title: "Injection Services",
    icon: <FaPrescriptionBottleAlt className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "We administer injectable medications—no appointment required for most services.",
  },
  {
    title: "Consultation",
    icon: <FaUserMd className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Private medication reviews and advice for safe and effective treatment.",
  },
  {
    title: "Prescribing Pharmacist",
    icon: <FaStethoscope className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "We assess and prescribe for minor conditions like UTIs, cold sores, and more.",
  },
  {
    title: "OAT (Opioid Agonist Treatment)",
    icon: <FaNotesMedical className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Discreet and supportive care for opioid dependency, including supervised dosing.",
  },
  {
    title: "Compounding",
    icon: <FaPills className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Custom medications for allergies, children, dermatology, and hormone therapy.",
  },
  {
    title: "Compliance Packaging",
    icon: <FaFilePrescription className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Blister packs organized by day and time to simplify your medication routine.",
  },
  {
    title: "Travel Health Services",
    icon: <FaPlaneDeparture className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Travel consults, vaccines, and prescriptions to keep you protected abroad.",
  },
  {
    title: "Home Care Supplies",
    icon: <FaHome className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Mobility aids, wound care, incontinence products, and medical equipment.",
  },
  {
    title: "Free Local Delivery",
    icon: <FaTruck className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Same-day delivery for prescriptions across Calgary—fast and convenient.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description: "Private-pay options available for services not covered by public health plans.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function PharmacyServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="pharmacy"
      className="scroll-mt-28 pt-24 bg-gradient-to-br from-teal-dark via-teal to-dark text-white overflow-hidden"
    >
      {/* SEO */}
      <Helmet>
        <title>Pharmacy Services | HopeSpring Medical Clinic & Pharmacy</title>
        <meta
          name="description"
          content="Pharmacy Services including Prescriptions, Vaccinations, Consultations, Prescribing Pharmacist, OAT, Compounding, Compliance Packaging, Travel Health Services, Home Care Supplies, Free Local Delivery, Uninsured Services, Injection Services"
        />
        <link rel="canonical" href="https://greenwichhealth.ca/pharmacy-services" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow font-space mb-4">
          Pharmacy Services
        </h1>

        <p className="text-lg md:text-xl text-white/85 font-raleway max-w-3xl mx-auto">
          Expert pharmaceutical care and convenient services — from vaccinations to home delivery, all under one roof.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Prescriptions & Refills",
            "Vaccinations",
            "Consultation",
            "Compounding",
            "Home Delivery",
            "Uninsured Services",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-dark-soft/70 border border-yellow/30 text-yellow"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow/30 to-transparent mb-16" />
      </div>

      {/* SERVICES GRID */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacyServices.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-dark-soft/80 backdrop-blur-sm rounded-2xl shadow-lg
                         p-7 text-center transition-all duration-300
                         hover:scale-105 hover:bg-dark-muted"
              data-aos="fade-up"
            >
              <div className="mb-5">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-space">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-dark-soft/60">
        <h3 className="text-3xl font-extrabold text-yellow font-space mb-4">
          Need Your Medication Today?
        </h3>
        <p className="text-white/80 mb-6">
          Visit us in-store or request free local delivery — your health is our priority.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-yellow text-teal-dark font-semibold hover:bg-yellow-dark transition"
          >
            Request Delivery
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-teal-dark transition"
          >
            Visit Pharmacy
          </a>
        </div>
      </section>
    </div>
  );
}
