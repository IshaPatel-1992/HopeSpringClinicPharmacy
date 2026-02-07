import React, { useState, useEffect } from "react";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/HopeSpringLogo.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical Clinic",
    href: "/medical-services",
    icon: <MdMedicalServices className="inline mr-2 text-green-600" />,
    submenu: [
      {
        label: "Family Practice",
        href: "/medical-services",
        desc: "Comprehensive care for patients of all ages.",
      },
      {
        label: "Walk-in Clinic",
        href: "/medical-services",
        desc: "No appointment needed for urgent concerns.",
      },
      {
        label: "Pap Smear / Pap Test",
        href: "/medical-services",
        desc: "Cervical cancer screening and prevention.",
      },
      {
        label: "Chronic & Minor Illness Care",
        href: "/medical-services",
        desc: "Diabetes, asthma, hypertension, and more.",
      },
      {
        label: "Routine Physical Exams",
        href: "/medical-services",
        desc: "Annual check-ups and preventive screenings.",
      },
      {
        label: "Women’s Health",
        href: "/medical-services",
        desc: "Personalized care at every life stage.",
      },
      {
        label: "Pregnancy Testing & Prenatal Care",
        href: "/medical-services",
        desc: "Confidential testing with early prenatal guidance.",
      },
      {
        label: "Minor Injury Treatment",
        href: "/medical-services",
        desc: "Care for cuts, sprains, and minor injuries.",
      },
      {
        label: "Medical Notes & Forms",
        href: "/medical-services",
        desc: "School, work, and medical documentation.",
      },
      {
        label: "Health Education",
        href: "/medical-services",
        desc: "Prevention, wellness, and lifestyle guidance.",
      },
      {
        label: "Uninsured Services",
        href: "/medical-services",
        desc: "Private-pay and IFHP options available.",
      },
    ],

  },
  { label: "About Us", href: "/aboutuspg" },
  { label: "Contact Us", href: "/contactus" },
];

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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolling
        ? "bg-white/90 shadow-md backdrop-blur-md"
        : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex justify-between items-center">
        {/* Logo */}
        <Link to="/#home" className="flex items-center">
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
              <a
                href={item.href}
                className="flex items-center text-green-900 font-semibold hover:text-green-600 transition"
              >
                {item.icon} {item.label}
              </a>

              {item.submenu && (
                <div className="absolute left-0 mt-3 w-[520px] max-h-80 overflow-y-auto bg-white shadow-xl border border-green-100 rounded-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={closeMenu}
                          className="flex items-start p-3 rounded-xl hover:bg-green-50 transition"
                        >
                          {item.icon}
                          <div className="ml-2">
                            <div className="font-semibold text-green-900">{sub.label}</div>
                            <div className="text-sm text-green-800/70">{sub.desc}</div>
                          </div>
                        </a>
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
  className="ml-2 inline-flex items-center justify-center bg-green-700 text-white px-5 py-2.5 rounded-xl text-base font-semibold hover:bg-yellow-400 hover:text-green-900 transition shadow-sm"
>
  New Patient Registration
</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-900 text-3xl"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md px-6 pb-6 pt-4 shadow-md border-t border-green-100">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center text-green-900 text-lg font-semibold hover:text-green-600 transition"
                    >
                      <span className="flex items-center">
                        {item.icon}
                        {item.label}
                      </span>
                      <span className="text-2xl leading-none">
                        {openSubmenuIndex === index ? "–" : "+"}
                      </span>
                    </button>

                    {openSubmenuIndex === index && (
                      <ul className="mt-3 ml-3 space-y-2 bg-green-50/60 rounded-xl border border-green-100 p-3">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={closeMenu}
                              className="block rounded-lg p-2 hover:bg-green-100 transition"
                            >
                              <div className="text-green-900 font-semibold text-sm">
                                {sub.label}
                              </div>
                              <div className="text-green-800/70 text-xs">
                                {sub.desc}
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center text-green-900 text-lg font-semibold hover:text-green-600 transition"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )}
              </li>
            ))}

            {/* CTA Button */}
            <li className="pt-2">
              <a
  href="https://forms.office.com/r/4fAD4KnT5y"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 inline-flex items-center justify-center bg-green-700 text-white px-5 py-2.5 rounded-xl text-base font-semibold hover:bg-yellow-400 hover:text-green-900 transition shadow-sm"
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
