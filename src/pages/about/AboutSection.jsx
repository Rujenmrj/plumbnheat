import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[70vh]">
        {/* Fixed background image */}
        <div className="absolute inset-0">
          <img
            src="/about/aboutsection.png"
            alt="WE PLUMB N HEAT team at work"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Bluish overlay */}
          <div className="absolute inset-0 bg-[#1d3762]/60" />
        </div>

        {/* Text content over hero */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3"  >
            ABOUT:
          </h2>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-3">
           WE PLUMB N HEAT
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Trusted Plumbing and Heating Experts You Can Rely On
          </p>
        </div>
      </div>

      {/* ===== WHO WE ARE SECTION ===== */}
      <div
        className="w-full py-16 px-6 text-center"
        style={{ backgroundColor: "var(--color-primary-99)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-primary-500)] mb-6">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary-500)] mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-800 text-lg leading-relaxed">
            At WE PLUMB N HEAT, we’re passionate about keeping homes and
            businesses safe, comfortable, and fully functional. Our skilled team
            of plumbers, heating engineers, and construction professionals brings
            years of experience and a reputation built on reliability, honesty,
            and quality workmanship.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            Whether it’s a small repair or a complete installation, we treat
            every project with care and precision — ensuring lasting results and
            genuine customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
