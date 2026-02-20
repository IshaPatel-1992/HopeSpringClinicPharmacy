import React, { useState, useEffect } from "react";
import { MdMedicalServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/HopeSpringLogo.png";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Medical Clinic",
    href: "/medical-services",
    icon: <MdMedicalServices className="inline mr-2 text-brand-primary" />,
    submenu: [
      { label: "Family Practice", href: "/medical-services", desc: "Comprehensive care for patients of all ages." },
      { label: "Walk-in Clinic", href: "/medical-services", desc: "No appointment needed for urgent concerns." },
      { label: "Pap Smear / Pap Test", href: "/medical-services", desc: "Cervical cancer screening and prevention." },
      { label: "Chronic & Minor Illness Care", href: "/medical-services", desc: "Diabetes, asthma, hypertension, and more." },
      { label: "Routine Physical Exams", href: "/medical-services", desc: "Annual check-ups and preventive screenings." },
      { label: "Women’s Health", href: "/medical-services", desc: "Personalized care at every life stage." },
      { label: "Pregnancy Testing & Prenatal Care", href: "/medical-services", desc: "Confidential testing with early prenatal guidance." },
      { label: "Minor Injury Treatment", href: "/medical-services", desc: "Care for cuts, sprains, and minor injuries." },
      { label: "Medical Notes & Forms", href: "/medical-services", desc: "School, work, and medical documentation." },
      { label: "Health Education", href: "/medical-services", desc: "Prevention, wellness, and lifestyle guidance." },
      { label: "Uninsured Services", href: "/medical-services", desc: "Private-pay and IFHP options available." },
    ],
  },
];

{ /* { label: "About Us", href: "/aboutuspg" },
  { label: "Contact Us", href: "/contactus" }, */ }

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) =>
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenuIndex(null);
  };

  const desktopLinkClass = ({ isActive }) =>
    `flex items-center font-semibold transition relative
     ${isActive ? "text-brand-primary" : "text-text-secondary hover:text-brand-primary"}
     after:absolute after:-bottom-2 after:left-0 after:h-[2px]
     after:bg-brand-accent after:transition-all after:duration-200
     ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center text-lg font-semibold transition
     ${isActive ? "text-brand-primary" : "text-text-primary hover:text-brand-primary"}`;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolling
        ? "bg-white/85 backdrop-blur-md border-b border-brand-gray-light shadow-sm"
        : "bg-brand-neutral-light/70 backdrop-blur-sm border-b border-transparent"
        }`}
    >



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex justify-between items-center">
        {/* Logo */}
        <Link to="/#home" className="flex items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Clinic Logo"
            className="h-14 md:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[17px]">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {/* Top-level link */}
              <NavLink to={item.href} className={desktopLinkClass} end>
                {item.icon}
                {item.label}
              </NavLink>

              {/* Dropdown (separate from NavLink) */}
              {item.submenu && (
                <div
                  className="absolute left-0 mt-3 w-[520px] max-h-80 overflow-y-auto
                  bg-white/95 shadow-xl border border-brand-gray-light rounded-2xl
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200 z-50 backdrop-blur-md"
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <NavLink
                          to={sub.href}
                          onClick={closeMenu}
                          className="flex items-start p-3 rounded-xl hover:bg-brand-accent-light/60 transition"
                        >
                          <span className="mt-1 text-brand-primary">{item.icon}</span>
                          <div className="ml-2">
                            <div className="font-semibold text-text-primary">{sub.label}</div>
                            <div className="text-sm text-text-muted">{sub.desc}</div>
                          </div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <a
            href="https://forms.office.com/r/4fAD4KnT5y"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-base font-semibold
            bg-brand-primary text-white
            shadow-[0_8px_20px_rgba(93,122,137,0.22)]
            hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.32)]
            transition"
          >
            New Patient Registration
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-primary text-3xl hover:text-brand-primary transition"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md px-6 pb-6 pt-4 shadow-md border-t border-brand-gray-light">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center text-text-primary text-lg font-semibold hover:text-brand-primary transition"
                    >
                      <span className="flex items-center">
                        {item.icon}
                        {item.label}
                      </span>
                      <span className="text-2xl leading-none text-text-muted">
                        {openSubmenuIndex === index ? "–" : "+"}
                      </span>
                    </button>

                    {openSubmenuIndex === index && (
                      <ul className="mt-3 ml-3 space-y-2 bg-brand-accent-light/50 rounded-xl border border-brand-gray-light p-3">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <NavLink
                              to={sub.href}
                              onClick={closeMenu}
                              className="block rounded-lg p-2 hover:bg-white/70 transition"
                            >
                              <div className="text-text-primary font-semibold text-sm">
                                {sub.label}
                              </div>
                              <div className="text-text-muted text-xs">
                                {sub.desc}
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to={item.href} onClick={closeMenu} className={mobileLinkClass} end>
                    {item.icon}
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}

            <li className="pt-2">
              <a
                href="https://forms.office.com/r/4fAD4KnT5y"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-base font-semibold
                bg-brand-primary text-white
                shadow-[0_8px_20px_rgba(93,122,137,0.22)]
                hover:bg-brand-primary-dark hover:shadow-[0_10px_25px_rgba(93,122,137,0.32)]
                transition"
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