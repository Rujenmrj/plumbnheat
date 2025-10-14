import React from "react";
import {
  Clock,
  Users,
  ThumbsUp,
  Wrench,
  ShieldCheck,
  Tag,
  Star,
} from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Experienced Professionals",
    desc: "Our team consists of certified and skilled plumbers and tradesmen.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "24/7 Availability",
    desc: "We’re always ready to help — day or night, rain or shine.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    title: "Customer Satisfaction",
    desc: "We prioritize our clients’ comfort and safety above all else.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Guaranteed Work",
    desc: "All our services come with quality assurance and reliability.",
  },
];

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

export default function WhyChooseUs() {
   const [featuresRef, featuresVisible] = useScrollAnimation(0.15);
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.15);
  return (
    <section className="w-full py-16 bg-primary-300/30 mt-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Choose Us */}
        <h2 ref={featuresRef}
          className={`text-3xl font-bold text-center mb-10 text-primary-600 transition-all duration-700 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          Why Choose Us
        </h2>

        {/* Feature cards */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:gap-8 scrollbar-hide">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 md:w-auto bg-white rounded-2xl shadow-md p-6 snap-start hover:shadow-lg transition-all duration-300 border border-primary-100 hover:-translate-y-1"
              style={{
                transitionDelay: featuresVisible ? `${idx * 100}ms` : '0ms',
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <h2 ref={reviewsRef}
          className={`text-3xl font-bold text-center mt-20 mb-10 text-primary-600 transition-all duration-700 ${
            reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          What Our Clients Say
        </h2>

        {/* Review cards */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md p-6 snap-start hover:shadow-lg transition-all duration-300 border border-secondary-200"
              style={{
                transitionDelay: reviewsVisible ? `${index * 150}ms` : '0ms',
                opacity: reviewsVisible ? 1 : 0,
                transform: reviewsVisible ? 'scale(1)' : 'scale(0.9)'
              }}
            >
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">“{review.comment}”</p>
              <h4 className="font-semibold text-secondary">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
