import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
  FaSyringe,
  FaFileMedical,
  FaBaby,
  FaVenus,
  FaFileInvoice,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- SERVICES DATA ---------------- */
const services = [
  {
    title: "Family Practice",
    icon: <FaUserMd className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Comprehensive care for all ages — from children to seniors. Building long-term relationships for lifelong health.",
  },
  {
    title: "Walk-in Clinic",
    icon: <FaNotesMedical className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "No appointment needed. Fast access to care for illnesses, infections, and minor concerns.",
  },
  {
    title: "Immunization",
    icon: <FaSyringe className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Routine childhood, adult, and travel vaccines to keep you protected.",
  },
  {
    title: "Pap Smear / Pap Test",
    icon: <FaFileMedical className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Important cervical cancer screening with early detection benefits.",
  },
  {
    title: "Chronic & Minor Illness Care",
    icon: <FaHeartbeat className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Ongoing care for diabetes, asthma, hypertension, and common illnesses.",
  },
  {
    title: "Routine Physical Exams",
    icon: <FaStethoscope className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Annual check-ups including vitals, screenings, and preventive care.",
  },
  {
    title: "Women's Health",
    icon: <FaVenus className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Personalized care through all stages of a woman’s life.",
  },
  {
    title: "Pregnancy Testing",
    icon: <FaBaby className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Confidential, fast, and accurate pregnancy testing services.",
  },
  {
    title: "Minor Injury Treatment",
    icon: <FaHeartbeat className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Prompt treatment for cuts, burns, sprains, and minor injuries.",
  },
  {
    title: "Medical Notes & Forms",
    icon: <FaNotesMedical className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "School, work, and medical forms completed quickly and professionally.",
  },
  {
    title: "Health Education",
    icon: <FaUserMd className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Guidance on prevention, nutrition, fitness, and healthy living.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Affordable private-pay options including IFHP for refugees.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function MedicalServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
   <div id="medical" className="scroll-mt-28 pt-24 bg-green-50 text-gray-900 overflow-hidden">

  {/* PAGE HEADER */}
  <section className="py-24 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 font-space mb-4">
      Medical Services
    </h1>
    <p className="text-lg md:text-xl text-gray-700 font-raleway max-w-3xl mx-auto">
      Comprehensive, patient-centered care — from walk-in visits to long-term family practice, all under one roof.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
      {["Family Practice", "Walk-In Clinic", "Women’s Health", "Immunizations", "Chronic Care", "Uninsured Services"].map((item) => (
        <span key={item} className="px-4 py-2 rounded-lg bg-green-100 border border-green-200 text-green-700 font-semibold">
          {item}
        </span>
      ))}
    </div>
  </section>

  {/* SERVICES GRID */}
  <section className="pb-28 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(({ title, description, icon }, idx) => (
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
    <h3 className="text-3xl font-extrabold text-green-700 font-space mb-4">Need Care Today?</h3>
    <p className="text-gray-700 mb-6">
      Walk in or book an appointment — our team is here to help.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a href="/contact" className="px-6 py-3 rounded-lg bg-green-300 font-semibold hover:bg-green-400 transition shadow-md">
        Book Appointment
      </a>
      <a href="/contact" className="px-6 py-3 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-200 transition">
        Walk-In Info
      </a>
    </div>
  </section>
</div>

  );
}
