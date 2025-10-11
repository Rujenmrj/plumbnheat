import FAQSection from "../../components/FAQSection";
import GasSafeCertification from "../heating/GasSafeCertification";
import EmergencyPlumbing from "./EmergencyPlumbing";
import HeroSection from "./HeroSection";
import PlumbingServices from "./PlumbingServices";

export default function Plumbing() {
  return (
    <>
      <HeroSection />
      <GasSafeCertification />
      <PlumbingServices />
      <EmergencyPlumbing />
      <FAQSection />
    </>
  );
}
