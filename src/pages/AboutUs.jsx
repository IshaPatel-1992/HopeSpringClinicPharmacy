import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaNotesMedical,
  FaCheckCircle,
  FaUsers,
  FaUserMd,
  FaShieldAlt,
  FaHeartbeat,
} from "react-icons/fa";
import { FaStethoscope, FaCapsules } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";

import valueImg1 from "../assets/About/shutterstock_2310192627_Resize.png";
import valueImg2 from "../assets/About/shutterstock_2454579437.jpg";
import valueImg3 from "../assets/About/shutterstock_2175114179.jpg";

const team = [
  {
    name: "Dr. Jane Doe",
    credentials: "MD, CCFP",
    role: "Family Physician",
    photo: "https://via.placeholder.com/600x600",
    bio: "Providing patient-centered care with a compassionate approach to family medicine and long-term wellness.",
  },
  {
    name: "John Smith",
    role: "Pharmacy Manager",
    photo: "https://via.placeholder.com/600x600",
    bio: "Supporting patients with safe medication use, pharmacy counselling, and convenient prescription care.",
    licenses: ["Practice Permit No. ####", "Pharmacy License ####"],
  },
];

export default function AboutUs() {
  const teamRef = useRef(null);

  const handleShowTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main
      id="about"
      className="min-h-screen scroll-mt-28 bg-gradient-to-br from-white via-brand-primary-light/25 to-brand-accent-light/35 text-text-primary overflow-hidden"
    >
      <section className="relative pt-12 pb-12">
        <div className="absolute -top-28 -right-28 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-28 w-80 h-80 bg-yellow-100/80 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <MdMedicalServices />
            About HopeSpring
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Compassionate clinic & pharmacy care — together
          </h1>

          <p className="mt-4 max-w-3xl text-text-secondary text-lg leading-relaxed">
            HopeSpring brings medical care and pharmacy support into one
            convenient setting, helping patients receive clear guidance,
            coordinated service, and caring support at every step.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <button
              onClick={handleShowTeam}
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold
              bg-brand-primary text-white shadow-[0_10px_25px_rgba(0,64,44,0.18)]
              hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-1 transition"
            >
              <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <FaUsers />
              </span>
              Meet Our Team
            </button>

            <Link
              to="/contactus"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold
              bg-white border border-yellow-200 text-brand-primary shadow-sm
              hover:shadow-md hover:-translate-y-1 hover:border-brand-accent transition"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 flex items-center justify-center">
                <FaNotesMedical />
              </span>
              Contact Us
            </Link>

            <a
              href="tel:+18259624673"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold
              bg-white border border-brand-gray-light text-text-primary
              hover:border-brand-accent hover:shadow-md hover:-translate-y-1 transition"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 via-green-50 to-yellow-100 flex items-center justify-center text-brand-primary">
                <FaPhoneAlt />
              </span>
              Call Clinic
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-5">
              <InfoCard icon={<FaHeartbeat />} title="Our Promise">
                <ul className="space-y-2">
                  <li>• Clear guidance and respectful care</li>
                  <li>• Team-based support between clinic and pharmacy</li>
                  <li>• Helpful communication and patient-first service</li>
                </ul>
              </InfoCard>

              <InfoCard icon={<FaCheckCircle />} title="Why HopeSpring?">
                <ul className="space-y-2 text-sm">
                  <li>✓ Compassionate, patient-first approach</li>
                  <li>✓ Clinic and pharmacy support in one place</li>
                  <li>✓ Modern, welcoming environment</li>
                  <li>✓ Convenient access to everyday care</li>
                </ul>
              </InfoCard>

              <InfoCard icon={<FaShieldAlt />} title="Professional Standards">
                <ul className="space-y-2 text-sm">
                  <li>✓ Licensed healthcare professionals</li>
                  <li>✓ Patient privacy and confidentiality</li>
                  <li>✓ Evidence-informed care</li>
                  <li>✓ Safe medication support</li>
                </ul>
              </InfoCard>

              <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 p-6 shadow-sm">
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  “Having medical and pharmacy support in one place makes care
                  easier, more connected, and more convenient.”
                </p>
                <div className="mt-3 text-sm font-semibold text-text-primary">
                  — HopeSpring Care Approach
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <ValueCard
                  img={valueImg1}
                  alt="Patient-centered medical care"
                  icon={<FaStethoscope />}
                  title="Patient-Centered Care"
                  desc="Compassionate care with clarity, respect, and personal attention."
                />

                <ValueCard
                  img={valueImg2}
                  alt="Medical team collaboration"
                  icon={<FaUsers />}
                  title="Team-Based Approach"
                  desc="Coordinated support between clinic providers and pharmacy care."
                />

                <ValueCard
                  img={valueImg3}
                  alt="Pharmacy and medication support"
                  icon={<FaCapsules />}
                  title="Integrated Pharmacy"
                  desc="Prescription services, medication counselling, and delivery support."
                />
              </div>

              <section
                ref={teamRef}
                className="bg-white rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm scroll-mt-36"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-extrabold text-text-primary"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Meet Our Team
                    </h2>
                    <p className="mt-2 text-text-secondary">
                      Add doctor, pharmacist, and staff details here when final
                      names, photos, and introductions are available.
                    </p>
                  </div>

                  <Link
                    to="/contactus"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                    bg-white border border-brand-accent/40 text-brand-primary
                    hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50 hover:border-yellow-200 transition"
                  >
                    Contact the Team
                  </Link>
                </div>

                <div className="mt-6 space-y-6">
                  {team.map((member, idx) => (
                    <TeamCard key={idx} member={member} reverse={idx % 2 === 1} />
                  ))}
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

function ValueCard({ img, alt, icon, title, desc }) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <div className="absolute left-4 bottom-4 inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/90 border border-brand-gray-light shadow-sm text-brand-primary text-xl">
          {icon}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TeamCard({ member, reverse }) {
  return (
    <article className="group bg-white rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className={`grid md:grid-cols-5 ${reverse ? "md:[direction:rtl]" : ""}`}>
        <div className="md:col-span-2">
          <img
            src={member.photo}
            alt={member.name}
            className="h-64 md:h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className={`md:col-span-3 p-6 md:p-8 ${reverse ? "md:[direction:ltr]" : ""}`}>
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center min-w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary group-hover:rotate-6 transition">
              <FaUserMd />
            </span>

            <div>
              <h3 className="text-2xl font-extrabold text-text-primary">
                {member.name}
              </h3>

              {member.credentials && (
                <p className="text-sm text-text-muted mt-1">
                  {member.credentials}
                </p>
              )}

              <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-200 text-brand-primary">
                {member.role}
              </div>
            </div>
          </div>

          <p className="mt-5 text-text-secondary leading-relaxed">
            {member.bio}
          </p>

          <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white border border-brand-gray-light p-4">
              <div className="font-semibold text-text-primary">Focus</div>
              <div className="text-text-secondary mt-1">
                Patient care, guidance, and long-term wellness support.
              </div>
            </div>

            <div className="rounded-xl bg-white border border-brand-gray-light p-4">
              <div className="font-semibold text-text-primary">Approach</div>
              <div className="text-text-secondary mt-1">
                Clear communication and coordinated follow-up.
              </div>
            </div>
          </div>

          {member.licenses && (
            <div className="mt-5">
              <div className="text-sm font-semibold text-text-primary">Licenses</div>
              <ul className="mt-2 text-sm text-text-secondary list-disc list-inside space-y-1">
                {member.licenses.map((lic, i) => (
                  <li key={i}>{lic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}