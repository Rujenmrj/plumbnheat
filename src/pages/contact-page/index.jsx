// src/pages/Contact.jsx
import React from "react";
import Form from "../../components/Form";
import Banner from "../../components/Banner";
import CompanyDetails from "./CompanyDetails";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function Contact() {

  const [heroRef, heroVisible] = useScrollAnimation(0.2);

  const [formRef, formVisible] = useScrollAnimation(0.2);
  const [mapRef, mapVisible] = useScrollAnimation(0.2);



  return (
    <main className="w-full bg-gray-faint">
      {/* Hero Banner Image */}
      <section className="relative w-full h-[30vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <img
          src="/contact/bgcontact.png"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0"></div>

        {/* Text Content */}
         <div
          ref={heroRef}
          className={`relative z-10 px-4 sm:px-6 mb-15 transition-all duration-700 ease-out transform ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            CONTACT OUR TEAM
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-gray-100">
            Need plumbing, heating, or construction services? Reach out through our form, email, or phone. We’re here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="pt-6 pb-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Form */}
         <div
            ref={formRef}
            className={`flex-1 bg-white text-primary-500 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 transition-all duration-700 ease-out transform ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Form
              title="Contact Us"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted");
              }}
            />
          </div>

          {/* Right: Map */}
           <div
            ref={mapRef}
            className={`flex-1 rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-auto transition-all duration-700 ease-out transform ${
              mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <iframe
              title="Aldershot Location"
              src="https://www.google.com/maps?q=Aldershot+Hampshire+GU11+3ST&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


      {/* Emergency Service Banner */}
      <section className=" pb-12">
        <div className=" overflow-hidden shadow-lg">
          <Banner
            heading="24/7 Emergency Service"
            subText="Plumbing, Heating, Construction – Don’t wait!"
            btnText="Call Now"
            phoneNumber="+44 1234 567890"
          />
        </div>
      </section>

      {/* Company Details */}
      <CompanyDetails />

    </main>
  );
}
