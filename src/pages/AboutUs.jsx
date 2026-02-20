import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaCapsules, FaUsers } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { FaPhoneAlt, FaNotesMedical } from "react-icons/fa";

import valueImg1 from "../assets/About/shutterstock_2310192627_Resize.png";
import valueImg2 from "../assets/About/shutterstock_2454579437.jpg";
import valueImg3 from "../assets/About/shutterstock_2175114179.jpg";

const team = [
  {
    name: "Dr. Jane Doe",
    credentials: "MD, CCFP",
    role: "Family Physician",
    photo: "https://via.placeholder.com/600x600",
    bio: "Providing patient-centered care with over 10 years of experience in family medicine.",
  },
  {
    name: "John Smith",
    role: "Pharmacy Manager",
    photo: "https://via.placeholder.com/600x600",
    bio: "Ensuring safe and effective medication management for our patients.",
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
      className="min-h-screen scroll-mt-28 bg-gradient-to-br from-white via-brand-primary-light/30 to-brand-accent-light/30 text-gray-900 overflow-hidden"
    >
      {/* Header / Hero */}
      <section className="pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <MdMedicalServices className="text-lg" />
            About HopeSpring
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold text-text-primary"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Compassionate, coordinated healthcare — in one place
          </h1>

          <p className="mt-4 max-w-2xl text-text-secondary text-lg">
            We bring clinic care and pharmacy support together so you can get the
            right help, faster — with a team that knows you.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShowTeam}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-brand-primary text-white
                shadow-[0_8px_20px_rgba(93,122,137,0.22)]
                hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.32)]
                transition"
              >
                <FaUsers />
                Meet Our Team
              </button>

              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
                hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
              >
                <FaNotesMedical />
                Book / Ask
              </Link>

              <a
                href="tel:+18259624673"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
                hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
              >
                <FaPhoneAlt className="text-brand-accent" />
                (825) 962-4673
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values + Sidebar + Team (team moved up) */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Sidebar */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28 self-start space-y-6">
              {/* Our promise */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h2
                  className="text-xl font-bold text-text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our promise
                </h2>

                <ul className="mt-4 space-y-2 text-text-secondary">
                  <li>• Clear guidance and respectful care</li>
                  <li>• Team-based support (clinic + pharmacy)</li>
                  <li>• Simple, helpful communication</li>
                </ul>

                <div className="mt-6 rounded-xl bg-white/70 border border-brand-gray-light p-4">
                  <div className="font-semibold text-text-primary">What to expect</div>
                  <p className="text-sm text-text-secondary mt-1">
                    A welcoming clinic experience with providers who listen, and a
                    pharmacy team that helps you understand your medications.
                  </p>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Quick info</h3>

                <div className="mt-3 text-sm text-text-secondary space-y-2">
                  <div>
                    <div className="font-semibold text-text-primary">Clinic & Pharmacy</div>
                    <p>Coordinated care so you can get support in one place.</p>
                  </div>

                  <div className="mt-4 rounded-xl bg-brand-accent-light/60 border border-brand-accent/30 p-4">
                    <div className="font-semibold text-text-primary">Need help choosing?</div>
                    <p className="text-sm text-text-secondary mt-1">
                      Contact us and we’ll guide you to the right service.
                    </p>
                  </div>

                  <div className="pt-2">
                    📞{" "}
                    <a
                      href="tel:+18259624673"
                      className="text-brand-primary font-medium hover:underline"
                    >
                      (825) 962-4673
                    </a>
                    <br />
                    ✉{" "}
                    <a
                      href="mailto:info@hopespringmedical.ca"
                      className="text-brand-primary font-medium hover:underline"
                    >
                      info@hopespringmedical.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Why us */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Why HopeSpring?</h3>

                <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                  <li>✓ Compassionate, patient-first approach</li>
                  <li>✓ Experienced providers</li>
                  <li>✓ Integrated pharmacy support</li>
                  <li>✓ Modern, welcoming environment</li>
                </ul>
              </div>
              {/* Certifications / Trust */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">
                  Professional Standards
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                  <li>✓ Licensed healthcare professionals</li>
                  <li>✓ Accredited pharmacy services</li>
                  <li>✓ Patient privacy & confidentiality</li>
                  <li>✓ Evidence-based care</li>
                </ul>
              </div>
              {/* Patient Feedback */}
              <div className="bg-brand-accent-light/40 border border-brand-accent/30 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-text-secondary italic leading-relaxed">
                  “The team at HopeSpring truly listens. Having the clinic and pharmacy
                  in one place made everything so much easier.”
                </p>
                <div className="mt-3 text-sm font-semibold text-text-primary">
                  — Local Patient
                </div>
              </div>
            </aside>

            {/* Right: Values + Team */}
            <div className="lg:col-span-2 space-y-6">
              {/* Values (with Shutterstock images) */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    img: valueImg1,
                    alt: "Patient-centered medical care",
                    Icon: FaStethoscope,
                    title: "Patient-Centered Care",
                    desc: "Comprehensive care with compassion, clarity, and personal attention.",
                  },
                  {
                    img: valueImg2,
                    alt: "Medical team collaboration",
                    Icon: FaUsers,
                    title: "Team-Based Approach",
                    desc: "Coordinated support with doctors, nurses, pharmacists, and allied health.",
                  },
                  {
                    img: valueImg3,
                    alt: "Pharmacy and medication support",
                    Icon: FaCapsules,
                    title: "Integrated Pharmacy",
                    desc: "On-site prescription services, counselling, and delivery options.",
                  },
                ].map(({ img, alt, Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <div className="relative h-36 md:h-40 w-full overflow-hidden">
                      <img src={img} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                      <div
                        className="absolute left-4 bottom-4 inline-flex items-center justify-center h-11 w-11 rounded-2xl
                        bg-white/85 backdrop-blur-md border border-brand-gray-light shadow-sm"
                      >
                        <Icon className="text-xl text-brand-primary" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team (moved up right after values) */}
              <section className="bg-white/70 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 md:p-8 shadow-sm">
                {/* Scroll anchor */}
                <div ref={teamRef} />

                <div className="flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-extrabold text-text-primary"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Meet Our Team
                    </h2>
                    <p className="mt-2 text-text-secondary">
                      Friendly professionals dedicated to your care.
                    </p>
                  </div>

                  <Link
                    to="/contactus"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                    bg-white/70 border border-brand-accent/40 text-brand-primary
                    hover:bg-brand-accent-light/60 hover:border-brand-accent transition"
                  >
                    Contact the team
                  </Link>
                </div>

                <div className="mt-6 space-y-6">
                  {team.map((member, idx) => {
                    const reverse = idx % 2 === 1;

                    return (
                      <article
                        key={idx}
                        className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light shadow-sm overflow-hidden hover:shadow-md transition"
                      >
                        <div className={`grid md:grid-cols-5 ${reverse ? "md:[direction:rtl]" : ""}`}>
                          {/* Image */}
                          <div className="md:col-span-2">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="h-64 md:h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Content */}
                          <div className={`md:col-span-3 p-6 md:p-8 ${reverse ? "md:[direction:ltr]" : ""}`}>
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                              <div>
                                <h3 className="text-2xl font-extrabold text-text-primary">
                                  {member.name}
                                </h3>

                                {member.credentials && (
                                  <p className="text-sm text-text-muted mt-1">{member.credentials}</p>
                                )}

                                <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold
                  bg-brand-accent-light/60 border border-brand-accent/30 text-brand-primary">
                                  {member.role}
                                </div>
                              </div>                              
                            </div>

                            <p className="mt-4 text-text-secondary leading-relaxed">
                              {member.bio}
                            </p>

                            {/* Optional: role highlights (nice filler content) */}
                            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                              <div className="rounded-xl bg-white/70 border border-brand-gray-light p-4">
                                <div className="font-semibold text-text-primary">Focus</div>
                                <div className="text-text-secondary mt-1">
                                  Patient care, guidance, and long-term wellness support.
                                </div>
                              </div>
                              <div className="rounded-xl bg-white/70 border border-brand-gray-light p-4">
                                <div className="font-semibold text-text-primary">Approach</div>
                                <div className="text-text-secondary mt-1">
                                  Clear communication and coordinated follow-up.
                                </div>
                              </div>
                            </div>

                            {/* Licenses */}
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
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}