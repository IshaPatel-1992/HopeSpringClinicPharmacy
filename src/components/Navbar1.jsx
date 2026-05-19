import React, { useState, useEffect } from "react";
import { MdMedicalServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaPrescriptionBottleAlt,
  FaFilePrescription,
} from "react-icons/fa";
import logo from "../assets/logo/HopeSpringLogo.png";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Clinic Services",
    href: "/medical-services",
    icon: <MdMedicalServices />,
    submenu: [
      { label: "Family Practice", href: "/medical-services", desc: "Comprehensive care for patients of all ages." },
      { label: "Walk-in Clinic", href: "/medical-services", desc: "No appointment needed for urgent concerns." },
      { label: "Pap Smear / Pap Test", href: "/medical-services", desc: "Cervical cancer screening and prevention." },
      { label: "Chronic & Minor Illness Care", href: "/medical-services", desc: "Diabetes, asthma, hypertension, and more." },
      { label: "Routine Physical Exams", href: "/medical-services", desc: "Annual check-ups and preventive screenings." },
      { label: "Women’s Health", href: "/medical-services", desc: "Personalized care at every life stage." },
      { label: "Pregnancy Testing & Prenatal Care", href: "/medical-services", desc: "Confidential testing with early prenatal guidance." },
      { label: "Minor Injury Treatment", href: "/medical-services", desc: "Care for cuts, sprains, and minor injuries." },
      { label: "Health Education", href: "/medical-services", desc: "Prevention, wellness, and lifestyle guidance." },
      { label: "Uninsured Services", href: "/medical-services", desc: "Private-pay visits, medical notes, and documentation services." },
      { label: "Out-of-Province & Out-of-Country Services", href: "/medical-services", desc: "Medical visits and physicals for patients without Alberta coverage." },
    ],
  },
  {
    label: "Pharmacy Services",
    href: "/pharmacy-services",
    icon: <FaPrescriptionBottleAlt />,
    submenu: [
      { label: "Vaccinations", href: "/pharmacy-services", desc: "Flu, shingles, pneumonia, and travel vaccines." },
      { label: "Injection Services", href: "/pharmacy-services", desc: "Injectable medication administration." },
      { label: "Consultation", href: "/pharmacy-services", desc: "Medication reviews and pharmacist advice." },
      { label: "Compounding", href: "/pharmacy-services", desc: "Customized medications and formulations." },
      { label: "Travel Health", href: "/pharmacy-services", desc: "Travel consults and immunizations." },
      { label: "Free Local Delivery", href: "/pharmacy-services", desc: "Convenient prescription delivery across Calgary." },
      {
        label: "Transfer Prescription",
        href: "#",
        desc: "Microsoft Form coming soon.",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Transfer Prescription",
    href: "#",
    icon: <FaFilePrescription />,
    comingSoon: true,
    mobileOnly: true,
  },
  { label: "About Us", href: "/aboutuspg" },
  { label: "Contact Us", href: "/contactus" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenuIndex(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const topLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-xl font-semibold transition-all duration-300
    ${
      isActive
        ? "text-brand-primary bg-gradient-to-r from-yellow-100 via-green-50 to-sky-50"
        : "text-text-secondary hover:text-brand-primary hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50"
    }`;

  const submenuCardClass =
    "group/item relative flex items-start gap-3 p-4 rounded-2xl border border-transparent bg-white hover:border-yellow-200 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 overflow-hidden";

  const comingSoonCardClass =
    "relative flex items-start gap-3 p-4 rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 shadow-sm cursor-default overflow-hidden";

  const mobileComingSoonClass =
    "flex items-center justify-between px-4 py-3 rounded-xl text-text-primary text-lg font-semibold bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 border border-yellow-200 shadow-sm";

  const renderSubmenuItem = (item, sub, iconSize = "min-w-10 h-10") => {
    if (sub.comingSoon) {
      return (
        <div className={comingSoonCardClass}>
          <span
            className={`flex items-center justify-center ${iconSize} rounded-xl bg-white text-brand-primary border border-yellow-200`}
          >
            <FaFilePrescription />
          </span>

          <div>
            <div className="font-semibold text-text-primary">
              {sub.label}
              <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-yellow-200 text-brand-primary">
                Soon
              </span>
            </div>
            <div className="text-sm text-text-muted leading-snug">
              {sub.desc}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 rounded-full" />
        </div>
      );
    }

    return (
      <NavLink to={sub.href} onClick={closeMenu} className={submenuCardClass}>
        <span
          className={`flex items-center justify-center ${iconSize} rounded-xl bg-gradient-to-br from-yellow-100 via-green-100 to-sky-100 text-brand-primary group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}
        >
          {item.icon}
        </span>

        <div>
          <div className="font-semibold text-text-primary group-hover/item:text-brand-primary transition">
            {sub.label}
          </div>
          <div className="text-sm text-text-muted leading-snug">
            {sub.desc}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 group-hover/item:w-full transition-all duration-300 rounded-full" />
      </NavLink>
    );
  };

  const renderMobileMainItem = (item) => {
    if (item.comingSoon) {
      return (
        <div className={mobileComingSoonClass}>
          <div className="flex items-center gap-2">
            <span className="text-brand-primary text-lg">{item.icon}</span>
            {item.label}
          </div>

          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-yellow-200 text-brand-primary">
            Soon
          </span>
        </div>
      );
    }

    return (
      <NavLink
        to={item.href}
        onClick={closeMenu}
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300
          ${
            isActive
              ? "text-brand-primary bg-gradient-to-r from-yellow-100 via-green-50 to-sky-50 border border-yellow-200"
              : "text-text-primary bg-white border border-brand-gray-light hover:text-brand-primary hover:bg-gradient-to-r hover:from-yellow-50 hover:via-green-50 hover:to-sky-50"
          }`
        }
        end
      >
        {item.icon && <span className="text-brand-primary">{item.icon}</span>}
        {item.label}
      </NavLink>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b transition-all duration-300 ${
        scrolling
          ? "border-brand-gray-light shadow-md"
          : "border-brand-accent-light shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex justify-between items-center">
        <Link to="/#home" onClick={closeMenu} className="flex items-center">
          <img
            src={logo}
            alt="HopeSpring Medical Clinic & Pharmacy Logo"
            className="h-14 md:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 text-[16px]">
          {menuItems
            .filter((item) => !item.mobileOnly)
            .map((item) => (
              <div key={item.label} className="relative group">
                <NavLink to={item.href} className={topLinkClass} end>
                  {item.icon && (
                    <span className="text-brand-primary text-lg">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </NavLink>

                {item.submenu && (
                  <div className="absolute left-0 mt-4 w-[560px] max-h-[420px] overflow-y-auto bg-white shadow-2xl border border-brand-gray-light rounded-2xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div className="h-1.5 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 rounded-t-2xl" />

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          {renderSubmenuItem(item, sub, "min-w-10 h-10")}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

          <a
            href="https://forms.office.com/r/4fAD4KnT5y"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold bg-brand-primary text-white border border-brand-primary shadow-[0_8px_20px_rgba(0,64,44,0.18)] hover:bg-brand-primary-dark hover:border-brand-primary-dark hover:shadow-[0_10px_25px_rgba(0,64,44,0.28)] transition"
          >
            New Patient Registration
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-brand-primary text-3xl hover:text-brand-accent transition"
          aria-label="Open Menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white px-4 sm:px-6 pb-6 pt-4 shadow-lg border-t border-brand-gray-light max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="h-1.5 bg-gradient-to-r from-yellow-300 via-green-500 to-sky-400 rounded-full mb-4" />

          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-text-primary text-lg font-semibold bg-gradient-to-r from-yellow-50 via-green-50 to-sky-50 hover:text-brand-primary border border-brand-gray-light transition"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-brand-primary">
                          {item.icon}
                        </span>
                        {item.label}
                      </span>

                      <span className="text-2xl leading-none text-brand-primary">
                        {openSubmenuIndex === index ? "–" : "+"}
                      </span>
                    </button>

                    {openSubmenuIndex === index && (
                      <ul className="mt-3 space-y-2 bg-gradient-to-br from-white via-brand-primary-light/20 to-brand-accent-light/40 rounded-2xl border border-brand-gray-light p-3">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            {renderSubmenuItem(item, sub, "min-w-9 h-9")}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  renderMobileMainItem(item)
                )}
              </li>
            ))}

            <li className="pt-3">
              <a
                href="https://forms.office.com/r/4fAD4KnT5y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold bg-brand-primary text-white shadow-[0_8px_20px_rgba(0,64,44,0.18)] hover:bg-brand-primary-dark transition"
              >
                New Patient Registration
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}