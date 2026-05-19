import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaUserMd,
  FaStethoscope,
  FaNotesMedical,
  FaPills,
  FaFilePrescription,
  FaPlaneDeparture,
  FaHome,
  FaTruck,
  FaFileInvoice,
  FaSearch,
  FaClock,
  FaQuestionCircle,
  FaCheckCircle,
} from "react-icons/fa";

const PHARMACY_SERVICES = [
  {
    title: "Vaccinations & Immunizations",
    desc: "Flu, shingles, pneumonia, and travel vaccines.",
    searchText: "flu shingles pneumonia vaccine vaccination immunization travel",
    icon: <FaSyringe />,
    details:
      "Stay protected with pharmacist-supported vaccinations and immunizations. Availability may vary by eligibility and vaccine supply.",
  },
  {
    title: "Injection Services",
    desc: "Medication injection support from the pharmacy team.",
    searchText: "injection injectable medication administration",
    icon: <FaPrescriptionBottleAlt />,
    details:
      "We can help administer many injectable medications safely and conveniently. Contact us to confirm medication eligibility.",
  },
  {
    title: "Consultation",
    desc: "Medication reviews and pharmacist advice.",
    searchText: "consultation medication review pharmacist advice counselling",
    icon: <FaUserMd />,
    details:
      "Speak privately with our pharmacy team about your medications, side effects, interactions, and safe use.",
  },
  {
    title: "Prescribing Pharmacist",
    desc: "Assessment and prescribing support for eligible minor conditions.",
    searchText: "prescribing pharmacist minor conditions cold sores UTI assessment",
    icon: <FaStethoscope />,
    details:
      "Our prescribing pharmacist can assess eligible minor conditions and provide guidance or prescriptions when appropriate.",
  },
  {
    title: "OAT Support",
    desc: "Discreet and supportive pharmacy care.",
    searchText: "OAT opioid agonist treatment supervised dosing support",
    icon: <FaNotesMedical />,
    details:
      "We provide respectful, confidential, and supportive pharmacy care for patients receiving opioid agonist treatment.",
  },
  {
    title: "Compounding",
    desc: "Customized medication options for unique patient needs.",
    searchText: "compounding custom medication allergies children dermatology hormone",
    icon: <FaPills />,
    details:
      "Custom medication preparation may be available for allergies, children’s dosing, dermatology, and other specialized needs.",
  },
  {
    title: "Compliance Packaging",
    desc: "Medication packaging organized by day and time.",
    searchText: "compliance packaging blister pack pill pack medication organizer",
    icon: <FaFilePrescription />,
    details:
      "Blister packaging can help simplify daily medication routines and improve medication adherence.",
  },
  {
    title: "Travel Health Services",
    desc: "Travel consults, vaccines, and medication guidance.",
    searchText: "travel health travel vaccine consultation abroad prescriptions",
    icon: <FaPlaneDeparture />,
    details:
      "Prepare for travel with vaccine guidance, medication planning, and destination-specific pharmacy support.",
  },
  {
    title: "Home Care Supplies",
    desc: "Medical supplies and home care support.",
    searchText: "home care supplies wound care mobility incontinence medical equipment",
    icon: <FaHome />,
    details:
      "We can assist with home care supplies such as wound care products, mobility aids, incontinence products, and other medical essentials.",
  },
  {
    title: "Free Local Delivery",
    desc: "Convenient prescription delivery across the local area.",
    searchText: "free delivery prescription delivery local delivery medication delivery",
    icon: <FaTruck />,
    details:
      "Ask us about local prescription delivery options to make medication access easier and more convenient.",
  },
  {
    title: "Uninsured Services",
    desc: "Private-pay pharmacy services when not publicly covered.",
    searchText: "uninsured private pay pharmacy service fee not covered",
    icon: <FaFileInvoice />,
    details:
      "Some pharmacy services may not be covered by public plans. We’ll explain any fees clearly before service.",
  },
];

export default function PharmacyServicesPage() {
  const [query, setQuery] = useState("");
  const [openTitle, setOpenTitle] = useState(PHARMACY_SERVICES[0]?.title ?? "");
  const serviceRefs = useRef({});

  const searchedServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PHARMACY_SERVICES;

    return PHARMACY_SERVICES.filter((s) =>
      [s.title, s.desc, s.details, s.searchText]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const hasResults = searchedServices.length > 0;
  const servicesToShow = hasQuery && !hasResults ? PHARMACY_SERVICES : searchedServices;

  useEffect(() => {
    if (!hasQuery) {
      setOpenTitle(PHARMACY_SERVICES[0]?.title ?? "");
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
    <main
      id="pharmacy"
      className="min-h-screen bg-gradient-to-br from-white via-brand-primary-light/25 to-brand-accent-light/35 text-text-primary overflow-hidden"
    >
      <section className="relative pt-12 pb-12">
        <div className="absolute -top-28 -right-28 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-28 w-80 h-80 bg-yellow-100/80 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <FaPrescriptionBottleAlt className="text-lg" />
            Pharmacy Services
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-text-primary"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pharmacy care made simple
          </h1>

          <p className="mt-4 max-w-3xl text-text-secondary text-lg leading-relaxed">
            From prescriptions and vaccinations to consultations, travel health,
            medication packaging, and delivery support — our pharmacy team is here
            to make everyday care easier.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center">
            <div className="relative">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary" />
              <input
                id="pharmacySearch"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pharmacy services — vaccines, delivery, compounding..."
                className="w-full rounded-2xl pl-12 pr-5 py-4 bg-white border border-brand-gray-light
                text-text-primary placeholder:text-text-muted shadow-sm
                focus:outline-none focus:ring-4 focus:ring-brand-primary-light/60 focus:border-brand-primary-light"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-brand-primary text-white shadow-[0_8px_20px_rgba(0,64,44,0.20)]
                hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <FaNotesMedical />
                Ask Pharmacist
              </Link>

              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-200
                text-brand-primary shadow-sm cursor-not-allowed opacity-90"
                title="Microsoft Form coming soon"
              >
                <FaFilePrescription />
                Transfer Prescription
                <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full bg-white border border-yellow-200">
                  Soon
                </span>
              </button>
            </div>
          </div>

          {hasQuery && !hasResults && (
            <div className="mt-5 rounded-2xl bg-white border border-yellow-200 p-4 shadow-sm text-text-secondary">
              <strong className="text-text-primary">No matching pharmacy service found.</strong>{" "}
              Showing all pharmacy services below.
            </div>
          )}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-5">
              <InfoCard icon={<FaClock />} title="Pharmacy Hours">
                <ul className="space-y-1 text-sm">
                  <li>Mon – Fri: 9:00 AM – 5:00 PM</li>
                  <li>Saturday: Closed</li>
                  <li>Sunday: Closed</li>
                </ul>

                <div className="mt-4 rounded-xl bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-100 p-4">
                  <div className="font-semibold text-text-primary">Need medication support?</div>
                  <p className="text-sm text-text-secondary mt-1">
                    Call ahead for availability, vaccine eligibility, or delivery questions.
                  </p>
                </div>
              </InfoCard>

              <InfoCard icon={<FaTruck />} title="Convenience">
                <ul className="space-y-2 text-sm">
                  <li>✓ Free local delivery options</li>
                  <li>✓ Medication packaging support</li>
                  <li>✓ Prescription and refill guidance</li>
                  <li>✓ Friendly pharmacy team</li>
                </ul>
              </InfoCard>

              <InfoCard icon={<FaQuestionCircle />} title="Frequently Asked">
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-text-primary">Can I transfer my prescription?</div>
                    <p>Yes — online transfer form is coming soon. For now, please contact us directly.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Do you offer vaccines?</div>
                    <p>Yes, select vaccinations may be available based on eligibility and supply.</p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={<FaCheckCircle />} title="Why Choose HopeSpring?">
                <ul className="space-y-2 text-sm">
                  <li>✓ Clinic and pharmacy in one place</li>
                  <li>✓ Personalized medication support</li>
                  <li>✓ Convenient access to care</li>
                  <li>✓ Compassionate, community-focused service</li>
                </ul>
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
                    ${
                      isOpen
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
                        <div className="flex items-center justify-center min-w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary text-xl group-hover:rotate-6 group-hover:scale-105 transition-all">
                          {s.icon}
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
                        ${
                          isOpen
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
                            className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                            bg-brand-primary text-white hover:bg-brand-primary-dark transition"
                          >
                            Ask about this service
                          </Link>

                          <Link
                            to="/contactus"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold
                            bg-white border border-brand-accent/40 text-brand-primary
                            hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50
                            hover:border-yellow-200 transition"
                          >
                            Pharmacy hours & location
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
  );
}

function InfoCard({ icon, title, children }) {
  return (
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
  );
}