import Banner from "../../components/Banner.jsx";
import FAQSection from "../../components/FAQSection.jsx";
import AboutConstruction from "./AboutConstruction";
import CoverageArea from "./AreasWeCover.jsx";
import CTASection from "./CTASection";
import HeroConstruction from "./HeroConstruction";
import ServicePromise from "./ServicePromise";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";

export default function ConstructionPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroConstruction />
      <AboutConstruction />
      <CoverageArea />
      <ServicesGrid />
      {/* <ServicePromise /> */}
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
