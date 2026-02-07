import React, { useState, useEffect } from "react";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/HopeSpringLogo.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical",
    href: "/medical-services",
    icon: <MdMedicalServices className="inline mr-2 text-green-600" />,
    submenu: [
      { label: "Family Practice", href: "/medical-services", desc: "Personalized care for all ages" },
      { label: "Walk-in Clinic", href: "/medical-services", desc: "No appointment? No problem." },
    ],
  },
  {
    label: "Pharmacy",
    href: "/pharmacy-services",
    icon: <MdLocalPharmacy className="inline mr-2 text-green-600" />,
    submenu: [
      { label: "Vaccinations & Immunizations", href: "/pharmacy-services", desc: "Flu shots, travel vaccines & more" },
      { label: "Consultation", href: "/pharmacy-services", desc: "Private consultations & medication reviews" },
      { label: "Prescribing Pharmacist", href: "/pharmacy-services", desc: "Walk-in assessment & prescribing" },
      { label: "Compliance Packaging", href: "/pharmacy-services", desc: "Blister packs to simplify medication use" },
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
  className={`fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolling
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
        href="https://your-form-link.com"
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

  {/* Mobile menu stays same (optional: I can restyle too) */}
</header>
  );
}
