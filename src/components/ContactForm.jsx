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
      className="relative py-24 bg-gradient-to-br from-teal-500 via-teal-100 to-white text-teal-900"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-white/90">
            Your health and comfort are our priority. Whether you’re reaching out
            for care, prescriptions, or to share feedback — we’re here to listen
            and help.
          </p>
        </div>

        {/* Address Section */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-2xl text-teal-600" />
            <h3 className="text-xl font-semibold">Address</h3>
          </div>
          <p className="mb-4">109 - 45 Greenbriar Lane NW, Calgary, AB</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=109+-+45+Greenbriar+Lane+NW,+Calgary,+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>

        {/* Contact Info Grid: Clinic & Pharmacy */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Clinic Info */}
          <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUserMd className="text-3xl text-teal-600" />
              <h3 className="text-2xl font-semibold">Clinic</h3>
            </div>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15879439528" className="text-teal-700 hover:underline">
                (587) 943-9528
              </a>
            </p>
            <p className="mb-2">
              <strong>Fax:</strong> 1-(833) 665-3180
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@greenwichhealth.ca" className="text-teal-700 hover:underline">
                info@greenwichhealth.ca
              </a>
            </p>
            <p>
              <strong>Hours:</strong> Mon – Fri: 9am – 5pm <br />
              Saturday, Sunday & Statutory Holidays: Closed
            </p>
          </div>

          {/* Pharmacy Info */}
          <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaPills className="text-3xl text-teal-600" />
              <h3 className="text-2xl font-semibold">Pharmacy</h3>
            </div>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15879439526" className="text-teal-700 hover:underline">
                (587) 943-9526
              </a>
            </p>
            <p className="mb-2">
              <strong>Fax:</strong> (587) 943-9527
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:pharmacy@greenwichhealth.ca" className="text-teal-700 hover:underline">
                pharmacy@greenwichhealth.ca
              </a>
            </p>
            <p className="mb-4">
              <strong>Hours:</strong> Mon – Fri: 9am – 6pm <br />
              Saturday, Sunday & Statutory Holidays: Closed
            </p>

            <a
              href="/files/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-teal-700 px-4 py-2 rounded-full shadow-sm transition w-fit group"
            >
              <FaCertificate className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-yellow-500" />
              View License Certificate
            </a>
          </div>
        </div>

        {/* Questions/Concerns + Poster Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
            {/* Text */}
            <div className="md:w-1/2">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
                <FaComments className="text-3xl text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">
                  Questions or Concerns?
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We’re committed to listening, learning, and continually improving
                our services. If you have questions, feedback, or concerns, please
                reach out — our team will respond promptly and with care.
              </p>
              <p className="text-gray-600 text-base italic mb-6">
                “Your voice helps us serve you better — together, we make care stronger.”
              </p>
            </div>

            {/* Poster */}
            <div className="md:w-1/2 flex justify-center">
              <a
                href="/files/Poster_PatientConcerns.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={concernPoster}
                  alt="Alberta College of Pharmacy - Patient Concerns Poster"
                  className="rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 max-w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
