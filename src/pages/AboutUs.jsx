import React, { useEffect } from "react";
import {
  FaStethoscope,
  FaBriefcaseMedical,
  FaCapsules,
} from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import CertificateSection from "../components/CertificateSection";
import OurTeam from "../components/OurTeam";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="about" className="scroll-mt-28">
      {/* About Section */}
      <section
        id="aboutuspg"
        className="py-20 px-6 bg-white text-gray-700 max-w-4xl mx-auto scroll-mt-28"
        data-aos="fade-up"
      >
        <div className="inline-block mb-6 relative">
          <h2 className="text-4xl font-extrabold text-teal-800 relative z-10">
            About Us
          </h2>
          <div className="absolute w-16 h-1 bg-teal-600 bottom-0 left-0 rounded"></div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          { /* <p className="flex items-start gap-3">
            <FaStethoscope className="text-xl text-teal-600 mt-1" />
            At Greenwich Medical Clinic, your health comes first. We provide
            comprehensive medical care — from routine check-ups to chronic
            condition management — with a focus on compassion and personalized
            attention.
          </p> */ } 
          <p className="flex items-start gap-3">
  <FaStethoscope className="text-xl text-teal-600 mt-1" />
  <span>
    At Greenwich Medical Clinic, your health comes first. We provide comprehensive medical care — from routine check-ups to chronic condition management — with a focus on compassion and personalized attention. <br />
    As part of the <span className="font-semibold text-teal-700">Calgary Foothills Primary Care Network (PCN)</span>, we collaborate with a team of health professionals including doctors, nurses, pharmacists, dietitians, and social workers to provide coordinated, comprehensive care.
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>Access to mental health counselling and chronic disease support</li>
      <li>Health workshops and wellness programs</li>
      <li>Team-based, patient-centred primary care services</li>
    </ul>
  </span>
</p>

          <p className="flex items-start gap-3">
            <FaBriefcaseMedical className="text-xl text-teal-600 mt-1" />
            Our experienced healthcare professionals are committed to supporting
            you at every stage of your health journey.
          </p>
          <p className="flex items-start gap-3">
            <FaCapsules className="text-xl text-teal-600 mt-1" />
            To make your experience seamless, our in-house pharmacy offers
            prescription services and convenient delivery — all under one roof.
          </p>
          
        </div>
      </section>

      {/* Certificate Section */}
      <CertificateSection />

      {/* Team Introduction Section */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-teal-800 mb-4">
          Meet Our Team
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          Get to know the friendly and professional team behind Greenwich
          Medical Clinic & Pharmacy — your partners in better health.
        </p>
      </section>

      {/* OurTeam Component */}
      <OurTeam />
    </div>
  );
}
