import {
  Flame,
  Thermometer,
  Droplets,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  TrendingDown,
} from "lucide-react";
import { useScrollAnimation} from "../../components/hooks/useScrollAnimation"

export default function HeatingServices() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Boiler Installation",
      description:
        "Expert installation of new boilers from leading brands. Energy-efficient models with extended warranties and professional fitting.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      features: [
        "All major brands",
        "10-year warranty",
        "Finance available",
        "Same-day installation",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Boiler Repairs",
      description:
        "Fast and reliable boiler repairs with same-day service. Qualified engineers fix all makes and models with genuine parts.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      features: [
        "Same-day service",
        "All makes & models",
        "12-month guarantee",
        "Upfront pricing",
      ],
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Boiler Servicing",
      description:
        "Annual boiler servicing to keep your system running efficiently and safely. Maintain warranty and reduce breakdowns.",
      color: "bg-secondary-600",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      features: [
        "Annual check-up",
        "Safety inspection",
        "Efficiency test",
        "Gas Safe certified",
      ],
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Central Heating",
      description:
        "Complete central heating installations, upgrades, and power flushing. Radiator installation and smart thermostat fitting.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      features: [
        "Full system design",
        "Radiator upgrades",
        "Smart controls",
        "Power flushing",
      ],
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Energy Efficiency",
      description:
        "Improve your home's energy efficiency with modern heating systems. Lower bills and reduce your carbon footprint.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      features: [
        "Save up to 30%",
        "Eco-friendly",
        "Smart heating",
        "A-rated boilers",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Emergency Repairs",
      description:
        "24/7 emergency heating repairs when you need us most. No call-out charges during business hours.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      features: [
        "24/7 available",
        "Rapid response",
        "No hidden fees",
        "All emergencies",
      ],
    },
  ];

  return (
<div
      ref={ref}
      className={`py-20 bg-gradient-to-b from-white to-primary-faint w-full transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-100 text-secondary-600 rounded-full px-4 py-2 mb-4 font-semibold text-sm">
            HEATING SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Complete Heating Services
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            From boiler installations to emergency repairs, we provide
            comprehensive heating solutions with Gas Safe registered engineers
          </p>
        </div>

        {/* Desktop/Tablet: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="mt-6 w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex-shrink-0 w-80"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 ${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs"
                      >
                        <CheckCircle className="w-3 h-3 text-secondary-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Need Heating Service Today?
          </h3>
          <p className="text-xl text-secondary-100 mb-6">
            Our Gas Safe engineers are ready to help with any heating issue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30">
              Emergency Call Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
