import React from "react";

const team = [
  {
    name: "Dr. Jane Doe",
    credentials: "MD, CCFP",
    role: "Family Physician",
    photo: "https://via.placeholder.com/150", // Replace with real image URL
    bio: "Providing patient-centered care with over 10 years of experience in family medicine.",
  },
  {
    name: "John Smith",
    role: "Pharmacy Manager",
    photo: "https://via.placeholder.com/150", // Replace with real image URL
    bio: "Ensuring safe and effective medication management for our patients.",
    licenses: [
      "Practice Permit No. ####",
      "Pharmacy License ####",
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 px-6 text-center bg-green-50">
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
  );
}
