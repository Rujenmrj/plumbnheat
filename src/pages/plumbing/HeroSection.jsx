import { Droplets, Wrench, Phone, Clock, Shield, Zap, Calendar, ToolCase, Pipette, Siren } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden w-full">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0s" }}
        >
          <Droplets className="w-16 h-16 text-primary-300 opacity-20" />
        </div>
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <Wrench className="w-20 h-20 text-primary-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-40 left-1/4 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        >
          <Droplets className="w-12 h-12 text-primary-300 opacity-20" />
        </div>
      </div>

      <div
        ref={heroRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-5 py-3 mb-6">
              <div className="bg-white rounded-full p-1">
                <Shield className="w-5 h-5 text-secondary-600" />
              </div>
              <span className="text-sm font-bold">
                Fully Qualified • Insured • 24/7 Available
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Plumbing
              <br />
              <span className="text-secondary-300">Services You Can Trust</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              From leaky taps to complete bathroom installations - expert
              plumbers ready to solve all your plumbing needs
            </p>

            {/* Quick Features including Years of Experience */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Same Day</div>
                  <div className="text-sm text-primary-100">
                    Service Available
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Fast Response</div>
                  <div className="text-sm text-primary-100">
                    No Hidden Costs
                  </div>
                </div>
              </div>

              {/* 15 Years of Experience */}
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">15 Years</div>
                  <div className="text-sm text-primary-100">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Highlights */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Leak Repairs</h3>
                <p className="text-sm text-primary-100">
                  Fast leak detection and repair
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                <div className="bg-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Installations</h3>
                <p className="text-sm text-primary-100">
                  Bathrooms, kitchens & more
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Pipette className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Drain Services</h3>
                <p className="text-sm text-primary-100">
                  Unblocking & maintenance
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                <div className="bg-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Siren className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Emergency</h3>
                <p className="text-sm text-primary-100">
                  24/7 emergency callout
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap gap-4 mt-8">
              {/* Call Now Button with Ripple Glow */}
              <div className="relative inline-block">
                <a
                  href="tel:+447466453808"
                  className="relative bg-white hover:bg-white/90 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform shadow-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +44 7466 453808
                </a>
              </div>

              {/* Free Quote Button */}
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center cursor-pointer justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30 gap-2"
              >
                Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
