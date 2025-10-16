import { nav } from "framer-motion/client";
import {
  Wrench,
  Home,
  Droplet,
  Clock,
  Building,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  PhoneCallIcon,
} from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import {useScrollAnimation} from "../../components/hooks/useScrollAnimation"

export default function Hero() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollAnimation(0.1);

 return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden w-full">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div 
        ref={heroRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Excellence,
            <br />
            <span className="text-secondary-300">One Project at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            From home renovations to large-scale building projects — your trusted partner for quality construction and refurbishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative inline-block">
              {/* Ripple Glow Animation */}
              <span className="absolute inset-0 rounded-lg bg-secondary-500 opacity-40 animate-ping blur-md"></span>
              <span className="absolute inset-0 rounded-lg bg-secondary-500 opacity-30 blur-lg animate-pulse"></span>

              {/* Main Button */}
              <button className="relative bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                Call Us Now!
                <PhoneCallIcon className="w-5 h-5" />
              </button>
            </div>
            <button
              className="flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30 gap-2"
              onClick={() => navigate("/contact")}
            >
              <span>Email Us</span>
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

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
