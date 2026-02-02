import React, { useState, useEffect } from "react";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/hope_spring_logo_2048.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical",
    href: "/medical-services",
    icon: <MdMedicalServices className="inline mr-2 text-yellow-500" />,
    submenu: [
      { label: "Family Practice", href: "/medical-services", desc: "Personalized care for all ages" },
      { label: "Walk-in Clinic", href: "/medical-services", desc: "No appointment? No problem." },
    ],
  },
  {
    label: "Pharmacy",
    href: "/pharmacy-services",
    icon: <MdLocalPharmacy className="inline mr-2 text-yellow-500" />,
    submenu: [
      { label: "Vaccinations & Immunizations", href: "/pharmacy-services", desc: "Flu shots, travel vaccines & more" },
      { label: "Consultation", href: "/pharmacy-services", desc: "Private consultations & medication reviews" },
      { label: "Prescribing Pharmacist", href: "/pharmacy-services", desc: "Walk-in assessment & prescribing" },
      { label: "Compliance Packaging", href: "/pharmacy-services", desc: "Blister packs to simplify medication use" },
    ],
  },
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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex justify-between items-center">
  
        {/* Logo */}
        <Link to="/#home" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Clinic Logo"
            className="h-24 md:h-28 w-auto"
          />
          <div className="leading-tight">
            <div className="text-blue-darkBlue font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
  Medical Clinic
</div>
             
            <div
              className="text-sm text-yellow-600"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-lg">
          {menuItems.map((item, index) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="flex items-center text-blue-darkBlue font-semibold hover:text-yellow-400 transition"
              >
                {item.icon} {item.label}
              </a>

              {item.submenu && (
                <div className="absolute left-0 mt-3 w-[500px] max-h-80 overflow-y-auto bg-white shadow-md border border-blue-200 rounded-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={closeMenu}
                          className="flex items-start p-3 rounded-md hover:bg-yellow-50 transition"
                        >
                          {item.icon}
                          <div className="ml-2">
                            <div className="font-semibold text-blue-darkBlue">{sub.label}</div>
                            <div className="text-sm text-blue-darkBlue/80">{sub.desc}</div>
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
            className="text-blue-darkBlue text-3xl"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 pb-6 pt-3 shadow-md">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex justify-between items-center text-blue-darkBlue text-lg font-semibold hover:text-yellow-400 transition"
                    >
                      <span className="flex items-center">
                        {item.icon}{item.label}
                      </span>
                      <span>{openSubmenuIndex === index ? "-" : "+"}</span>
                    </button>

                    {openSubmenuIndex === index && (
                      <ul className="mt-2 ml-4 space-y-2 bg-white rounded-lg shadow-md p-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={closeMenu}
                              className="text-blue-darkBlue hover:text-yellow-500 text-sm flex items-center p-1 rounded transition"
                            >
                              {item.icon}
                              <span className="ml-2">{sub.label}</span>
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
                    className="block text-yellow-500 text-lg font-semibold hover:text-yellow-400 transition"
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
