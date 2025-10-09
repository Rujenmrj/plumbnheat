// src/pages/Contact.jsx
import React from "react";
import Form from "../../components/Form";
import { Phone, Mail, ShieldCheck, MapPin } from "lucide-react";
import Banner from "../../components/Banner";

export default function Contact() {
  return (
    <main className="w-full bg-gray-faint">
      {/* Hero Banner Image */}
      <section className="relative w-full h-[50vh] md:h-[55vh] lg:h-[60vh] mt-0">
        <img
          src="/contact/herocontact.png"
          alt="Contact Banner"
          className="w-full h-full object-cover object-center"
        />
        
      </section>

      {/* Contact Form + Map */}
      <section className="pt-6 pb-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: Contact Form */}
          <div className="flex-1 text-primary-500 bg-white rounded-2xl shadow-lg px-10 py-12">
            <Form
              title="Contact Us"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted");
              }}
            />
          </div>

          {/* Right Side: Map */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Aldershot Location"
              src="https://www.google.com/maps?q=Aldershot+Hampshire+GU11+3ST&output=embed"
              className="w-full h-full border-0 min-h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Banner
            heading="24/7 Emergency Service"
            subText="Plumbing, Heating, Construction – Don’t wait!"
            btnText="Call Now"
            phoneNumber="+44 1234 567890"
          />
        </div>
      </section>

      {/* Company Details */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-primary-500 mb-4">
            Company Details
          </h2>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <span className="text-gray-600 text-lg font-medium">
              +44 1234 567890
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <span className="text-gray-600 text-lg font-medium">
              weplumbnheat@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <a
              href="https://www.weplumbnheat.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-lg font-medium hover:text-primary transition"
            >
              www.weplumbnheat.co.uk
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-gray-600 flex-shrink-0" />
            <div className="text-gray-600 text-lg">Aldershot, Hampshire</div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Business Hours:</p>
            <p className="text-gray-600">Mon–Sun: 24/7</p>
          </div>
        </div>
      </section>
    </main>
  );
}
