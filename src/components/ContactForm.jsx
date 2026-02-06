import React from "react";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaPills,
  FaDirections,
  FaCertificate,
  FaComments,
} from "react-icons/fa";
import concernPoster from "../assets/ContactUS/Poster_PatientConcerns.jpg";

export default function ContactForm() {
  return (
    <section
      id="contactus"
      className="scroll-mt-32 pt-32 pb-24 bg-gradient-to-br from-teal-dark via-teal to-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow font-space mb-4">
            Contact HopeSpring Clinic & Pharmacy
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-raleway">
            Have questions, need care, or want to reach our pharmacy? We’re here to help — quickly and compassionately.
          </p>
        </div>

        {/* Address Section */}
        <div className="mb-16 bg-dark-soft/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center md:text-left" data-aos="fade-up">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-3xl text-yellow" />
            <h3 className="text-2xl font-semibold text-yellow">Our Address</h3>
          </div>
          <p className="mb-4 text-white font-medium">123 HopeSpring Lane NW, Calgary, AB</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=123+HopeSpring+Lane+NW,+Calgary,+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow text-teal-dark px-6 py-3 rounded-full font-semibold hover:bg-yellow-dark transition shadow"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Clinic Info */}
          <div className="bg-dark-soft/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <FaUserMd className="text-3xl text-yellow" />
              <h3 className="text-2xl font-semibold text-yellow">Clinic</h3>
            </div>
            <p className="mb-2"><strong>Phone:</strong>{" "}
              <a href="tel:+15879439528" className="text-white/80 hover:underline">(587) 943-9528</a>
            </p>
            <p className="mb-2"><strong>Email:</strong>{" "}
              <a href="mailto:info@hopespring.ca" className="text-white/80 hover:underline">info@hopespring.ca</a>
            </p>
            <p className="text-white/80">
              <strong>Hours:</strong> Mon – Fri: 9am – 5pm <br />
              Sat & Sun: Closed
            </p>
          </div>

          {/* Pharmacy Info */}
          <div className="bg-dark-soft/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <FaPills className="text-3xl text-yellow" />
              <h3 className="text-2xl font-semibold text-yellow">Pharmacy</h3>
            </div>
            <p className="mb-2"><strong>Phone:</strong>{" "}
              <a href="tel:+15879439526" className="text-white/80 hover:underline">(587) 943-9526</a>
            </p>
            <p className="mb-2"><strong>Email:</strong>{" "}
              <a href="mailto:pharmacy@hopespring.ca" className="text-white/80 hover:underline">pharmacy@hopespring.ca</a>
            </p>
            <p className="text-white/80 mb-4">
              <strong>Hours:</strong> Mon – Fri: 9am – 6pm <br />
              Sat & Sun: Closed
            </p>

            <a
              href="/files/HopeSpring_Pharmacy_License.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow text-teal-dark px-4 py-2 rounded-full shadow hover:bg-yellow-dark transition"
            >
              <FaCertificate className="transition-transform duration-300 ease-in-out" />
              View License
            </a>
          </div>
        </div>  
      </div>
    </section>
  );
}
