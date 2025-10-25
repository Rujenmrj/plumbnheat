import {
  Wrench,
  Fan,
  FileCheck,
  AlertTriangle,
  Phone,
  Flame,
  Pipette,
  CheckCircle,
} from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function CateringServices() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Commercial Kitchen Gas Installation",
      description:
        "Safe and compliant gas installation for commercial kitchens, ensuring efficiency and reliability for all your appliances.",
      color: "bg-primary-500",
      image:
        "https://plus.unsplash.com/premium_photo-1661931341893-d5146d92f23d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      features: [
        "Gas Safe certified engineers",
        "High-capacity pipe systems",
        "Complete installation & testing",
        "Safety-first standards",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Gas Appliance Servicing & Repair",
      description:
        "Comprehensive maintenance and repair for all gas appliances to ensure safe and efficient performance.",
      color: "bg-secondary-500",
      image:
        "https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      features: [
        "All major commercial brands",
        "Preventative maintenance",
        "Genuine replacement parts",
        "Emergency repairs available",
      ],
    },
    {
      icon: <Pipette className="w-12 h-12" />,
      title: "New Pipework & Gas Interlock Systems",
      description:
        "Professional design and installation of pipework and gas interlock systems meeting the latest safety standards.",
      color: "bg-primary-500",
      image:
        "https://plus.unsplash.com/premium_photo-1682144538950-d2595484bc07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      features: [
        "Bespoke pipework design",
        "BS6173 compliant systems",
        "Automatic shut-off valves",
        "Pressure testing and certification",
      ],
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "CP42 Gas Safety Certification",
      description:
        "We issue CP42 certificates after thorough inspection and testing of your commercial kitchen gas installation.",
      color: "bg-secondary-500",
      image:
        "https://images.unsplash.com/photo-1742112125567-3e8967bad60f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      features: [
        "Full inspection & testing",
        "Gas Safe registered",
        "Certificate valid for 12 months",
        "Compliance documentation",
      ],
    },
    {
      icon: <Fan className="w-12 h-12" />,
      title: "Extractor Fan & Ventilation Compliance",
      description:
        "Installation and compliance testing of extraction and ventilation systems for optimal air quality and safety.",
      color: "bg-primary-500",
      image:
        "https://plus.unsplash.com/premium_photo-1682126035460-bb956013473b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      features: [
        "Commercial extractor fans",
        "Airflow compliance tests",
        "Duct cleaning and upgrades",
        "Meets HSE ventilation standards",
      ],
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Emergency Call-Outs & Diagnostics",
      description:
        "Rapid response to gas leaks, breakdowns, and system faults. We ensure minimal downtime for your kitchen.",
      color: "bg-secondary-500",
      image:
        "https://plus.unsplash.com/premium_photo-1664301135901-383935f2104f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      features: [
        "24/7 emergency response",
        "Fault detection and repairs",
        "No hidden fees",
        "Safety guaranteed",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-secondary-50 w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          
          <div className="inline-block bg-secondary-100 text-secondary-600 rounded-full px-4 py-2 mb-4 font-semibold text-sm">
            COMMERCIAL CATERING SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Our Commercial Catering Services
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Reliable gas, ventilation, and safety services for professional
            kitchens — all carried out by certified engineers.
          </p>
        </div>

        {/* Grid Layout */}
        <div
          ref={servicesRef}
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            servicesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 group"
            >
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

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 text-center bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-10 text-white shadow-2xl transition-all duration-1000 delay-400 ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold mb-4">
            Need Commercial Catering Support?
          </h3>
          <p className="text-xl text-secondary-100 mb-6">
            Our certified engineers are ready for installations, servicing, or
            emergency call-outs.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+447466453808"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Call Us Now
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
