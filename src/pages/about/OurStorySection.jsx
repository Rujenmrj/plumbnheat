import React from "react";
import {useScrollAnimation} from "../../components/hooks/useScrollAnimation"

const OurStorySection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section className="bg-gray-faint w-full h-auto flex items-center">
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 w-full transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-500 mb-6 leading-tight">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-4">
            Founded with the goal of combining technical skill and honest service,
            <span className="text-secondary-500 font-medium"> WE PLUMB N HEAT </span>
            has grown through word-of-mouth and loyal customers who appreciate our attention to detail.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            We believe good workmanship and transparent communication are what truly
            set us apart in the plumbing, heating, and construction industry.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/about/story.jpg"
            alt="image"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;