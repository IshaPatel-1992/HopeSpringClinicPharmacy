import React from "react";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaPills,
  FaDirections,
  FaCertificate,
} from "react-icons/fa";
import concernPoster from "../assets/ContactUS/Poster_PatientConcerns.jpg";

export default function ContactForm() {
  return (
    <section
      id="contactus"
      className="scroll-mt-36 pt-36 md:pt-40 pb-28 bg-green-50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 font-space mb-4">
            Contact HopeSpring Clinic &amp; Pharmacy
          </h2>
          <p className="text-gray-700 font-raleway text-lg md:text-xl">
            Have questions or need care? Reach our clinic or pharmacy — we’re here to help.
          </p>
        </div>

        {/* Address Card */}
        <div className="mb-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-2xl text-green-600" />
                <h3 className="text-2xl font-semibold text-green-800 font-space">
                  Our Address
                </h3>
              </div>
              <p className="text-gray-700 font-medium">
                123 HopeSpring Lane NW, Calgary, AB
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Parking available • Wheelchair accessible
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=123+HopeSpring+Lane+NW,+Calgary,+AB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-sm"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </div>

        {/* Clinic + Pharmacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Clinic */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUserMd className="text-2xl text-green-600" />
              <h3 className="text-2xl font-semibold text-green-800 font-space">
                Clinic
              </h3>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+15879439528" className="text-green-700 hover:underline">
                  (999) 999-9999
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@hopespring.ca"
                  className="text-green-700 hover:underline"
                >
                  info@hopespring.ca
                </a>
              </p>
              <p className="text-sm text-gray-600 pt-2">
                <span className="font-semibold text-gray-700">Hours:</span> Mon–Fri: 9am–5pm
                <br />
                Sat &amp; Sun: Closed
              </p>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="/contactus"
                className="px-5 py-2.5 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-sm"
              >
                Book / Contact
              </a>
              <a
                href="/medical-services"
                className="px-5 py-2.5 rounded-xl bg-white text-green-800 border border-green-200 font-semibold hover:bg-green-50 transition"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Pharmacy */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaPills className="text-2xl text-green-600" />
              <h3 className="text-2xl font-semibold text-green-800 font-space">
                Pharmacy
              </h3>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+15879439526" className="text-green-700 hover:underline">
                  (999) 999-9999
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:pharmacy@hopespring.ca"
                  className="text-green-700 hover:underline"
                >
                  pharmacy@hopespring.ca
                </a>
              </p>
              <p className="text-sm text-gray-600 pt-2">
                <span className="font-semibold text-gray-700">Hours:</span> Mon–Fri: 9am–6pm
                <br />
                Sat &amp; Sun: Closed
              </p>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="/pharmacy-services"
                className="px-5 py-2.5 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-sm"
              >
                Pharmacy Services
              </a>

              <a
                href="/files/HopeSpring_Pharmacy_License.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-green-800 border border-green-200 font-semibold hover:bg-green-50 transition"
              >
                <FaCertificate />
                View License
              </a>
            </div>
          </div>
        </div>

        {/* Patient Concerns Poster */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={concernPoster}
              alt="Patient Concerns Poster"
              className="w-full md:w-[360px] rounded-2xl shadow-sm border border-green-100 object-cover"
            />
            <div className="flex-1">
              <h4 className="text-2xl font-extrabold text-green-800 font-space mb-2">
                Patient Concerns &amp; Feedback
              </h4>
              <p className="text-gray-700 mb-4">
                We take your concerns seriously. Please review the poster and contact us if you need support.
              </p>
              <a
                href="/contactus"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-sm"
              >
                Submit Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
