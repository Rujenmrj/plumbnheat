import {
  Phone,
  Clock,
  Zap,
  AlertCircle,
  Shield,
  CheckCircle,
  Droplets,
  Flame,
  AlertTriangle,
  Ban,
  Bell,
} from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function EmergencyPlumbing() {
  const [leftRef, leftVisible] = useScrollAnimation(0.1);
  const [rightRef, rightVisible] = useScrollAnimation(0.1);

  const emergencies = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Burst Pipes",
      description:
        "Immediate response to burst pipes causing flooding and water damage",
      response: "60 min response",
    },
    {
      icon: <Ban className="w-8 h-8" />,
      title: "Blocked Drains",
      description:
        "Emergency drain unblocking to prevent overflow and sewage backup",
      response: "Same day service",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "No Hot Water",
      description:
        "Urgent repairs to restore your hot water and heating systems",
      response: "Fast diagnosis",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Overflow Issues",
      description:
        "Quick action for overflowing toilets, sinks, or appliances to prevent water damage",
      response: "Immediate assistance",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white w-full relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Emergency info */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-semibold text-sm">AVAILABLE 24/7/365</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Plumbing Service
            </h2>

            <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
              Plumbing emergencies don't wait for business hours. Our expert
              team is available around the clock to handle your urgent plumbing
              needs.
            </p>

            {/* Key features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg">Expert Plumbers</div>
                  <p className="text-secondary-100">
                    Certified and experienced plumbers ready to handle any
                    emergency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg">Fully Stocked Vans</div>
                  <p className="text-secondary-100">
                    Our engineers carry common parts for immediate repairs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg">Safe & Reliable</div>
                  <p className="text-secondary-100">
                    All work completed to high safety and quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-white rounded-2xl p-8 text-gray-700 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary-500 rounded-full p-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold">
                    EMERGENCY HOTLINE
                  </div>
                  <div className="text-3xl font-bold text-secondary-600">
                    +44 7453 263938
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Call now for immediate assistance. Our team is ready to help 24
                hours a day, 7 days a week.
              </p>
              <a
                href="tel: +44 7453 263938"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Right side - Emergency types */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 ${
              rightVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {emergencies.map((emergency, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    {emergency.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{emergency.title}</h3>
                  <p className="text-secondary-100 text-sm mb-3">
                    {emergency.description}
                  </p>
                  <div className="inline-block bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {emergency.response}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Bell className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-xs text-secondary-100">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">60min</div>
                <div className="text-xs text-secondary-100">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
