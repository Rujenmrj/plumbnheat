// src/pages/Contact.jsx
import React from "react";
import Form from "../../components/Form";
import { Phone, Mail, ShieldCheck, CheckCircle, MapPin } from "lucide-react";
import Banner from "../../components/Banner";

export default function Contact() {
  return (
    <main className="w-full bg-gray-faint">
      {/* Hero Section */}
      <section className="py-20 bg-primary-100 shadow-md">
        <div className="max-w-4xl mx-auto text-center text-primary-500 px-6">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Contact Our Team
          </h1>
          <p className="text-gray-600 text-lg text-[17px]">
            Need plumbing, heating, or construction services? Reach out via
            form, email, or phone — we’re ready to help 24/7.
          </p>
        </div>
      </section>

      {/* Form + Banner + Company Details */}
      <section className="pt-20 pb-10 max-w-7xl mx-auto px-6">
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

          {/* Right Side: Banner + Company Details */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="rounded-2xl overflow-hidden">
              <Banner
                heading="24/7 Emergency Service"
                subText="Plumbing, Heating, Construction – Don't wait!"
                btnText="Call Now"
                phoneNumber="+44 1234 567890"
              />
            </div>

            {/* Company Details below */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3">
              <h2 className="text-2xl text-primary-500 font-semibold text-secondary mb-4">
                Company Details
              </h2>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary text-gray-600 flex-shrink-0" />
                <span className="text-gray-600 text-lg font-medium">
                  +44 1234 567890
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary text-gray-600 flex-shrink-0" />
                <span className="text-gray-600 text-lg font-medium">
                  weplumbnheat@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary text-gray-600 flex-shrink-0" />
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
                <MapPin className="w-6 h-6 text-primary text-gray-600 flex-shrink-0" />
                <div className="text-gray-600 text-lg">
                  Aldershot, Hampshire
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Business Hours:</p>
                <p className="text-gray-600">Mon–Sun: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Promise */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-secondary text-primary-500 mb-4">
            Our Service Promise
          </h2>
          <ul className="flex flex-col gap-5 text-gray-600">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              Free estimates for all non-emergency work
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              Transparent pricing — no hidden charges
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              Fully licensed, insured, and professional team
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              100% satisfaction guaranteed
            </li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 text-center bg-primary-100">
        <h2 className="text-2xl font-semibold text-secondary mb-3">
          Need Immediate Help?
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          For urgent plumbing or heating issues, call our emergency hotline.
        </p>
        <a
          href="tel:+441234567890"
          className="bg-primary text-white bg-secondary-500 px-8 py-3.5 rounded-full font-medium hover:bg-secondary-400 transition text-lg"
        >
          Call Now
        </a>
      </section>

      {/* Map Section */}
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg my-16">
        <iframe
          title="Aldershot Location"
          src="https://www.google.com/maps?q=Aldershot+Hampshire+GU11+3ST&output=embed"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
