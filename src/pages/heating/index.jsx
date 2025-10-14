import FAQSection from "../../components/FAQSection";
import HeatingServices from "./HeatingServices";
import HeroSection from "./HeroSection";
import AccreditationSection from "../home/AccreditationSection"

export default function Heating() {
  return (
    <div>
      <HeroSection />
      <AccreditationSection />
      <HeatingServices />
      <FAQSection />
    </div>
  );
}
