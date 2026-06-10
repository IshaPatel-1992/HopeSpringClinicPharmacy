import React from "react";

import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>    
     {/* ✅ SEO Tags */}
      <SEO
        title="HopeSpring Medical Clinic & Pharmacy | Calgary"
        description="HopeSpring Medical Clinic & Pharmacy in Calgary offers family practice, walk-in care, pharmacy services, vaccinations, medication reviews, compounding, and prescription support."
        path="/"
      />
      <Hero />
    </>
  );
}
