import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaNotesMedical,
  FaUserMd,
  FaPrescriptionBottleAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const directionUrl =
  "https://www.google.com/maps/dir//151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function ContactForm() {
  return (
    <main
      id="contactus"
      className="min-h-screen scroll-mt-28 bg-gradient-to-br from-white via-brand-primary-light/25 to-brand-accent-light/35 text-text-primary overflow-hidden"
    >
      <section className="relative pt-12 pb-12">
        <div className="absolute -top-28 -right-28 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-28 w-80 h-80 bg-yellow-100/80 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <FaNotesMedical />
            Contact HopeSpring
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact HopeSpring Medical Clinic & Pharmacy
          </h1>

          <p className="mt-4 max-w-3xl text-text-secondary text-lg leading-relaxed">
            We are here to help with clinic appointments, pharmacy services,
            prescription support, directions, and general inquiries.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <a
              href="tel:+15875342506"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold bg-brand-primary text-white shadow-[0_10px_25px_rgba(0,64,44,0.18)] hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-1 transition"
            >
              <FaPhoneAlt />
              Call Clinic
            </a>

            <a
              href="tel:+15875342502"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold bg-white border border-yellow-200 text-brand-primary shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-accent transition"
            >
              <FaPrescriptionBottleAlt />
              Call Pharmacy
            </a>

            <a
              href={directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold bg-white border border-brand-gray-light text-text-primary hover:border-brand-accent hover:shadow-md hover:-translate-y-1 transition"
            >
              <FaDirections />
              Directions
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-5">
              <InfoCard icon={<FaMapMarkerAlt />} title="Our Address">
                <p>151 Skyview Bay NE #2130, Calgary, AB T3N 1N6</p>
                <p className="mt-2 text-sm text-text-muted">
                  Parking available • Wheelchair accessible
                </p>

                <a
                  href={directionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-brand-primary text-white hover:bg-brand-primary-dark transition shadow-sm"
                >
                  <FaDirections />
                  Get Directions
                </a>
              </InfoCard>

              <InfoCard icon={<FaClock />} title="Hours of Operation">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-text-primary">
                      Clinic & Pharmacy Hours
                    </div>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                      <li>Saturday: 10:00 AM – 2:00 PM</li>
                      <li>Sunday & Holidays: Closed</li>
                    </ul>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={<FaQuestionCircle />} title="Quick Note">
                <p className="text-sm">
                  Walk-ins and pharmacy services may depend on provider
                  availability and service eligibility. Calling ahead is
                  recommended.
                </p>
              </InfoCard>
            </aside>

            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-5">
                  <ContactCard
                    icon={<FaUserMd />}
                    title="Medical Clinic"
                    phone="587-534-2506"
                    tel="+15875342506"
                    email="info@hopespringmedical.ca"
                    description="For appointments, walk-in availability, medical forms, and general clinic inquiries."
                    link="/medical-services"
                    linkText="View Clinic Services"
                  />

                  <ContactCard
                    icon={<FaPrescriptionBottleAlt />}
                    title="Pharmacy"
                    phone="587-534-2502"
                    tel="+15875342502"
                    email="hsskypharmacy@gmail.com"
                    description="For prescriptions, refills, vaccinations, delivery, medication packaging, and pharmacy service questions."
                    link="/pharmacy-services"
                    linkText="View Pharmacy Services"
                  />
                </div>
              </section>

              <section className="bg-white rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Form
                </h2>
                <p className="mt-2 text-text-secondary">
                  Microsoft Form can be embedded here once finalized.
                </p>

                <div className="mt-6 rounded-2xl border border-dashed border-yellow-200 bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 p-6 text-text-secondary">
                  Contact Us Microsoft Form placeholder. Replace this area with
                  the Microsoft Form embed link when ready.
                </div>
              </section>

              <section className="bg-white rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3
                    className="text-xl font-bold text-text-primary"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Find Us on the Map
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    151 Skyview Bay NE #2130, Calgary, AB T3N 1N6
                  </p>
                </div>

                <div className="h-[340px] md:h-[420px] w-full">
                  <iframe
                    title="HopeSpring Location Map"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=151%20Skyview%20Bay%20NE%20%232130,%20Calgary,%20AB%20T3N%201N6&output=embed"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-gray-light p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary group-hover:rotate-6 transition">
          {icon}
        </span>

        <h2
          className="text-lg font-bold text-text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
      </div>

      <div className="text-text-secondary leading-relaxed">{children}</div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  phone,
  tel,
  email,
  description,
  link,
  linkText,
}) {
  return (
    <div className="group relative rounded-2xl border border-brand-gray-light bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 group-hover:w-full transition-all duration-300" />

      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary text-xl group-hover:rotate-6 transition">
          {icon}
        </span>

        <h3
          className="text-xl font-bold text-text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
      </div>

      <p className="mt-4 text-text-secondary text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <a
          href={`tel:${tel}`}
          className="flex items-center gap-2 text-brand-primary font-semibold hover:underline"
        >
          <FaPhoneAlt />
          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-brand-primary font-semibold hover:underline"
        >
          <FaEnvelope />
          {email}
        </a>
      </div>

      <Link
        to={link}
        onClick={scrollToTop}
        className="mt-5 inline-flex items-center justify-center w-full px-4 py-3 rounded-xl font-semibold bg-white border border-brand-accent/40 text-brand-primary hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50 hover:border-yellow-200 transition"
      >
        {linkText}
      </Link>
    </div>
  );
}