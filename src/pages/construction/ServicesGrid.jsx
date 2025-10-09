import { Home, Droplet, Wrench, Clock, Award, Building } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      // icon: <Home className="w-12 h-12" />,
      title: "Renovations & Extensions",
      description:
        "Complete home renovations, extensions, and refurbishments tailored to your vision and needs.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
    {
      // icon: <Droplet className="w-12 h-12" />,
      title: "Full Bathroom Renovation",
      description:
        "Transform your bathroom with our complete renovation service - from design to installation.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    },
    {
      // icon: <Wrench className="w-12 h-12" />,
      title: "Plumbing Services",
      description:
        "All types of plumbing needs - from small repairs to major installations. No job too big or small.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    },
    {
      // icon: <Clock className="w-12 h-12" />,
      title: "24/7 Emergency Repairs",
      description:
        "Round-the-clock emergency repair services. We're here when you need us most.",
      color: "bg-secondary-600",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    },
    {
      // icon: <Award className="w-12 h-12" />,
      title: "Landlord Certification",
      description:
        "Complete landlord certification services to ensure your property meets all requirements.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      // icon: <Building className="w-12 h-12" />,
      title: "Commercial Catering",
      description:
        "Professional commercial catering construction and maintenance services for businesses.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    },
  ];

  return (
    <div className="py-20 bg-gray-faint w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Comprehensive construction and plumbing solutions for residential
            and commercial properties
          </p>
        </div>

        {/* Desktop/Tablet: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 ${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
