import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdMedicalServices } from "react-icons/md";
import {
  FaPhoneAlt,
  FaNotesMedical,
  FaSearch,
  FaUserMd,
  FaIdCard,
  FaClock,
  FaQuestionCircle,
  FaCheckCircle,
  FaClinicMedical,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHeartbeat,
} from "react-icons/fa";

import SEO from "../components/SEO";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const SERVICES = [
  {
    title: "Family Practice",
    desc: "Comprehensive care for patients of all ages — from children to seniors.",
    searchText: "family doctor primary care children seniors referrals prevention wellness",
    details:
      "Ongoing primary care, referrals as needed, prevention and health management with a focus on long-term wellness.",
  },
  {
    title: "Walk-in Clinic",
    desc: "Same-day care for urgent concerns — no appointment needed.",
    searchText: "walk in same day urgent infections fever rash pain minor injury",
    details:
      "Support for infections, minor injuries, fever, rashes, pain, and other non-emergency medical issues.",
  },
  {
    title: "Pap Smear / Pap Test",
    desc: "Cervical cancer screening and prevention.",
    searchText: "pap smear pap test cervical cancer screening women health",
    details:
      "Routine screening, guidance, and follow-up support based on results and clinical recommendations.",
  },
  {
    title: "Chronic & Minor Illness Care",
    desc: "Monitoring and treatment plans, medication review, lifestyle guidance, and continuity of care.",
    searchText:
      "diabetes hypertension high blood pressure cholesterol asthma COPD thyroid arthritis chronic pain mental health medication renewals minor illness",
    details: (
      <div className="space-y-3">
        <p>
          We support chronic and minor illness care including diabetes management,
          hypertension, high cholesterol, asthma, COPD, thyroid concerns,
          arthritis, chronic pain support, mental health follow-ups, and
          medication renewals.
        </p>
        <p className="text-sm text-text-muted">
          If you’re unsure what you need, contact us and we’ll guide you to the right care.
        </p>
      </div>
    ),
  },
  {
    title: "Routine Physical Exams",
    desc: "Annual check-ups and preventive screenings.",
    searchText: "physical exam annual checkup preventive screening wellness",
    details:
      "Health assessments, screening recommendations, and wellness planning tailored to your needs.",
  },
  {
    title: "Strep Throat Testing",
    desc: "Rapid assessment and testing for suspected strep throat infections.",
    searchText:
      "strep throat testing sore throat rapid strep test throat infection fever swollen tonsils",
    details:
      "We provide assessment and testing for suspected strep throat. If appropriate, treatment options and follow-up recommendations will be discussed based on your symptoms and test results.",
  },
  {
    title: "Women’s Health",
    desc: "Personalized care at every life stage.",
    searchText: "women health female health counselling screening prevention",
    details:
      "Preventive care, counselling, screening, and support for common women’s health concerns.",
  },
  {
    title: "Pregnancy Testing & Prenatal Care",
    desc: "Confidential testing with early prenatal guidance.",
    searchText: "pregnancy test prenatal care maternity early pregnancy guidance",
    details:
      "Testing, counselling, and prenatal care planning depending on your situation and goals.",
  },
  {
    title: "Minor Injury Treatment",
    desc: "Care for cuts, sprains, and minor injuries.",
    searchText: "minor injury cuts sprains wounds non emergency injury treatment",
    details:
      "Assessment, treatment, and follow-up guidance for common non-emergency injuries.",
  },
  {
    title: "Health Education",
    desc: "Prevention, wellness, and lifestyle guidance.",
    searchText: "health education wellness prevention lifestyle guidance",
    details:
      "Support for better health decisions, prevention, and long-term wellbeing.",
  },
  {
    title: "Uninsured Services",
    desc: "Private-pay consultations and medical documentation.",
    searchText:
      "uninsured consultations medical notes forms reports school forms work forms private pay documentation",
    details: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Uninsured consultations</li>
        <li>Medical notes</li>
        <li>Medical forms</li>
        <li>Miscellaneous forms / reports</li>
        <li>School / work forms</li>
      </ul>
    ),
  },
  {
    title: "Out-of-Province & Out-of-Country Services",
    desc: "Medical visits and physicals for patients without Alberta coverage.",
    searchText:
      "out of province out of country private pay medical visits physicals no Alberta coverage",
    details: (
      <div className="space-y-3">
        <p>
          We provide private-pay medical services for patients visiting from outside Alberta or Canada.
        </p>
        <p>
          Services may include office visits and complete physicals for out-of-province or out-of-country patients.
        </p>
        <p className="text-sm text-text-muted">
          These services are not covered by provincial health insurance. Fees will be discussed before your visit.
        </p>
      </div>
    ),
  },
];

export default function MedicalServices() {
  const [query, setQuery] = useState("");
  const [openTitle, setOpenTitle] = useState(SERVICES[0]?.title ?? "");
  const serviceRefs = useRef({});

  const searchedServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;

    return SERVICES.filter((s) => {
      const searchableText = [
        s.title,
        s.desc,
        typeof s.details === "string" ? s.details : "",
        s.searchText || "",
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(q);
    });
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const hasResults = searchedServices.length > 0;
  const servicesToShow = hasQuery && !hasResults ? SERVICES : searchedServices;

  useEffect(() => {
    if (!hasQuery) {
      setOpenTitle(SERVICES[0]?.title ?? "");
      return;
    }

    if (!hasResults) {
      setOpenTitle("");
      return;
    }

    const firstMatch = searchedServices[0];
    setOpenTitle(firstMatch.title);

    const timer = setTimeout(() => {
      serviceRefs.current[firstMatch.title]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [query, hasQuery, hasResults, searchedServices]);

  const toggle = (title) => {
    setOpenTitle((prev) => (prev === title ? "" : title));
  };

  return (
    <>
      <SEO
        title="Medical Clinic Services in Calgary | HopeSpring Medical Clinic"
        description="Explore HopeSpring Medical Clinic services including family practice, walk-in care, physical exams, women’s health, strep throat testing, minor illness care, and uninsured medical services."
        path="/medical-services"
      />


      <main className="min-h-screen bg-gradient-to-br from-white via-brand-primary-light/25 to-brand-accent-light/35 text-text-primary overflow-hidden">
        <section className="relative pt-12 pb-12">
          <div className="absolute -top-28 -right-28 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-28 w-80 h-80 bg-yellow-100/80 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
              <MdMedicalServices className="text-lg" />
              Clinic Services
            </div>

            <h1
              className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-text-primary"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Care for Your Health — Today and Long-Term
            </h1>

            <p className="mt-4 max-w-3xl text-text-secondary text-lg leading-relaxed">
              Explore our clinic services, from walk-in care and family practice to preventive health,
              physical exams, women’s health, and private-pay medical services.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center">
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary" />
                <input
                  id="serviceSearch"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services — walk-in, physical, women’s health..."
                  className="w-full rounded-2xl pl-12 pr-5 py-4 bg-white border border-brand-gray-light
                text-text-primary placeholder:text-text-muted shadow-sm
                focus:outline-none focus:ring-4 focus:ring-brand-primary-light/60 focus:border-brand-primary-light"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contactus"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-brand-primary text-white shadow-[0_8px_20px_rgba(0,64,44,0.20)]
                hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                  <FaNotesMedical />
                  Book / Ask
                </Link>

                <a
                  href="tel:+15875342506"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-white border border-brand-accent/40 text-brand-primary
                hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50
                hover:border-yellow-200 hover:shadow-sm transition"
                >
                  <FaPhoneAlt className="text-brand-accent" />
                  587-534-2506
                </a>
              </div>
            </div>

            {hasQuery && !hasResults && (
              <div className="mt-5 rounded-2xl bg-white border border-yellow-200 p-4 shadow-sm text-text-secondary">
                <strong className="text-text-primary">No matching service found.</strong>{" "}
                Showing all clinic services below.
              </div>
            )}
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-5">
                <InfoCard icon={<FaIdCard />} title="What to Bring">
                  <ul className="space-y-2">
                    <li>• Government ID and health card, if applicable</li>
                    <li>• Current medications list</li>
                    <li>• Relevant documents or test results</li>
                  </ul>
                </InfoCard>

                <InfoCard icon={<FaClock />} title="Clinic Hours">
                  <ul className="space-y-1 text-sm">
                    <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                    <li>Saturday: 10:00 AM – 2:00 PM</li>
                    <li>Sunday & Holidays: Closed</li>
                  </ul>

                  <div className="mt-4 rounded-xl bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-100 p-4">
                    <div className="font-semibold text-text-primary">Walk-ins welcome</div>
                    <p className="text-sm text-text-secondary mt-1">
                      Walk-ins are accepted during clinic hours based on provider availability.
                    </p>
                  </div>
                </InfoCard>

                <InfoCard icon={<FaQuestionCircle />} title="Frequently Asked">
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-text-primary">Do I need an appointment?</div>
                      <p>Walk-ins are welcome for non-emergency concerns, subject to availability.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">Do you accept uninsured patients?</div>
                      <p>Yes, private-pay options are available for uninsured services.</p>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard icon={<FaCheckCircle />} title="Why Choose HopeSpring?">
                  <ul className="space-y-2 text-sm">
                    <li>✓ Experienced healthcare providers</li>
                    <li>✓ Modern, welcoming clinic environment</li>
                    <li>✓ Walk-in and family care support</li>
                    <li>✓ Clinic and pharmacy in one location</li>
                  </ul>
                </InfoCard>

                <InfoCard icon={<FaClinicMedical />} title="Clinic Information">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100
                      border border-brand-gray-light shadow-sm"
                      >
                        <FaUserMd className="text-4xl text-brand-primary" />
                      </div>

                      <div>
                        <div className="font-bold text-text-primary">
                          HopeSpring Medical Clinic
                        </div>
                        <div className="text-text-secondary">
                          Family Practice & Walk-In Care
                        </div>
                        <div className="text-text-muted">
                          Patient-focused medical support
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <FaPhoneAlt className="mt-1 text-brand-primary" />
                        <span>
                          <strong>Clinic Phone:</strong>{" "}
                          <a
                            href="tel:+15875342506"
                            className="text-brand-primary font-semibold hover:underline"
                          >
                            587-534-2506
                          </a>
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <FaEnvelope className="mt-1 text-brand-primary" />
                        <span>
                          <strong>Email:</strong>{" "}
                          <a
                            href="mailto:info@hopespringmedical.ca"
                            className="text-brand-primary font-semibold hover:underline"
                          >
                            info@hopespringmedical.ca
                          </a>
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 text-brand-primary" />
                        <span>
                          <strong>Address:</strong> 2130-151 Skyview Bay NE,
                          Calgary, AB T3N 2K3
                        </span>
                      </p>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-100 p-4 text-text-secondary leading-relaxed">
                      Our clinic provides family practice, walk-in care,
                      preventive health support, medical forms, physical exams,
                      women’s health services, and private-pay medical services
                      in a welcoming community setting.
                    </div>

                    <Link
                      to="/contactus"
                      onClick={scrollToTop}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold bg-brand-primary text-white hover:bg-brand-primary-dark transition"
                    >
                      <FaNotesMedical />
                      Contact Clinic
                    </Link>
                  </div>
                </InfoCard>
              </aside>

              <div className="lg:col-span-2 space-y-4">
                {servicesToShow.map((s) => {
                  const isOpen = openTitle === s.title;

                  return (
                    <div
                      key={s.title}
                      ref={(el) => {
                        serviceRefs.current[s.title] = el;
                      }}
                      className={`group bg-white rounded-2xl border shadow-sm
                    hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden scroll-mt-36
                    ${isOpen
                          ? "border-brand-primary/40 ring-4 ring-brand-primary-light/30"
                          : "border-brand-gray-light"
                        }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(s.title)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      >
                        <div className="flex gap-4">
                          <div className="hidden sm:flex items-center justify-center min-w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary text-xl group-hover:rotate-6 group-hover:scale-105 transition-all">
                            <FaUserMd />
                          </div>

                          <div>
                            <div className="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition">
                              {s.title}
                            </div>
                            <div className="text-sm text-text-secondary mt-1 leading-relaxed">
                              {s.desc}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`mt-1 inline-flex h-9 min-w-9 items-center justify-center rounded-full border transition
                        ${isOpen
                              ? "bg-brand-primary text-white border-brand-primary"
                              : "bg-white text-brand-primary border-brand-gray-light"
                            }`}
                        >
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div className="h-px bg-gradient-to-r from-yellow-200 via-green-300 to-sky-200 mb-4" />

                          <div className="text-text-secondary leading-relaxed">
                            {s.details}
                          </div>

                          <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                              to="/contactus"
                              onClick={scrollToTop}
                              className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                            bg-brand-primary text-white hover:bg-brand-primary-dark transition"
                            >
                              Ask about this service
                            </Link>

                            <Link
                              to="/contactus"
                              onClick={scrollToTop}
                              className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                            bg-white border border-brand-accent/40 text-brand-primary
                            hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50
                            hover:border-yellow-200 transition"
                            >
                              Clinic hours & location
                            </Link>
                          </div>
                        </div>
                      )}

                      <div className="h-1 w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 group-hover:w-full transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <>
    <SEO
  title="Medical Clinic Services in Calgary | HopeSpring Medical Clinic"
  description="Family practice, walk-in care, physical exams, women’s health, chronic disease management, and preventive healthcare in Calgary."
  path="/medical-services"
/>
    <div
      className="group bg-white rounded-2xl border border-brand-gray-light p-6 shadow-sm
      hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
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
    </>
  );
}
