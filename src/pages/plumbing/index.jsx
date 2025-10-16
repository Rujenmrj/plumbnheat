import FAQSection from "../../components/FAQSection";
import EmergencyPlumbing from "./EmergencyPlumbing";
import HeroSection from "./HeroSection";
import PlumbingServices from "./PlumbingServices";
import AccreditationSection from "../home/AccreditationSection";

export default function Plumbing() {
  return (
    <>
      <HeroSection />
      <PlumbingServices />
      <EmergencyPlumbing />
      <FAQSection />
    </>
  );
}
