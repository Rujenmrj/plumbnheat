// src/pages/construction/ServicesGrid.jsx
import React from "react";

const services = [
  {
    title: "Full Bathroom Renovation",
    desc: "Transform your bathroom with modern designs, quality fixtures, and expert craftsmanship.",
    img: "/images/bathroom-renovation.jpg",
  },
  {
    title: "Plumbing & Heating",
    desc: "All types of plumbing jobs, small or large, emergency repairs 24/7.",
    img: "/images/plumbing.jpg",
  },
  {
    title: "Building Extensions & Refurbishments",
    desc: "Complete property refurbishments, extensions, and home improvement services.",
    img: "/images/construction.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
