// AccreditationSection.jsx
import { ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function AccreditationSection() {

    const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="w-full py-10 mt-15 bg-gray-faint">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 flex flex-col 
      md:flex-row items-center justify-between  gap-10 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}>
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>CERTIFIED & QUALIFIED</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-primary-600 mb-4">
            Gas Safe Registered Company
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Your safety is our priority. We're fully qualified, registered, and insured to
            handle all your heating and gas work.
          </p>
        </div>

        {/* Right: Logo and Registration */}
        <div className="flex flex-col items-center md:items-end flex-shrink-0">
          <img
            src="/home/gsr-copy.png"
            alt="Gas Safe Register"
            className="w-40 h-auto mb-2 rounded-2xl"
          />
          <p className="text-sm text-gray-600">Register No: 123456</p>
        </div>
      </div>
    </section>
  );
}
