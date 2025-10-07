// src/pages/ContactUs.jsx
import React from "react";

import { Phone, Mail, ShieldCheck, CheckCircle } from "lucide-react";
import Form from "../../components/Form";
import Banner from "../../components/Banner";

export default function ContactUs() {
  return (
    <section className="w-full py-16 bg-gray-faint">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Centered Heading & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-700">
            Ready to solve your plumbing, heating, or construction needs?
            Contact us today for a free estimate or emergency service.
          </p>
        </div>

        {/* Left & Right Side */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Form + Map */}
          <div className="flex-1 flex flex-col gap-8">
            <Form
              title="Contact Us"
              onSubmit={(e) => console.log("Submitted!")}
            />

            {/* Map */}
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

          {/* Right Side: Banner + Company Details + Service Promise */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Emergency Banner */}
            <div className="rounded-2xl overflow-hidden">
              <Banner
                heading="24/7 Emergency Service"
                subText="Plumbing, Heating, Construction – Don't wait!"
                btnText="Call Now"
                phoneNumber="+44 1234 567890"
              />
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Company Details
              </h3>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-700">+44 1234 567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-700">info@plumbnheat.co.uk</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Service Area:</p>
                <p className="text-gray-700">Aldershot, Hampshire</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Business Hours:</p>
                <p className="text-gray-700">Mon-Sun: 24/7</p>
              </div>
            </div>

            {/* Our Service Promise */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Our Service Promise
              </h3>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Free
                  estimates on all non-emergency services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Upfront
                  pricing with no hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> 100%
                  satisfaction guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Licensed,
                  insured, and bonded professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
