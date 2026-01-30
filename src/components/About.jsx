import React from "react";
import { FaArrowRight, FaDownload, FaCertificate } from "react-icons/fa";
import aboutImage from "../assets/About/HomeAboutImg1.jpg";
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-teal-50 to-white px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Side */}
        <div
          className="w-full md:w-1/2 rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]"
          data-aos="fade-right"
        >
          <img
            src={aboutImage}
            alt="Greenwich Clinic Pharmacy"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div
          className="md:w-1/2 flex flex-col justify-center max-w-xl"
          data-aos="fade-left"
        >
          <h2
            className="mb-6 text-teal-900 tracking-tight"
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.3,
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            About Greenwich{" "}
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#f59e0b",
                fontWeight: 700,
                borderBottom: "2px solid #facc15",
                paddingBottom: "2px",
              }}
            >
              <i>Medical Clinic & Pharmacy</i>
            </span>
          </h2>

          {/* Improved readability paragraph */}
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            At Greenwich Medical Clinic, your health and well-being come first. 
            Our compassionate team provides personalized medical care, from routine check-ups to specialized consultations. 
            As a proud member of the <b>Calgary Foothills Primary Care Network (PCN)</b>, we collaborate with local physicians and healthcare professionals to deliver coordinated, patient-centred care.
            Our on-site{" "}
            <span className="font-semibold text-teal-700">
              Greenwich Pharmacy is fully licensed and accredited by certified pharmacists
            </span>
            , ensuring safe, reliable, and professional healthcare services for our community. 
            We also offer expert prescription services and convenient delivery options — all designed with your comfort in mind.
          </p>
          {/* Buttons stacked and responsive */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            

            {/* Primary CTA button */}
            <Link
              to="/aboutuspg"
              smooth
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out w-fit"
              data-aos="fade-up"
            >
              Our Medical Experts <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
