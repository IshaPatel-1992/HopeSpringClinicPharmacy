import React from "react";

import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>    
     {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>HopeSpring Medical Clinic & Pharmacy | Accepting New Patients</title>

        <meta
          name="description"
          content="Welcome to HopeSpring Medical Clinic & Pharmacy. Your trusted partner for health and wellness, offering family practice, walk-in clinic, pharmacy services, immunizations, telemedicine, OAT, compounding, and home delivery."
        />

        <meta
          name="keywords"
          content="HopeSpring Medical Clinic, Pharmacy, Walk-in Clinic, Family Practice, Health, Wellness, Medication, Prescription, OAT, Compounding, Vaccination & Immunizations, Spanish Speaking Physician, Travel Health Services, Blister Packaging, Medication Reviews, Telemedicine, Home Delivery, IFHP Services, Minor Illness Treatment"
        />

        {/* <link rel="canonical" href="https://greenwichhealth.ca" /> */}
      </Helmet>  
      <Hero />
    </>
  );
}
