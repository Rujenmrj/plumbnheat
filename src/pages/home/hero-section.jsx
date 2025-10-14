import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, goToNext]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[16/10] min-h-[200px] max-h-[500px] overflow-hidden bg-gray-200">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-full z-0"
            }`}
          >
            <a href={slide.link} className="block w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/70 hover:bg-white/90"
            } h-2 rounded-full shadow-md`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    link: "/services/construction",
    title: "Construction Services",
    alt: "Construction worker",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop",
    link: "/services/plumbing",
    title: "Plumbing Solutions",
    alt: "Plumbing technician",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop",
    link: "/services/heating",
    title: "Heating Services",
    alt: "Heating worker",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673830185789-0c4c165c71e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1193",
    link: "/services/catering",
    title: "Professional Catering",
    alt: "Catering service",
  },
];

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="bg-primary-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
            <ImageSlider slides={slides} />
          </div>
        </div>

        <div
          ref={ref}
          className={`flex-1 text-center md:text-left transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Reliable Plumbing & Heating Solutions
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Professional plumbing, heating, and maintenance services you can
            trust — serving homes and businesses with excellence and care.
          </p>

          <button className="bg-secondary-500 hover:bg-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition hover:cursor-pointer">
            Emergency Call: <span className="font-bold">+977 980-XXXXXXX</span>
          </button>

          <div className="mt-10 flex justify-center md:justify-start gap-8 text-primary-700">
            {[
              { num: "1200+", label: "Happy Customers", delay: 200 },
              { num: "10+", label: "Years Experience", delay: 400 },
              { num: "24/7", label: "Service", delay: 600 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center transition-all duration-700"
                style={{
                  transitionDelay: isVisible ? `${stat.delay}ms` : "0ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <h3 className="text-3xl font-bold">{stat.num}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
