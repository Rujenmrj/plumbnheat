import React from 'react'
import {

  Star,
} from "lucide-react";

import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

const Testimonial = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const reviews = [
    {
      name: "Sarah M.",
      comment:
        "Fantastic service! The team arrived quickly and fixed our heating issue within an hour. Highly recommend!",
      rating: 5,
    },
    {
      name: "David R.",
      comment:
        "Professional, friendly, and affordable. Definitely the best plumbers in Aldershot.",
      rating: 5,
    },
    {
      name: "Priya K.",
      comment:
        "24/7 emergency call truly means 24/7! They came late night when our boiler broke down. Lifesavers.",
      rating: 4,
    },
    {
      name: "Tom B.",
      comment:
        "Super quick, polite, and honest pricing — much cheaper than other quotes we got.",
      rating: 5,
    },
    {
      name: "Emma P.",
      comment:
        "Clean work, great communication, and they left the place spotless after repairs!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-primary-100 mt-15 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center mb-12 text-primary-600 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          What Our 
          <span className="text-[var(--color-secondary-500)] font-bold"> Clients</span> Say
        </h2>

        <div 
          ref={cardsRef}
          className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
              <h4 className="font-semibold text-secondary">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial