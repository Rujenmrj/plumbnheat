import {
  UtensilsCrossed,
  ChefHat,
  Phone,
  Clock,
  Shield,
  Flame,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
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

      {/* Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <UtensilsCrossed className="w-16 h-16 text-primary-300 opacity-20" />
        </div>
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <ChefHat className="w-20 h-20 text-primary-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-40 left-1/4 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        >
          <Flame className="w-12 h-12 text-primary-300 opacity-20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-5 py-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-full p-1">
                <Shield className="w-5 h-5 text-secondary-600" />
              </div>
              <span className="text-sm font-bold">
                Gas Safe Registered • Commercial Certified • Fully Insured
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Commercial Kitchen
              <br />
              <span className="text-secondary-300">Equipment Specialists</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Expert installation, maintenance, and repair of commercial
              catering equipment for restaurants, cafes, hotels, and food
              businesses
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Emergency</div>
                  <div className="text-sm text-primary-100">Rapid Response</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Certified</div>
                  <div className="text-sm text-primary-100">
                    Gas Safe Engineers
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call: +44 7466 453808
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30"
              >
                Request Survey
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content (cards) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Flame className="w-7 h-7 text-white" />,
                  title: "Gas Equipment",
                  desc: "Ovens, ranges, fryers installation",
                },
                {
                  icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
                  title: "Kitchen Design",
                  desc: "Full commercial kitchen setup",
                },
                {
                  icon: <ChefHat className="w-7 h-7 text-white" />,
                  title: "Maintenance",
                  desc: "Planned & reactive servicing",
                },
                {
                  icon: <Clock className="w-7 h-7 text-white" />,
                  title: "24/7 Support",
                  desc: "Emergency breakdown service",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all ${
                    i % 2 !== 0 ? "mt-8" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <div className="bg-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              className="mt-6 bg-white rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-secondary-600 font-bold text-2xl">
                    200+
                  </div>
                  <div className="text-gray-600 text-sm">Businesses Served</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-secondary-600 font-bold text-2xl">
                    15+
                  </div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-secondary-600 font-bold text-2xl">
                    99%
                  </div>
                  <div className="text-gray-600 text-sm">Uptime Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
