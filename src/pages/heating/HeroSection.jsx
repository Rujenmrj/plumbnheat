import { Flame, Droplets, Wrench, Phone, Clock, Shield } from "lucide-react";
import { useScrollAnimation} from "../../components/hooks/useScrollAnimation";

export default function HeroSection() {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);

  return (
    <div className="relative bg-gradient-to-br from-secondary-600 to-secondary-700 text-white overflow-hidden w-full">
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
          <Flame className="w-16 h-16 text-secondary-300 opacity-20" />
        </div>
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <Droplets className="w-20 h-20 text-secondary-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-40 left-1/4 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        >
          <Wrench className="w-12 h-12 text-secondary-300 opacity-20" />
        </div>
      </div>

      <div 
        ref={heroRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Gas Safe Registered & Fully Insured
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Heating &<br />
              <span className="text-secondary-200">Plumbing Services</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-secondary-100 leading-relaxed">
              Professional boiler installations, repairs, and complete plumbing
              solutions for your home and business
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Available</div>
                  <div className="text-sm text-secondary-100">
                    Emergency Service
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Guaranteed</div>
                  <div className="text-sm text-secondary-100">Quality Work</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-secondary-600 hover:bg-secondary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 0800 123 4567
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30">
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Right Content - Service Highlights */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-primary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Flame className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Boiler Services</h3>
                <p className="text-sm text-secondary-100">
                  Installation, repairs & annual servicing
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                <div className="bg-primary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Central Heating</h3>
                <p className="text-sm text-secondary-100">
                  Full system installation & maintenance
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-primary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Plumbing Repairs</h3>
                <p className="text-sm text-secondary-100">
                  All plumbing issues resolved fast
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                <div className="bg-primary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Emergency Call</h3>
                <p className="text-sm text-secondary-100">
                  24/7 rapid response service
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-secondary-600 font-bold text-2xl">
                    500+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-secondary-600 font-bold text-2xl">
                    15+
                  </div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-secondary-600 font-bold text-2xl">
                    A+
                  </div>
                  <div className="text-gray-600 text-sm">Rating</div>
                </div>
              </div>
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
