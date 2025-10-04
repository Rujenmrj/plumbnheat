import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Plumbing Repairs",
      description:
        "From leaky taps to burst pipes, our expert plumbers provide fast and reliable repair solutions for your home or business.",
      image: "/home/plumbing.png",
    },
    {
      title: "Heating Solutions",
      description:
        "We install, maintain, and repair heating systems to keep your home warm and comfortable throughout the year.",
      image: "/home/heating.png",
    },
    {
      title: "Construction & Installation",
      description:
        "Professional plumbing and heating installations for new homes, renovations, and commercial properties — done right from the ground up.",
      image: "/home/construction2.png",
    },
  ];

  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-600 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a full range of plumbing and heating services designed to
            meet your needs with professionalism and care.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary-100 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
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
                <button className="text-secondary-500 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
