import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMedicalServices } from "react-icons/md";
import { FaPhoneAlt, FaNotesMedical } from "react-icons/fa";

const SERVICES = [
  {
    title: "Family Practice",
    desc: "Comprehensive care for patients of all ages — from children to seniors.",
    details:
      "Ongoing primary care, referrals as needed, prevention and health management with a focus on long-term wellness.",
  },
  {
    title: "Walk-in Clinic",
    desc: "Same-day care for urgent concerns — no appointment needed.",
    details:
      "Support for infections, minor injuries, fever, rashes, pain, and other non-emergency medical issues.",
  },
  {
    title: "Pap Smear / Pap Test",
    desc: "Cervical cancer screening and prevention.",
    details:
      "Routine screening, guidance and follow-up support based on results and clinical recommendations.",
  },
  {
    title: "Chronic & Minor Illness Care",
    desc: "Monitoring and treatment plans, medication review, lifestyle guidance, and continuity of care.",
    details: (
      <div className="text-text-secondary leading-relaxed space-y-3">
        {/* Optional: a soft note line (remove if you want only 1 paragraph) */}
        <p className="text-sm text-text-muted">
          If you’re unsure what you need, contact us and we’ll guide you to the right care.
        </p>

        <p>
          We support chronic and minor illness care including diabetes management, hypertension (high blood pressure),
          high cholesterol & heart risk monitoring, asthma & COPD, thyroid disorders, arthritis & chronic pain support,
          mental health follow-ups, and medication renewals with ongoing reviews — and more.
        </p>
      </div>
    )
  },
  {
    title: "Routine Physical Exams",
    desc: "Annual check-ups and preventive screenings.",
    details:
      "Health assessments, screening recommendations, and wellness planning tailored to your needs.",
  },
  {
    title: "Women’s Health",
    desc: "Personalized care at every life stage.",
    details:
      "Preventive care, counselling, screening, and support for common women’s health concerns.",
  },
  {
    title: "Pregnancy Testing & Prenatal Care",
    desc: "Confidential testing with early prenatal guidance.",
    details:
      "Testing, counselling, and prenatal care planning depending on your situation and goals.",
  },
  {
    title: "Minor Injury Treatment",
    desc: "Care for cuts, sprains, and minor injuries.",
    details:
      "Assessment, treatment and follow-up guidance for common non-emergency injuries.",
  },
  {
    title: "Health Education",
    desc: "Prevention, wellness, and lifestyle guidance.",
    details:
      "Support for better health decisions, prevention, and long-term wellbeing.",
  },
  {
    title: "Uninsured Services",
    desc: "Private-pay consultations and medical documentation.",
    details: (
      <div className="space-y-5">
        <div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-text-secondary">
            <li>Uninsured Consultations</li>
            <li>Medical Notes</li>
            <li>Medical Forms</li>
            <li>Miscellaneous Forms / Reports</li>
            <li>School / Work Forms</li>
          </ul>
        </div>
      </div>)
  },
  {
    title: "Out-of-Province & Out-of-Country Services",
    desc: "Medical visits and physicals for patients without Alberta coverage.",
    details: (
      <div className="text-text-secondary leading-relaxed space-y-3">
        <p>
          We provide private-pay medical services for patients visiting from outside Alberta or Canada.
        </p>

        <p>
          Services may include out-of-province office visits, out-of-province complete physicals,
          out-of-country office visits, and out-of-country complete physicals.
        </p>

        <p className="text-sm text-text-muted">
          These services are not covered by provincial health insurance.
          Fees will be discussed prior to your visit.
        </p>
      </div>
    ),
  },

];

export default function MedicalServices() {
  const [query, setQuery] = useState("");
  const [openTitle, setOpenTitle] = useState(SERVICES[0]?.title ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.details.toLowerCase().includes(q)
    );
  }, [query]);

  // Keep accordion state consistent when searching
  useEffect(() => {
    if (!filtered.length) return;
    const stillExists = filtered.some((s) => s.title === openTitle);
    if (!stillExists) setOpenTitle(filtered[0].title);
  }, [filtered, openTitle]);

  const toggle = (title) => setOpenTitle((prev) => (prev === title ? "" : title));

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-brand-primary-light/30 to-brand-accent-light/30">
      {/* Header */}
      <section className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-gray-light text-brand-primary font-semibold shadow-sm">
            <MdMedicalServices className="text-lg" />
            Medical Services
          </div>

          <h1
            className="mt-6 text-3xl md:text-5xl font-extrabold text-text-primary"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Care for your health — today and long-term
          </h1>

          <p className="mt-4 max-w-2xl text-text-secondary text-lg">
            Explore clinic services below. If you’re unsure which service you need,
            contact us — we’ll guide you to the right care.
          </p>

          {/* Search + CTAs */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <label className="sr-only" htmlFor="serviceSearch">
                Search services
              </label>
              <input
                id="serviceSearch"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services (e.g., walk-in, physical, women’s health)…"
                className="w-full rounded-2xl px-5 py-3 bg-white/80 backdrop-blur-md
                border border-brand-gray-light text-text-primary placeholder:text-text-muted
                focus:outline-none focus:ring-4 focus:ring-brand-primary-light/60"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
    bg-brand-primary text-white
    shadow-[0_8px_20px_rgba(93,122,137,0.22)]
    hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.32)]
    transition"
              >
                <FaNotesMedical />
                Book / Ask
              </Link>

              <a
                href="https://forms.office.com/r/4fAD4KnT5y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold
    bg-white/75 backdrop-blur-md border border-brand-accent/40 text-brand-primary
    hover:bg-brand-accent-light/60 hover:border-brand-accent hover:shadow-sm transition"
              >
                New Patient Registration
              </a>

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

      {/* Services List */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Sidebar (sticky) */}
            <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-6">
              {/* What to bring */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h2
                  className="text-xl font-bold text-text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  What to bring
                </h2>
                <ul className="mt-4 space-y-2 text-text-secondary">
                  <li>• Government ID and health card (if applicable)</li>
                  <li>• Current medications list</li>
                  <li>• Relevant documents or test results</li>
                </ul>

                {/* Replaces duplicated walk-in message */}
                <div className="mt-6 rounded-xl bg-white/70 border border-brand-gray-light p-4">
                  <div className="font-semibold text-text-primary">Before you arrive</div>
                  <p className="text-sm text-text-secondary mt-1">
                    If you’re a new patient, arrive 10 minutes early. Bring a brief list of symptoms and any recent lab results.
                  </p>
                </div>
              </div>

              {/* Clinic Hours (keep walk-in message here) */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">
                  Clinic Hours
                </h3>

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

                <div className="mt-4 text-sm text-text-secondary">
                  📞 <a href="tel:+18259624673" className="text-brand-primary font-medium hover:underline">
                    (825) 962-4673
                  </a>
                  <br />
                  ✉ <a href="mailto:info@hopespringmedical.ca" className="text-brand-primary font-medium hover:underline">
                    info@hopespringmedical.ca
                  </a>
                </div>
              </div>

              {/* FAQ (moved above Why Choose) */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Frequently Asked</h3>

                <div className="mt-3 space-y-3 text-sm text-text-secondary">
                  <div>
                    <div className="font-semibold text-text-primary">Do I need an appointment?</div>
                    <p>Walk-ins are welcome for non-emergency concerns. Appointments may be available for some services.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Do you accept uninsured patients?</div>
                    <p>Yes — private-pay options are available, and we’ll explain pricing clearly before any uninsured service.</p>
                  </div>
                </div>
              </div>

              {/* Why Choose */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary">Why Choose HopeSpring?</h3>

                <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                  <li>✓ Experienced providers</li>
                  <li>✓ Modern, welcoming clinic</li>
                  <li>✓ Walk-in availability</li>
                  <li>✓ Compassionate care</li>
                </ul>
              </div>
            </aside>

            {/* Right: Accordion */}
            <div className="lg:col-span-2 space-y-4">
              {filtered.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light p-6 shadow-sm">
                  <div className="text-text-primary font-semibold">No matching services.</div>
                  <p className="text-text-secondary mt-2">
                    Try a different keyword, or contact us for guidance.
                  </p>
                </div>
              ) : (
                filtered.map((s) => {
                  const isOpen = openTitle === s.title;
                  return (
                    <div
                      key={s.title}
                      className="bg-white/80 backdrop-blur-md rounded-2xl border border-brand-gray-light shadow-sm transition hover:shadow-md"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(s.title)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      >
                        <div>
                          <div className="text-lg font-semibold text-text-primary">
                            {s.title}
                          </div>
                          <div className="text-sm text-text-secondary mt-1">
                            {s.desc}
                          </div>
                        </div>

                        <span
                          className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full
                          border border-brand-gray-light text-text-muted
                          ${isOpen ? "bg-brand-accent-light/60 text-text-primary" : "bg-white/60"}`}
                        >
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div className="h-px bg-brand-gray-light/60 mb-4" />
                          <p className="text-text-secondary leading-relaxed">{s.details}</p>

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
                              bg-white/70 border border-brand-accent/40 text-brand-primary
                              hover:bg-brand-accent-light/60 hover:border-brand-accent transition"
                            >
                              Clinic hours & location
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}