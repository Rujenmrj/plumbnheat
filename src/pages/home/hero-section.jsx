import React from "react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation"; 

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="bg-primary-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div ref={ref} className={`flex-1 text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-600 mb-6 leading-tight">
            Reliable Plumbing & Heating Solutions
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Professional plumbing, heating, and maintenance services you can
            trust — serving homes and businesses with excellence and care.
          </p>

          {/* Emergency call button */}
          <button className="bg-secondary-500 hover:bg-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition">
            Emergency Call: <span className="font-bold">+977 980-XXXXXXX</span>
          </button>

          {/* Stats section */}
          <div className="mt-10 flex justify-center md:justify-start gap-8 text-primary-600">
            {[
              { num: '1200+', label: 'Happy Customers', delay: 200 },
              { num: '10+', label: 'Years Experience', delay: 400 },
              { num: '24/7', label: 'Service', delay: 600 }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center transition-all duration-700"
                style={{
                  transitionDelay: isVisible ? `${stat.delay}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <h3 className="text-3xl font-bold">{stat.num}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>


        </div>

        {/* Right Side - Image */}
        <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
          <img
            src="/home/repair-man-hero.png"
            alt="Plumber at work"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
