import React from "react";
import GasSafeCertification from "../heating/GasSafeCertification";
import FAQSection from "../../components/FAQSection";
import CateringServices from "./ServicesSection";
import HeroSection from "./HeroSection";
import AccreditationSection from "../home/AccreditationSection"; 

export default function Catering() {
  return (
    <div>
      <HeroSection />
      <CateringServices />
      <AccreditationSection />
      <FAQSection />
    </div>
  );
}
