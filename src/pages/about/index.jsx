import React from "react";
import AboutSection from "./AboutSection";
import OurStorySection from "./OurStorySection";
import OurValuesSection from "./OurValueSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Testimonial from "./Testimonial";
import ContactUs from "../home/ContactUs";
import Banner from "../../components/Banner";
import FAQSection from "../../components/FAQSection"
import CustomerNeedsSection from "./CustomerNeedsSection";
import AccreditationSection from "../home/AccreditationSection";

const About = () => {
  return (
    <div className="bg-[#ffffff] text-[#222]">
      <AboutSection />
      <OurStorySection />
      <CustomerNeedsSection />
      <Banner />
      <OurValuesSection />
      <WhyChooseUsSection />
      <AccreditationSection />
      <Testimonial />
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default About;