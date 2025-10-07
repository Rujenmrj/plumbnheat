import React from "react";
import AboutSection from "./AboutSection";
import OurStorySection from "./OurStorySection";
import OurValuesSection from "./OurValueSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Testimonial from "./Testimonial";
import ContactUs from "../home/ContactUs";
import Banner from "../../components/Banner";

const About = () => {
  return (
    <div className="bg-[#F6F8FC] text-[#222]">
      <AboutSection />
      <OurStorySection />
      <Banner />
      <OurValuesSection />
      <WhyChooseUsSection />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default About;