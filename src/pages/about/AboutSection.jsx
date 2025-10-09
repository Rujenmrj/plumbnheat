import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[50vh]">
        {/* Image container */}
        <div className="relative w-full h-full">
          <img
            src="/about/aboutsection.png"
            alt="WE PLUMB N HEAT team at work"
            className="w-full h-full object-cover object-center rounded-none"
          />
          {/* Bluish overlay */}
          <div className="absolute inset-0 bg-[#1d3762]/60" />
        </div>

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
            ABOUT:
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            WE PLUMB N HEAT
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-md sm:max-w-2xl leading-relaxed">
            Trusted Plumbing and Heating Experts You Can Rely On
          </p>
        </div>
      </div>

      {/* ===== WHO WE ARE SECTION ===== */}
      <div className="w-full py-12 px-4 sm:px-6 text-center bg-[#edf1f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-primary-500)] mb-3">
            Who We Are
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[var(--color-secondary-500)] mx-auto mb-5 rounded-full"></div>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed px-1">
            At
            <span className="text-secondary-500 font-medium">
              {" "}
              WE PLUMB N HEAT{" "}
            </span>
            , we’re passionate about keeping homes and businesses safe,
            comfortable, and fully functional. Our skilled team of plumbers,
            heating engineers, and construction professionals brings years of
            experience and a reputation built on reliability, honesty, and
            quality workmanship.
          </p>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mt-4 px-1">
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
