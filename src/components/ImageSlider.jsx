import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const sliderRef = useRef(null);

  // Ensure slides is an array and has items
  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  // Calculate the number of slides to show at a time
  const slidesToShow = 1;
  const totalSlides = slides.length;

  // Create an extended array of slides for seamless looping
  const extendedSlides = Array.from({ length: totalSlides * 3 }, (_, i) => slides[i % totalSlides]);

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsAutoScrolling(false); // Pause auto-scroll on manual navigation
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsAutoScrolling(false); // Pause auto-scroll on manual navigation
  };

  // Handle seamless looping
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

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Handle drag/swipe start
  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsAutoScrolling(false); // Pause auto-scroll during drag
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setTranslateX(currentIndex * (100 / slidesToShow));
    sliderRef.current.style.transition = "none";
  };

  // Handle drag/swipe move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - startX;
    const newTranslateX = translateX - (diffX / (sliderRef.current.offsetWidth / slidesToShow)) * 100;
    sliderRef.current.style.transform = `translateX(-${newTranslateX}%)`;
  };

  // Handle drag/swipe end
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    sliderRef.current.style.transition = "transform 500ms ease-in-out";
    const clientX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diffX = clientX - startX;
    const threshold = sliderRef.current.offsetWidth * 0.3; // 30% of slide width to trigger swipe

    if (diffX > threshold) {
      goToPrevious();
    } else if (diffX < -threshold) {
      goToNext();
    } else {
      // Snap back to current slide if swipe distance is too small
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
    }

    // Resume auto-scroll after a delay
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <div className="w-full max-w-md rounded-xl shadow-lg overflow-hidden">
      <div
        className="relative"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Slider Container */}
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
              className="flex-shrink-0 w-full relative"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.alt || `Slide ${(index % totalSlides) + 1}`}
                  className="w-full h-[30rem] sm:h-[34rem] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/70 to-transparent p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white text-center">
                    {slide.title || `Slide ${(index % totalSlides) + 1}`}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation Arrows */}
        {slides.length > slidesToShow && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[var(--color-primary-600)] text-white p-2 rounded-full shadow-md hover:bg-[var(--color-primary-500)] transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[var(--color-primary-600)] text-white p-2 rounded-full shadow-md hover:bg-[var(--color-primary-500)] transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;