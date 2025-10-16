import { Home, Droplet, Wrench, Clock, Award, Building } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

export default function ServicesGrid() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Home Extensions",
      description:
        "Expand your living space with expertly designed and built extensions that seamlessly blend with your existing home.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: ["Custom design", "Structural integrity", "High-quality materials", "On-time delivery"],
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Full Home Renovations",
      description:
        "From concept to completion, we manage full property renovations using the highest quality materials and craftsmanship.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      features: ["Complete project management", "Modern interiors", "High-quality finishes", "Experienced team"],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Kitchen Installations",
      description:
        "Upgrade your kitchen with stylish, functional, and long-lasting installations tailored to your needs.",
      color: "bg-primary-600",
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
      features: ["Custom cabinets", "Countertops & sinks", "Appliance installation", "Durable finishes"],
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Bathroom Renovations",
      description:
        "Transform your bathroom into a modern, relaxing space with our expert renovation and design service.",
      color: "bg-secondary-600",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      features: ["Showers & baths", "Tile & flooring", "Plumbing upgrades", "Modern fixtures"],
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Roofing & Brickwork",
      description:
        "Reliable roofing, bricklaying, and structural repair services that enhance and protect your property.",
      color: "bg-primary-500",
      image:
        "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=800&q=80",
      features: ["Roof repairs & installation", "Chimney work", "Bricklaying & masonry", "Weatherproofing"],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Painting & Plastering",
      description:
        "High-quality interior and exterior painting, decorating, and plastering with smooth, professional finishes.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      features: ["Interior & exterior", "Smooth plaster finishes", "Color consultation", "Durable coatings"],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-primary-faint w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Our Building Services
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive construction and renovation solutions for residential and commercial properties.
          </p>
        </div>

        {/* Desktop/Tablet: Grid Layout */}
        <div
          ref={gridRef}
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            gridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
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
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
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
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
                  <div className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-secondary-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
