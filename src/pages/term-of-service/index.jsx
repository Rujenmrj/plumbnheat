import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <section className="w-full bg-primary-faint py-24">
      <div className="max-w-5xl mx-auto bg-white px-8 sm:px-12 py-14 rounded-2xl shadow-lg border border-gray-200">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-primary-600 mb-6">
          Terms of Service
        </h1>

        {/* Intro Paragraph */}
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          These Terms of Service explain how you may use the{" "}
          <span className="text-primary-500 font-semibold">WePlumbNHeat</span>{" "}
          website and our services. By using our site or booking with us, you
          agree to these terms.
        </p>

        {/* Main Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* 1. Services */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              1. Services
            </h2>
            <p>
              WePlumbNHeat provides plumbing, heating, and general maintenance
              services as described on our website. All work is carried out by
              qualified professionals following industry standards and safety
              regulations.
            </p>
          </div>

          {/* 2. Appointments and Cancellations */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              2. Appointments and Cancellations
            </h2>
            <p>
              When booking a service, please provide accurate details.
              Cancellations should be made in advance. Missed or late
              cancellations may result in a call-out charge.
            </p>
          </div>

          {/* 3. Pricing and Payment */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              3. Pricing and Payment
            </h2>
            <p>
              Quotes are provided before work begins. Payment is due upon
              completion unless otherwise agreed. We accept the payment methods
              listed on our website.
            </p>
          </div>

          {/* 4. Warranties and Liability */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              4. Warranties and Liability
            </h2>
            <p>
              Our workmanship is guaranteed as explained during your booking.
              Parts or materials are covered by the manufacturer’s warranty.
              WePlumbNHeat is not responsible for indirect or consequential
              losses caused by service use or delays.
            </p>
          </div>

          {/* 5. Website Use */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              5. Website Use
            </h2>
            <p>
              You may not misuse our website by uploading harmful content or
              interfering with its operation. We reserve the right to restrict
              access if misuse occurs.
            </p>
          </div>

          {/* 6. Intellectual Property */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              6. Intellectual Property
            </h2>
            <p>
              All website content, including text, images, and branding, belongs
              to WePlumbNHeat. Reproduction or redistribution without written
              permission is not allowed.
            </p>
          </div>

          {/* 7. Updates */}
          <div>
            <h2 className="font-semibold text-lg mb-2 text-primary-600">
              7. Updates to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              reflected on this page with a new “Last Updated” date.
            </p>
          </div>

          {/* 8. Contact Section */}
          <div>
            <h2 className="font-semibold text-lg mb-3 text-primary-600">
              8. Contact Us
            </h2>
            <p>If you have any questions about these Terms, contact us:</p>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-secondary-500" />
                Aldershot, Hampshire, GU11 3ST
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-secondary-500" />
                07453 623938
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-secondary-500" />
                weplumbnheat@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-400 mt-12 text-right italic">
          Last Updated: October 2025
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
