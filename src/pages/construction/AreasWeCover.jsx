import React, { useState, useEffect } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function AreasWeCover() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  // Animate walking person
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + direction * 0.5;
        if (newPos >= 100) {
          setDirection(-1);
          return 100;
        } else if (newPos <= 0) {
          setDirection(1);
          return 0;
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  const areas = [
    "Aldershot",
    "Farnborough",
    "Fleet",
    "Farnham",
    "Camberley",
    "Guildford",
    "Basingstoke",
    "Reading",
    "Woking",
    "Bracknell",
    "Winchester",
    "Alton",
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden w-full">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Areas We Cover
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Serving Aldershot, Hampshire and surrounding areas within a 30-mile
            radius (GU11 3ST)
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated section */}
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {/* Road/path */}
              <div className="absolute bottom-20 left-0 right-0 h-2 bg-white/30"></div>
              <div
                className="absolute bottom-20 left-0 right-0 h-1 bg-secondary-400"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(233, 45, 43, 0.6) 20px, rgba(233, 45, 43, 0.6) 40px)",
                }}
              ></div>

              {/* Buildings in background */}
              <div className="absolute bottom-24 left-10 w-16 h-32 bg-white/20 rounded-t-lg"></div>
              <div className="absolute bottom-24 left-32 w-12 h-40 bg-white/20 rounded-t-lg"></div>
              <div className="absolute bottom-24 right-32 w-20 h-28 bg-white/20 rounded-t-lg"></div>
              <div className="absolute bottom-24 right-10 w-14 h-36 bg-white/20 rounded-t-lg"></div>

              {/* Walking person with tools */}
              <div
                className="absolute bottom-24 transition-all duration-100"
                style={{
                  left: `${position}%`,
                  transform: direction === -1 ? "scaleX(-1)" : "scaleX(1)",
                }}
              >
                {/* Person SVG */}
                <svg
                  width="60"
                  height="80"
                  viewBox="0 0 60 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Head */}
                  <circle
                    cx="30"
                    cy="15"
                    r="8"
                    fill="#FDE5E5"
                    stroke="#E92D2B"
                    strokeWidth="2"
                  />

                  {/* Body */}
                  <rect
                    x="22"
                    y="23"
                    width="16"
                    height="25"
                    rx="3"
                    fill="#F24E4B"
                  />

                  {/* Tool belt */}
                  <rect
                    x="20"
                    y="38"
                    width="20"
                    height="4"
                    rx="1"
                    fill="#1D3762"
                  />

                  {/* Legs - animated */}
                  <rect
                    x="23"
                    y="48"
                    width="6"
                    height="28"
                    rx="3"
                    fill="#162A4C"
                    style={{
                      transformOrigin: "26px 48px",
                      transform: `rotate(${Math.sin(position * 0.5) * 20}deg)`,
                    }}
                  />
                  <rect
                    x="31"
                    y="48"
                    width="6"
                    height="28"
                    rx="3"
                    fill="#162A4C"
                    style={{
                      transformOrigin: "34px 48px",
                      transform: `rotate(${
                        Math.sin(position * 0.5 + Math.PI) * 20
                      }deg)`,
                    }}
                  />

                  {/* Arms */}
                  <rect
                    x="15"
                    y="25"
                    width="5"
                    height="20"
                    rx="2.5"
                    fill="#FDE5E5"
                  />
                  <rect
                    x="40"
                    y="25"
                    width="5"
                    height="20"
                    rx="2.5"
                    fill="#FDE5E5"
                  />

                  {/* Tool box in hand */}
                  <rect
                    x="40"
                    y="42"
                    width="12"
                    height="8"
                    rx="1"
                    fill="#E92D2B"
                  />
                  <rect
                    x="42"
                    y="40"
                    width="8"
                    height="3"
                    rx="1"
                    fill="#B02120"
                  />
                </svg>
              </div>

              {/* Location pins scattered */}
              <div
                className="absolute top-8 left-1/4 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <MapPin className="w-8 h-8 text-secondary-300 fill-secondary-500" />
              </div>
              <div
                className="absolute top-16 right-1/4 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                <MapPin className="w-8 h-8 text-secondary-300 fill-secondary-500" />
              </div>
              <div
                className="absolute top-12 left-1/2 animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3s" }}
              >
                <MapPin className="w-8 h-8 text-secondary-300 fill-secondary-500" />
              </div>
            </div>
          </div>

          {/* Areas list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "slideIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                <CheckCircle className="w-6 h-6 text-secondary-300 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium text-lg">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}


