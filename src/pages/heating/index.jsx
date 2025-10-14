import FAQSection from "../../components/FAQSection";
import GasSafeCertification from "./GasSafeCertification";
import HeatingServices from "./HeatingServices";
import HeroSection from "./HeroSection";

export default function Heating() {
  return (
    <div>
      <HeroSection />
      
      <HeatingServices />
      <FAQSection />
    </div>
  );
}
