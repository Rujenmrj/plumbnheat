import { CheckCircle, Phone } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function WhyChooseUs() {
  const [leftRef, leftVisible] = useScrollAnimation(0.1);
  const [rightRef, rightVisible] = useScrollAnimation(0.1);

  const reasons = [
    "Licensed and fully insured professionals",
    "15+ years of combined experience",
    "Free quotes and transparent pricing",
    "Quality workmanship guaranteed",
    "Customer satisfaction guaranteed",
    "High-quality materials and modern techniques",
  ];

  return (
    <div className="py-20 bg-primary-faint w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              We take care of all your building needs - from small repairs to
              complete refurbishments and extensions. Our commitment to
              excellence and customer satisfaction sets us apart.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`relative transition-all duration-1000 delay-200 ${
              rightVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white shadow-2xl transform rotate-2">
              <div className="transform -rotate-2">
                <div className="text-6xl font-bold mb-4">24/7</div>
                <div className="text-2xl font-semibold mb-2">
                  Emergency Service
                </div>
                <p className="text-primary-100 text-lg mb-6">
                  We're available around the clock for urgent repairs and
                  emergencies
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-6 h-6 animate-pulse" />
                    <span className="text-xl font-semibold">Call Us Now</span>
                  </div>
                  <a
                    href="tel:+447466453808"
                    className="block text-2xl sm:text-4xl font-extrabold text-white hover:text-secondary-100 transition-all duration-200"
                  >
                    +44 7466 453808
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
