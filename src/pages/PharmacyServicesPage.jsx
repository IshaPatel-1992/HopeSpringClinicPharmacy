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
    <div id="pharmacy" className="scroll-mt-28 pt-24 bg-green-50 text-gray-900 overflow-hidden">

  {/* PAGE HEADER */}
  <section className="py-24 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 font-space mb-4">
      Pharmacy Services
    </h1>
    <p className="text-lg md:text-xl text-gray-700 font-raleway max-w-3xl mx-auto">
      Expert pharmaceutical care and convenient services — from vaccinations to home delivery, all under one roof.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
      {["Prescriptions & Refills","Vaccinations","Consultation","Compounding","Home Delivery","Uninsured Services"].map((item) => (
        <span key={item} className="px-4 py-2 rounded-lg bg-green-100 border border-green-200 text-green-700 font-semibold">
          {item}
        </span>
      ))}
    </div>
  </section>

  {/* SERVICES GRID */}
  <section className="pb-28 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {pharmacyServices.map(({ title, description, icon }, idx) => (
        <div
          key={title}
          className="group bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-7 text-center transition-all duration-300 hover:scale-105 hover:bg-white/60"
          data-aos="fade-up"
        >
          <div className={`mb-5 text-4xl ${["text-green-500","text-yellow-500","text-blue-500","text-teal-500"][idx % 4]} transition-transform group-hover:rotate-12`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 font-space">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </section>

  {/* CTA SECTION */}
  <section className="py-20 text-center">
    <h3 className="text-3xl font-extrabold text-green-700 font-space mb-4">Need Your Medication Today?</h3>
    <p className="text-gray-700 mb-6">
      Visit us in-store or request free local delivery — your health is our priority.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a href="/contact" className="px-6 py-3 rounded-lg bg-green-300 font-semibold hover:bg-green-400 transition shadow-md">
        Request Delivery
      </a>
      <a href="/contact" className="px-6 py-3 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-200 transition">
        Visit Pharmacy
      </a>
    </div>
  </section>
</div>

  );
}
