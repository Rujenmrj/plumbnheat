import React from "react";
import { PhoneCall } from "lucide-react";

const Banner = ({ title, description, phone }) => {
  return (
    <section className="w-full bg-red-100 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-700">
          {title || "Plumbing & Heating Emergencies Don’t Wait!"}
        </h2>
        <p className="text-red-600 mt-3 text-lg">
          {description ||
            "24/7 Service Available — Call us now for immediate assistance!"}
        </p>

        <a
          href={`tel:${phone || "9800000000"}`}
          className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-700 transition-all duration-200"
        >
          <PhoneCall className="w-5 h-5" />
          Call {phone || "9800000000"}
        </a>
      </div>
    </section>
  );
};

export default Banner;
