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

        {/* Intro */}
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          These Terms of Service outline the conditions under which{" "}
          <span className="text-secondary-500 font-semibold">WePlumbNHeat</span>{" "}
          provides plumbing, heating, and building services. By using our
          website or booking our services, you agree to these terms.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Heating & Plumbing Terms */}
          <div>
            <h2 className="text-xl font-bold text-primary-600 mb-4">
              Heating & Plumbing Terms
            </h2>

            {/* Call-Out Charges */}
            <h3 className="font-semibold mb-2 text-primary-600">
              1. Call-Out Charges
            </h3>
            <p className="font-medium text-primary-600">
              Call-out charges will apply on emergency plumbing and heating
              calls. Charges are fair and transparent.
            </p>
            <p className="mt-2">
              For non-emergency work, we offer free, no-obligation quotations.
              All pricing will be clearly explained before work begins.
            </p>

            {/* Transparent Pricing */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              2. Transparent Pricing
            </h3>
            <p>
              All quotations are provided upfront. Should additional work be
              required due to unforeseen issues (e.g. hidden leaks or
              pre-existing faults), we will inform you and obtain consent before
              proceeding.
            </p>

            {/* Liability */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              3. Liability & Disclaimers
            </h3>
            <p>
              WePlumbNHeat cannot be held liable for damage or issues resulting
              from:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>DIY repairs or third-party interference.</li>
              <li>Pre-existing defects or poor installations.</li>
              <li>
                Consequential losses (e.g., water damage or loss of income)
                unless caused by proven negligence.
              </li>
            </ul>

            {/* Safety & Compliance */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              4. Safety & Gas Safe Compliance
            </h3>
            <p>
              All gas and heating work is carried out by registered Gas Safe
              engineers following UK regulations and safety standards.
            </p>

            {/* Workmanship Guarantee */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              5. Workmanship Guarantee
            </h3>
            <p>
              All workmanship is guaranteed for 12 months unless otherwise
              stated. Manufacturer warranties apply to supplied materials or
              parts.
            </p>
          </div>

          {/* Building Terms */}
          <div>
            <h2 className="text-xl font-bold text-primary-600 mb-4">
              Building Terms
            </h2>

            {/* Liability */}
            <h3 className="font-semibold mb-2 text-primary-600">
              1. Liability Disclaimer
            </h3>
            <p>
              We are not responsible for structural issues, hidden damage, or
              conditions not visible during the initial inspection. Our
              liability is limited to the value of the contracted work unless
              otherwise required by law.
            </p>

            {/* Quality */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              2. Quality & Workmanship
            </h3>
            <p>
              All building work complies with UK Building Regulations and is
              completed to a high professional standard. We offer a 12-month
              workmanship guarantee.
            </p>

            {/* Timelines & Payments */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              3. Project Timelines & Payment Terms
            </h3>
            <p>
              Project timelines are agreed before work begins. Payments are made
              in stages or as specified in the contract. Late payments may delay
              progress or incur charges.
            </p>

            {/* Safety & Insurance */}
            <h3 className="font-semibold mt-6 mb-2 text-primary-600">
              4. Safety & Insurance
            </h3>
            <p>
              We hold full public liability and contractor’s insurance. Clients
              are responsible for ensuring safe site access and disclosing any
              known risks such as asbestos or unstable structures.
            </p>
          </div>

          {/* Website Use */}
          <div>
            <h2 className="text-xl font-bold text-primary-600 mb-4">
              Website Use
            </h2>
            <p>
              You agree not to misuse our website or submit harmful content. All
              content, branding, and images are property of WePlumbNHeat and may
              not be copied or reused without permission.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold text-primary-600 mb-3">
              Contact Us
            </h2>
            <p>If you have questions about these Terms, contact us:</p>

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

        <p className="text-sm text-gray-400 mt-12 text-right italic">
          Last Updated: October 2025
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
