import React, { useRef } from "react";
import { FaStethoscope, FaCapsules, FaUsers } from "react-icons/fa6";

const team = [
  {
    name: "Dr. Jane Doe",
    credentials: "MD, CCFP",
    role: "Family Physician",
    photo: "https://via.placeholder.com/150",
    bio: "Providing patient-centered care with over 10 years of experience in family medicine.",
  },
  {
    name: "John Smith",
    role: "Pharmacy Manager",
    photo: "https://via.placeholder.com/150",
    bio: "Ensuring safe and effective medication management for our patients.",
    licenses: [
      "Practice Permit No. ####",
      "Pharmacy License ####",
    ],
  },
];

export default function AboutUs() {
  const teamRef = useRef(null);

  const handleShowTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="scroll-mt-28 pt-24 bg-gradient-to-br from-green-100 to-green-50 text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 font-space mb-4">
          About HopeSpring
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-raleway max-w-3xl mx-auto mb-6">
          Compassionate, coordinated healthcare — supporting you and your family at every stage of life.
        </p>
        <button
          onClick={handleShowTeam}
          className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md"
        >
          Meet Our Team
        </button>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white/50 backdrop-blur-md rounded-2xl p-7 text-center hover:scale-105 transition duration-300">
            <FaStethoscope className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-space">Patient-Centered Care</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Comprehensive care with compassion and personal attention.
            </p>
          </div>
          <div className="group bg-white/50 backdrop-blur-md rounded-2xl p-7 text-center hover:scale-105 transition duration-300">
            <FaUsers className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-space">Team-Based Approach</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coordinated care with doctors, nurses, pharmacists, and dietitians.
            </p>
          </div>
          <div className="group bg-white/50 backdrop-blur-md rounded-2xl p-7 text-center hover:scale-105 transition duration-300">
            <FaCapsules className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-space">Integrated Pharmacy</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              On-site pharmacy with prescription services, counseling, and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Initially Hidden) */}
      <section
        ref={teamRef}
        className="py-20 px-6 text-center transform transition-all duration-700 opacity-100"
      >
        <h2 className="text-3xl font-extrabold text-green-700 font-space mb-12">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Profile Photo */}
              <div className="w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                {member.credentials && (
                  <p className="text-sm text-gray-500 mb-1">{member.credentials}</p>
                )}
                <p className="text-green-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.bio}</p>

                {/* Licenses */}
                {member.licenses && (
                  <ul className="text-xs text-gray-400 italic list-disc list-inside mt-2">
                    {member.licenses.map((lic, i) => (
                      <li key={i}>{lic}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
