import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-primary-100 w-full flex flex-col items-center">
      {/* Top Image as Cover */}
      <div className="w-full">
        <img
          src="/about/aboutsection.png"
          alt="WE PLUMB N HEAT"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Centered Text */}
      <div className="max-w-3xl text-center pt-11 pb-18 px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-500 mb-6 leading-tight">
          About:<br />WE PLUMB N HEAT
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          WE PLUMB N HEAT is a trusted plumbing, heating, and construction service
          provider committed to keeping homes and businesses safe, comfortable,
          and functional. With years of hands-on experience, we take pride in offering
          reliable, high-quality solutions you can count on.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
