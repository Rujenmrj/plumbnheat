import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useScrollAnimation = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
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

export default function ServicesSection() {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const services = [
    {
      title: "Plumbing Repairs",
      description:
        "From leaky taps to burst pipes, our expert plumbers provide fast and reliable repair solutions for your home or business.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      link: "/services/plumbing",
    },
    {
      title: "Heating Solutions",
      description:
        "We install, maintain, and repair heating systems to keep your home warm and comfortable throughout the year.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
      link: "/services/heating",
    },
    {
      title: "Construction & Installation",
      description:
        "Professional plumbing and heating installations for new homes, renovations, and commercial properties — done right from the ground up.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      link: "/services/construction",
    },
    {
      title: "Professional Catering",
      description:
        "Professional plumbing and heating installations for new homes, renovations, and commercial properties — done right from the ground up.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      link: "/services/catering",
    },
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="bg-white w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-primary-600 mb-4">
            Our Services
          </h2>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <a
                    href={service.link}
                    className="block bg-primary-100 rounded-xl shadow-md"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary-600 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary-600"
                    : "w-2 bg-gray-400 hover:bg-gray-500"
                } h-2 rounded-full`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid gap-4 md:grid-cols-4">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="block bg-primary-100 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
