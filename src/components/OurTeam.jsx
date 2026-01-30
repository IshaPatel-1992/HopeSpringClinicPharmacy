import React from "react";
import { FaUserMd, FaHandsHelping } from "react-icons/fa";

const team = [
  {
    name: "Dr. Curtis Thompson MD, CCFP, DIPG[FM]",
    role: "Doctor",
    icon: <FaUserMd className="text-3xl text-teal-600 mb-2" />,
  },
  {
    name: "Mehulkumar Jadav",
    role: "Pharmacy Manager",
    icon: <FaHandsHelping className="text-3xl text-teal-600 mb-2" />,
    license: "Practice Permit No. #14106", // Practice Permit Number
    license: "Pharmacy License #4657", // License Number
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50 px-6 text-center" data-aos="fade-up">
      <div className="inline-block mb-10 relative">
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {team.map((member, idx) => (
         <div
            key={idx}
            className="w-64 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            {member.icon}
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {member.license && (
              <p className="text-sm text-gray-500 mt-1 italic">{member.license}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
