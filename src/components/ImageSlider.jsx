import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  const slidesToShow = 3;
  const totalSlides = slides.length;

  const extendedSlides = Array.from({ length: totalSlides * 3 }, (_, i) => slides[i % totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= totalSlides * 2) {
        setCurrentIndex(currentIndex - totalSlides);
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(-${(currentIndex - totalSlides) * (100 / slidesToShow)}%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 500ms ease-in-out";
        }, 0);
      } else if (currentIndex < totalSlides) {
        setCurrentIndex(currentIndex + totalSlides);
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(-${(currentIndex + totalSlides) * (100 / slidesToShow)}%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 500ms ease-in-out";
        }, 0);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, totalSlides, slidesToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[var(--color-gray-faint)] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {extendedSlides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className="flex-shrink-0 w-full md:w-1/3 px-2"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="bg-[var(--primary-300)] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                  <img
                    src={slide.image}
                    alt={slide.alt || `Slide ${(index % totalSlides) + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-[var(--color-primary-600)]">
                      {slide.title || `Slide ${(index % totalSlides) + 1}`}
                    </h3>
                    <p className="text-[var(--color-gray-500)] mt-2">
                      {slide.description || "Click to learn more"}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {slides.length > slidesToShow && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[var(--color-primary-600)] text-white p-2 rounded-full shadow-md hover:bg-[var(--color-primary-500)] transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[var(--color-primary-600)] text-white p-2 rounded-full shadow-md hover:bg-[var(--color-primary-500)] transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;