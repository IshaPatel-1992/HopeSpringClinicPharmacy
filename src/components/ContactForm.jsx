import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUserMd, FaDirections } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FaPhoneAlt, FaNotesMedical } from "react-icons/fa";

export default function ContactForm() {
  return (
    <main
      id="contactus"
      className="min-h-screen scroll-mt-28 bg-gradient-to-br from-white via-brand-primary-light/30 to-brand-accent-light/30 text-gray-900 overflow-hidden"
    >
      {/* Header / Hero */}
      <section className="pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <MdMedicalServices className="text-lg" />
            Contact HopeSpring
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold text-text-primary"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We’re here to help — reach the clinic anytime
          </h1>

          <p className="mt-4 max-w-2xl text-text-secondary text-lg">
            Have questions or need care? Call, email, or visit us. We’ll guide you
            to the right next step.
          </p>

          {/* CTAs (match Medical theme) */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+18259624673"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-brand-primary text-white
                shadow-[0_8px_20px_rgba(93,122,137,0.22)]
                hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.32)]
                transition"
              >
                <FaPhoneAlt />
                Call (825) 962-4673
              </a>

              <a
                href="mailto:info@hopespringmedical.ca"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
                hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
              >
                <FaNotesMedical />
                Email Us
              </a>

              <Link
                to="/medical-services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
                hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Address + Hours (sticky like Medical page) */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28 self-start space-y-6">
              {/* Address */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <FaMapMarkerAlt className="text-2xl text-brand-primary" />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-bold text-text-primary"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Our Address
                    </h2>
                    <p className="mt-2 text-text-secondary">
                      151 Skyview Bay NE #2130, Calgary, AB T3N 1N6
                    </p>
                    <p className="mt-1 text-sm text-text-muted">
                      Parking available • Wheelchair accessible
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir//151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6/@51.1577844,-113.9583911,17z/data=!4m17!1m7!3m6!1s0x5371617d12551067:0xd43910279ae08e05!2s151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6!3b1!8m2!3d51.1577811!4d-113.9558162!4m8!1m0!1m5!1m1!1s0x5371617d12551067:0xd43910279ae08e05!2m2!1d-113.9558162!2d51.1577811!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                  bg-brand-primary text-white hover:bg-brand-primary-dark transition
                  shadow-[0_8px_20px_rgba(93,122,137,0.22)]"
                >
                  <FaDirections />
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Clinic Hours</h3>
                <ul className="mt-3 space-y-1 text-text-secondary text-sm">
                  <li>Mon – Fri: 9:00 AM – 5:00 PM</li>
                  <li>Saturday: Closed</li>
                  <li>Sunday: Closed</li>
                </ul>

                <div className="mt-4 rounded-xl bg-brand-accent-light/60 border border-brand-accent/30 p-4">
                  <div className="font-semibold text-text-primary">
                    Walk-ins welcome
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    Walk-ins accepted during clinic hours based on availability.
                    For faster service, call ahead.
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Quick Contact</h3>
                <div className="mt-3 text-sm text-text-secondary">
                  📞{" "}
                  <a href="tel:+18259624673" className="text-brand-primary font-medium hover:underline">
                    (825) 962-4673
                  </a>
                  <br />
                  ✉{" "}
                  <a href="mailto:info@hopespringmedical.ca" className="text-brand-primary font-medium hover:underline">
                    info@hopespringmedical.ca
                  </a>
                </div>
              </div>
            </aside>

            {/* Right: Clinic card + Map embed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Clinic Card */}
              <section className="bg-white/70 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <FaUserMd className="text-2xl text-brand-primary" />
                    <div>
                      <h2
                        className="text-2xl md:text-3xl font-extrabold text-text-primary"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Clinic
                      </h2>
                      <p className="text-text-secondary mt-1">
                        Call or email — we’ll help you choose the right service.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/medical-services"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                    bg-white/70 border border-brand-accent/40 text-brand-primary
                    hover:bg-brand-accent-light/60 hover:border-brand-accent transition"
                  >
                    View Services
                  </Link>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/80 border border-brand-gray-light p-5">
                    <div className="text-sm text-text-muted">Phone</div>
                    <a
                      href="tel:+18259624673"
                      className="mt-1 block text-lg font-semibold text-brand-primary hover:underline"
                    >
                      (825) 962-4673
                    </a>
                    <div className="mt-2 text-sm text-text-secondary">
                      Best for appointments, questions, and walk-in availability.
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/80 border border-brand-gray-light p-5">
                    <div className="text-sm text-text-muted">Email</div>
                    <a
                      href="mailto:info@hopespringmedical.ca"
                      className="mt-1 block text-lg font-semibold text-brand-primary hover:underline"
                    >
                      info@hopespringmedical.ca
                    </a>
                    <div className="mt-2 text-sm text-text-secondary">
                      Great for documents, follow-ups, and general inquiries.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contactus"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                    bg-brand-primary text-white hover:bg-brand-primary-dark transition
                    shadow-[0_8px_20px_rgba(93,122,137,0.22)]"
                  >
                    <FaNotesMedical />
                    Book / Contact
                  </Link>

                  <a
                    href="https://www.google.com/maps/dir//151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6/@51.1577844,-113.9583911,17z/data=!4m17!1m7!3m6!1s0x5371617d12551067:0xd43910279ae08e05!2s151+Skyview+Bay+NE+%232130,+Calgary,+AB+T3N+1N6!3b1!8m2!3d51.1577811!4d-113.9558162!4m8!1m0!1m5!1m1!1s0x5371617d12551067:0xd43910279ae08e05!2m2!1d-113.9558162!2d51.1577811!3e0?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                    bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
                    hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
                  >
                    <FaDirections />
                    Directions
                  </a>
                </div>
              </section>

              {/* Map Embed */}
              <section className="bg-white/70 backdrop-blur-md rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3
                    className="text-xl font-bold text-text-primary"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Find us on the map
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    151 Skyview Bay NE #2130, Calgary, AB T3N 1N6
                  </p>
                </div>

                <div className="h-[360px] md:h-[420px] w-full">
                  <iframe
                    title="HopeSpring Location Map"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=151%20Skyview%20Bay%20NE%20%232130,%20Calgary,%20AB%20T3N%201N6&output=embed"
                  />
                </div>
              </section>

              {/* Optional: Pharmacy card later (kept ready) */}
              {/*
              <section className="bg-white/70 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm">
                ...
              </section>
              */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}