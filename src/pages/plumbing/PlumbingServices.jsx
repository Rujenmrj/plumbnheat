import {
  Droplets,
  Wrench,
  Toilet,
  PipetteIcon as Pipe,
  Hammer,
  CheckCircle,
  Clock,
  ShowerHeadIcon,
} from "lucide-react";

export default function PlumbingServices() {
  const services = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Leak Detection & Repair",
      description:
        "Expert leak detection using latest technology. Fast repairs to pipes, taps, toilets, and all water systems.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
      features: [
        "Advanced leak detection",
        "Pipe repairs",
        "Tap replacements",
        "24/7 emergency",
      ],
    },
    {
      icon: <ShowerHeadIcon className="w-12 h-12" />,
      title: "Bathroom Installation",
      description:
        "Complete bathroom installations and renovations. Showers, baths, sinks, toilets fitted to perfection.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      features: [
        "Full bathrooms",
        "Shower installations",
        "Modern suites",
        "Designer finishes",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Kitchen Plumbing",
      description:
        "Professional kitchen plumbing services. Sinks, taps, dishwashers, and washing machine installations.",
      color: "bg-secondary-600",
      image:
        "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      features: [
        "Sink installations",
        "Tap upgrades",
        "Appliance fitting",
        "Waste disposal units",
      ],
    },
    {
      icon: <Pipe className="w-12 h-12" />,
      title: "Drain Unblocking",
      description:
        "Fast drain and sewer unblocking services. CCTV surveys and high-pressure jetting available.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      features: [
        "Blocked drains",
        "CCTV surveys",
        "High-pressure jetting",
        "Root removal",
      ],
    },
    {
      icon: <Toilet className="w-12 h-12" />,
      title: "Toilet Repairs",
      description:
        "All toilet repairs and installations. From simple fixes to complete toilet replacements.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      features: [
        "Running toilets",
        "Cistern repairs",
        "New installations",
        "Blockage clearing",
      ],
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Pipe Work & Replacements",
      description:
        "Professional pipe work installations and replacements. Copper, plastic, and modern materials.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
      features: [
        "Pipe replacements",
        "Re-piping",
        "Frozen pipe repairs",
        "Burst pipes",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-primary-faint w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4 font-semibold text-sm">
            PLUMBING SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Comprehensive Plumbing Services
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Professional plumbers for all residential and commercial needs - no
            job too big or small
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
                  Get Quote
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
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Need a Plumber Today?</h3>
          <p className="text-xl text-primary-100 mb-6">
            Fast, reliable plumbing services across Aldershot and surrounding
            areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Book Now
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30">
              Emergency Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
