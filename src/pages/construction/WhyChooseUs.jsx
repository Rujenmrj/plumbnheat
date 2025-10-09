// src/pages/construction/WhyChooseUs.jsx
import React from "react";
import { Users, Clock, ThumbsUp, Tag, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Experienced Professionals",
    desc: "Certified plumbers and builders with years of experience.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "24/7 Availability",
    desc: "Emergency services any time, day or night.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    title: "Customer Satisfaction",
    desc: "Our clients are our top priority.",
  },
  {
    icon: <Tag className="w-8 h-8 text-primary" />,
    title: "Cheapest Rates in Aldershot",
    desc: "Competitive pricing without compromising quality.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Guaranteed Work",
    desc: "All services come with quality assurance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-primary-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Why Choose Us
        </h2>
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 md:w-auto bg-white rounded-2xl shadow-md p-6 snap-start hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
