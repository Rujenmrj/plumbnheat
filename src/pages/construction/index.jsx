import FAQSection from "../../components/FAQSection.jsx";
import AboutConstruction from "./AboutConstruction";
import HeroConstruction from "./HeroConstruction";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";

export default function ConstructionPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroConstruction />
      <AboutConstruction />
      {/* <CoverageArea /> */}
      <ServicesGrid />
      {/* <ServicePromise /> */}
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
