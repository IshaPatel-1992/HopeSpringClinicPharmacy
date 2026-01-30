import React, { useState, useEffect } from "react";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/hope_spring_logo_2048.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical",
    href: "",
    icon: <MdMedicalServices className="inline mr-2 text-yellow" />,
    submenu: [
      { label: "Family Practice", href: "", desc: "Personalized care for all ages" },
      { label: "Walk-in Clinic", href: "", desc: "No appointment? No problem." },
    ],
  },
  {
    label: "Pharmacy",
    href: "",
    icon: <MdLocalPharmacy className="inline mr-2 text-yellow" />,
    submenu: [
      { label: "Vaccinations & Immunizations", href: "", desc: "Flu shots, travel vaccines & more" },
      { label: "Consultation", href: "", desc: "Private consultations & medication reviews" },
      { label: "Prescribing Pharmacist", href: "", desc: "Walk-in assessment & prescribing" },
      { label: "Compliance Packaging", href: "", desc: "Blister packs to simplify medication use" },
    ],
  },
  { label: "About Us", href: "" },
  { label: "Contact Us", href: "" },
];

export default function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  const closeMenu = () => { setMenuOpen(false); setOpenSubmenuIndex(null); };

  return (
    <header
      className={`fixed top-0 w-full h-24 z-50 transition-all duration-300
      ${scrolling ? "bg-dark shadow-lg" : "bg-dark/90 backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link to="/#home" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Hope Spring Medical Clinic Logo"
            className="h-16 md:h-20 w-auto rounded-xl border-2 border-teal-dark shadow-sm"
          />
          <div className="leading-tight">
            <div className="text-base md:text-lg text-teal-light font-semibold font-space">
              Medical Clinic
            </div>
            <div className="text-xs md:text-sm text-yellow-light font-raleway">
              & Pharmacy
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm md:text-base">
          {menuItems.map((item, index) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-teal-light hover:text-yellow font-medium transition"
              >
                {item.icon} {item.label}
              </a>

              {item.submenu && (
                <div className="absolute left-0 mt-2 w-[420px] max-h-72 overflow-y-auto
                  bg-dark-soft border border-teal-dark/30 rounded-xl shadow-xl
                  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block p-2 rounded-lg hover:bg-teal-dark/20 transition"
                        >
                          <div className="font-medium text-teal-light">
                            {sub.label}
                          </div>
                          <div className="text-xs text-teal-light/70">
                            {sub.desc}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-teal-light hover:text-yellow transition"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-soft border-t border-teal-dark/30 px-4 pb-4 pt-3 shadow-lg text-sm">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center text-teal-light font-medium hover:text-yellow"
                    >
                      <span className="flex items-center">
                        {item.icon}{item.label}
                      </span>
                      <span>{openSubmenuIndex === index ? "−" : "+"}</span>
                    </button>

                    {openSubmenuIndex === index && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={closeMenu}
                              className="block text-teal-light/80 hover:text-yellow text-sm"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-teal-light font-medium hover:text-yellow"
                  >
                    {item.icon}{item.label}
                  </a>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
