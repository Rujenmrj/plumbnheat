import React from "react";
import AboutSection from "./AboutSection";
import OurStorySection from "./OurStorySection";
import OurValuesSection from "./OurValueSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

const About = () => {
  return (
    <div className="bg-[#F6F8FC] text-[#222]">
      <AboutSection />
      <OurStorySection />
      <OurValuesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default About;