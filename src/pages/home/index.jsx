import Banner from "../../components/Banner";
import FAQSection from "../../components/FAQSection";
import AccreditationSection from "./AccreditationSection";
import ContactUs from "./ContactUs";
import HeroSection from "./hero-section";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Banner />
      <AccreditationSection />
      <WhyChooseUs />
      <ContactUs />
      <FAQSection />
      {/* You can add more sections below later, like <ServicesPreview /> or <Testimonials /> */}
    </div>
  );
}
