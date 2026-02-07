import React from "react";
import { FaMapMarkerAlt, FaUserMd, FaDirections } from "react-icons/fa";
// Keep these imports if you plan to use later (currently commented sections)
// import { FaPills, FaCertificate } from "react-icons/fa";
// import concernPoster from "../assets/ContactUS/Poster_PatientConcerns.jpg";

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
            Have questions or need care? Reach our clinic — we’re here to help.
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
                151 Skyview Bay NE #2130, Calgary, AB T3N 1N6
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Parking available • Wheelchair accessible
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir//151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6/@51.1577844,-113.9583911,17z/data=!4m17!1m7!3m6!1s0x5371617d12551067:0xd43910279ae08e05!2s151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6!3b1!8m2!3d51.1577811!4d-113.9558162!4m8!1m0!1m5!1m1!1s0x5371617d12551067:0xd43910279ae08e05!2m2!1d-113.9558162!2d51.1577811!3e0?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-sm"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </div>

        {/* Clinic Centered */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-8 hover:shadow-xl transition text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUserMd className="text-2xl text-green-600" />
              <h3 className="text-2xl font-semibold text-green-800 font-space">
                Clinic
              </h3>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+18259624673"
                  className="text-green-700 hover:underline"
                >
                  (825) 962-4673
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@hopespringmedical.ca"
                  className="text-green-700 hover:underline"
                >
                  info@hopespringmedical.ca
                </a>
              </p>
              <p className="text-sm text-gray-600 pt-2">
                <span className="font-semibold text-gray-700">Hours:</span>{" "}
                Mon–Fri: 9am–5pm
                <br />
                Sat &amp; Sun: Closed
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
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
        </div>

        {/* Pharmacy (keep commented as-is)
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-8 hover:shadow-xl transition">
          ...
        </div>
        */}

        {/* Patient Concerns Poster (keep commented as-is)
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-green-100 p-6">
          ...
        </div>
        */}
      </div>
    </section>
  );
}
