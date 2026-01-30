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
    title: "IUD & Contraceptive Implant",
    icon: <FaVenus className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Professional, confidential IUD and contraceptive implant insertion services.",
  },
  {
    title: "Spanish-Speaking Physician",
    icon: <FaUserMd className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Appointments available with our Spanish-speaking doctor for accessible care.",
  },
  {
    title: "Telemedicine",
    icon: <FaStethoscope className="text-5xl text-yellow group-hover:scale-110 transition-transform duration-300" />,
    description:
      "Virtual consultations from the comfort of your home with trusted providers.",
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
    <div
      id="medical"
      className="scroll-mt-28 pt-24 bg-gradient-to-br from-teal-dark via-teal to-dark text-white overflow-hidden"
    >
      {/* SEO */}
      <Helmet>
        <title>Medical Services | HopeSpring Medical Clinic & Pharmacy</title>
        <meta
          name="description"
          content="Family practice, walk-in clinic, women's health, immunizations, IUD insertion, chronic disease management, and uninsured services."
        />
        <link rel="canonical" href="" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow font-space mb-4">
          Medical Services
        </h1>

        <p className="text-lg md:text-xl text-white/85 font-raleway max-w-3xl mx-auto">
          Comprehensive, patient-centered care — from walk-in visits to long-term family practice, all under one roof.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Family Practice",
            "Walk-In Clinic",
            "Women’s Health",
            "Immunizations",
            "Chronic Care",
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
          {services.map(({ title, description, icon }) => (
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
          Need Care Today?
        </h3>
        <p className="text-white/80 mb-6">
          Walk in or book an appointment — our team is here to help.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-yellow text-teal-dark font-semibold hover:bg-yellow-dark transition"
          >
            Book Appointment
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-teal-dark transition"
          >
            Walk-In Info
          </a>
        </div>
      </section>
    </div>
  );
}
