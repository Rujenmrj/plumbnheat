import Banner from "../../components/Banner";
import ContactUs from "./ContactUs";
import HeroSection from "./hero-section";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  return (
    <div className="pb-10">
      <HeroSection />
      <ServicesSection />
      <Banner />
      <WhyChooseUs />
      <ContactUs />
      {/* You can add more sections below later, like <ServicesPreview /> or <Testimonials /> */}
    </div>
  );
}
