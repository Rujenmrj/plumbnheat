import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="w-full py-16 bg-gray-faint">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-secondary mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-700">
            This Privacy Policy explains how{" "}
            <span className="text-secondary-500">WePlumbNHeat</span> collects,
            uses, and protects your personal information when you use our
            website and services.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-primary-500 leading-relaxed">
          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, phone number, and service location when you:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Submit a contact form or request a quote</li>
            <li>Book an appointment or emergency call-out</li>
            <li>Communicate with us by phone, email, or our website</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Your information is used solely for legitimate business purposes,
            including:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Responding to your enquiries and service requests</li>
            <li>Providing plumbing, heating, or construction services</li>
            <li>Sending booking confirmations, updates, or invoices</li>
            <li>Improving our customer experience and website</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            3. Data Protection & Security
          </h2>
          <p className="mb-6">
            We take your privacy seriously. All personal data is stored securely
            and protected against unauthorized access or disclosure. We never
            sell, rent, or trade your personal information to third parties.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            4. Sharing of Information
          </h2>
          <p className="mb-6">
            We only share information with trusted partners or subcontractors
            when necessary to complete your requested service. These parties are
            required to maintain confidentiality and comply with GDPR
            regulations.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            5. Cookies & Website Analytics
          </h2>
          <p className="mb-6">
            Our website may use cookies or analytics tools to enhance your
            browsing experience and track website performance. You can disable
            cookies in your browser settings if you prefer not to share this
            data.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            6. Your Rights
          </h2>
          <p className="mb-4">
            Under the UK Data Protection Act and GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Access the personal data we hold about you</li>
            <li>Request corrections or deletion of your data</li>
            <li>Withdraw consent to data processing</li>
            <li>
              File a complaint with the Information Commissioner’s Office (ICO)
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            7. Data Retention
          </h2>
          <p className="mb-6">
            We retain your information only as long as necessary to provide our
            services and comply with legal obligations. Once no longer needed,
            your data is securely deleted or anonymized.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            8. Updates to This Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy occasionally to reflect changes in
            our business or legal requirements. Any updates will be posted on
            this page with a revised “Last Updated” date.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-primary mb-3">
            9. Contact Us
          </h2>
          <p className="mb-2">
            If you have any questions or concerns about this Privacy Policy or
            your personal data, please contact us:
          </p>
          <ul className="list-none mb-2">
            <li>
              📍 <strong>Address:</strong> Aldershot, Hampshire, GU11 3ST
            </li>
            <li>
              📞 <strong>Telephone:</strong> 07453263938
            </li>
            <li>
              ✉️ <strong>Email:</strong> weplumbnheat@gmail.com
            </li>
          </ul>

          <p className="text-sm text-gray-500 mt-6">
            <em>Last Updated: October 2025</em>
          </p>
        </div>
      </div>
    </section>
  );
}
