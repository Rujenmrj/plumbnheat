import { Shield } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function GasSafeCertification() {
  const [textRef, textVisible] = useScrollAnimation(0.1);
  const [cardRef, cardVisible] = useScrollAnimation(0.1);

  return (
    <div className="py-10 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 rounded-full px-5 py-2 mb-6 font-semibold text-sm">
              <Shield className="w-5 h-5" />
              CERTIFIED & QUALIFIED
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
              Gas Safe Registered Company
            </h2>

            <p className="text-[17px] text-gray-600 leading-relaxed max-w-lg">
              Your safety is our top priority. We are fully qualified, insured,
              and <span className="font-semibold text-gray-800">Gas Safe registered</span> to handle all your heating and gas work
              with professionalism and care.
            </p>
          </div>

          {/* Right Card Section */}
          <div className="flex justify-center lg:justify-end items-start lg:items-end">
            <div
              ref={cardRef}
              className={`transition-all duration-1000 delay-200 ${
                cardVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 w-[85%] max-w-sm">
                <div className="mb-5">
                  <img
                    src="/heating/gsrw.png"
                    alt="Gas Safe Register"
                    className="w-32 mx-auto"
                  />
                </div>
                <div className="text-gray-700 font-bold text-lg mb-2">
                  Gas Safe Registered
                </div>
                <div className="text-secondary-600 font-bold text-3xl">
                  961318
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
