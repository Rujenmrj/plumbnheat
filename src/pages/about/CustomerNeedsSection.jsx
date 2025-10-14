import React from "react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

const CustomerNeedsSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section className="bg-primary-100 w-full h-auto flex items-center mb-15">
      <div
        ref={sectionRef}
        className={`max-w-7xl py-20 px-6 mx-auto flex flex-col md:flex-row items-center gap-5 transition-all duration-1000 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex justify-start">
          <img
            src="/about/hand.jpeg"
            alt="handshaking"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Image */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-500)] mb-4">
            Customer Needs Come First
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary-500)] mb-6 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At our core, we’re driven by a simple principle : Our customers come
            first. Every service we provide is guided by a commitment to
            understand and meet your needs.
          </p>
        
        </div>
        
      </div>
    </section>
  );
};

export default CustomerNeedsSection;
