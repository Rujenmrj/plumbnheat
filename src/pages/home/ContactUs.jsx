import React from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import Form from "../../components/Form";
import Banner from "../../components/Banner";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function ContactUs() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="w-full py-16 bg-gray-faint overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Ready to solve your plumbing, heating, or construction needs? Contact us
            today for a free estimate or emergency service.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE: Form + Map */}
          <div
            className={`flex-1 flex flex-col gap-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Contact Form */}
            
              <Form
                title="Contact Us"
                onSubmit={(e) => console.log("Form Submitted!")}
              />
            

            {/* Google Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Aldershot Location"
                src="https://www.google.com/maps?q=Aldershot+Hampshire+GU11+3ST&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: Emergency + Details + Promise */}
          <div
            className={`flex-1 flex flex-col gap-8 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Emergency Banner */}
            <div className="rounded-2xl overflow-hidden">
              <Banner
                heading="24/7 Emergency Service"
                subText="Plumbing, Heating, Construction – Don't wait!"
                btnText="Call Now"
                phoneNumber="+44 7453 263938"
              />
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Company Details
              </h3>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-700">+44 7453 263938</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-700">weplumbnheat@gmail.com</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Service Area:</p>
                <p className="text-gray-700">We cover parts of Hampshire and Surrey.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Business Hours:</p>
                <p className="text-gray-700">Mon–Sun: 24/7</p>
              </div>
            </div>

            {/* Service Promise */}
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Service Promise
              </h3>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Free Quotations for any installation or upgrade services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Customer Needs First
                </li>
                {/* <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Licensed, insured, and bonded professionals
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
