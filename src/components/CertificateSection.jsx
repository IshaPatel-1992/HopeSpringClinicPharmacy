import React from "react";

export default function CertificateSection() {
  return (
    <section
      id="certificate"
      className="py-20 px-6 bg-gray-50 text-center"
      data-aos="fade-up"
    >
      <h3 className="text-3xl font-bold text-teal-800 mb-6">
        Pharmacy Certification
      </h3>
      <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
        HopeSpring Pharmacy is fully licensed and accredited by certified
        pharmacists. This ensures safe, reliable, and professional
        healthcare services for our community.
      </p>
      {/* PDF Link Option */}
      <div className="mt-6">
        <a
          href="/files/certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600 transition"
        >
          View Official Certificate (PDF)
        </a>
      </div>
    </section>
  );
}
