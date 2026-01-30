import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUserPlus, FaCapsules, FaSyringe, FaClinicMedical } from "react-icons/fa";

// Common input styles
const inputStyle =
  "border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full";
const submitButton =
  "bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full md:w-auto";

export default function ClinicForms() {
  const [activeTab, setActiveTab] = useState("registration");
  const transferFormRef = useRef();

  const sendEmail = (formRef, templateID, successMsg) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert(successMsg);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
      localStorage.removeItem("activeTab");
      const element = document.getElementById(storedTab);
      if (element)
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 250);
    }

    const onOpenTab = (e) => {
      if (!e?.detail) return;
      const tab = e.detail;
      setActiveTab(tab);
      const element = document.getElementById(tab);
      if (element)
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 150);
    };

    window.addEventListener("openTab", onOpenTab);
    return () => window.removeEventListener("openTab", onOpenTab);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          <TabButton
            icon={<FaUserPlus className="mr-2" />}
            label="Patient Registration"
            isActive={activeTab === "registration"}
            onClick={() => setActiveTab("registration")}
          />
          { /* <TabButton
            icon={<FaClinicMedical className="mr-2" />}
            label="Book Appointment (Existing Patients)"
            isActive={activeTab === "emr"}
            onClick={() => setActiveTab("emr")}
          /> */ } 

          <a
  href="https://greenwichmedicalclinic.inputhealth.com/"
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center px-5 py-2 rounded-full transition font-medium shadow-sm bg-gray-100 text-teal-700 hover:bg-gray-200`}
>
  <FaClinicMedical className="mr-2" />
  Book Appointment (Existing Patients)
</a>

          <TabButton
            icon={<FaCapsules className="mr-2" />}
            label="Transfer Prescription"
            isActive={activeTab === "transfer"}
            onClick={() => setActiveTab("transfer")}
          />          
          { /* <TabButton
            icon={<FaSyringe className="mr-2" />}
            label="Vaccination Form"
            isActive={activeTab === "vaccination"}
            onClick={() => setActiveTab("vaccination")}
          /> */ }
        </div>

        {/* Form Panels */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {/* Patient Registration */}
          {activeTab === "registration" && (
            <div id="registration">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Patient Registration
              </h2>
              <div className="w-full h-[600px]">
                <iframe
                  title="Registration Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=ZdlrskVmiU6QDTni28A9UknxdGhB-I5Nu8x_qVls8HVUMjRJQ1QySTNOUk9MT1BBR0tMNkU5QzNHTy4u&embed=true"
                  frameBorder="0"
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Transfer Prescription */}
          {activeTab === "transfer" && (
            <div id="transfer">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Transfer Prescription
              </h2>
              <div className="w-full h-[600px]">
                <iframe
                  title="Transfer Prescription Form"
                  src="https://forms.office.com/pages/responsepage.aspx?id=ZdlrskVmiU6QDTni28A9Umr8WlRr-UVBuK8cFel99Z9UN0k5MUhETUZFMExZR1pWTVdRWjM3NTQ1SC4u&embed=true"
                  width="100%"
                  height="100%"
                  style={{ border: "none", maxWidth: "100%", maxHeight: "100%" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* EMR Booking */}
{activeTab === "emr" && (
  <div id="emr">
    <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
      Book Appointment (EMR)
    </h2>
    <div className="w-full h-[600px]">
      <a
  href="https://greenwichmedicalclinic.inputhealth.com/"
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center px-5 py-2 rounded-full transition font-medium shadow-sm bg-gray-100 text-teal-700 hover:bg-gray-200`}
>
  <FaClinicMedical className="mr-2" />
  Book Appointment (Existing Patients)
</a>

    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
}

function TabButton({ label, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md
        ${
          isActive
            ? "bg-teal-600 text-white scale-105 shadow-lg"
            : "bg-gray-100 text-teal-700 hover:bg-teal-100 hover:scale-105"
        }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

