import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

export default function GasSafeCertification() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Gas Safe Registered",
      description:
        "All our engineers are Gas Safe registered - the only legal requirement for gas work in the UK",
      number: "Register Number: 123456",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fully Qualified",
      description:
        "Our team holds all necessary qualifications including ACS, CCN1, CENWAT, and HTR1 certifications",
      number: "15+ Years Experience",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Full Insurance",
      description:
        "Comprehensive public liability insurance up to £10 million for your complete peace of mind",
      number: "£10M Coverage",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Annual Inspections",
      description:
        "Our credentials are regularly inspected and renewed to maintain the highest standards",
      number: "Annually Verified",
    },
  ];

  return (
    <div className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 rounded-full px-6 py-3 mb-6 font-bold text-sm">
            <Shield className="w-5 h-5" />
            CERTIFIED & QUALIFIED
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Gas Safe Registered Company
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Your safety is our priority. We're fully qualified, registered, and
            insured to handle all your heating and gas work
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border-2 border-primary-200 hover:border-secondary-400 transition-all hover:shadow-lg"
            >
              <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 shadow-md">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {cert.description}
              </p>
              <div className="text-secondary-600 font-bold text-sm">
                {cert.number}
              </div>
            </div>
          ))}
        </div>

        {/* Large Gas Safe Logo Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                What Does Gas Safe Mean?
              </h3>
              <p className="text-primary-100 text-lg mb-6 leading-relaxed">
                Gas Safe Register replaced CORGI in 2009 as the official gas
                registration body in the UK. By law, all gas engineers must be
                on the Gas Safe Register to legally carry out gas work.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-secondary-300" />
                  <span className="text-primary-50">
                    Legal requirement for all gas work in the UK
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-secondary-300" />
                  <span className="text-primary-50">
                    Ensures engineers are qualified and competent
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-secondary-300" />
                  <span className="text-primary-50">
                    Regular inspections and skill assessments
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-secondary-300" />
                  <span className="text-primary-50">
                    Protects you and your property from unsafe work
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
              <div className="bg-secondary-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-20 h-20 text-white" />
              </div>
              <div className="text-gray-700 font-bold text-2xl mb-2">
                Gas Safe Registered
              </div>
              <div className="text-secondary-600 font-bold text-4xl mb-4">
                123456
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Our registration number - verify us at gassaferegister.co.uk
              </p>
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full">
                Verify Our Registration
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-primary-faint rounded-xl p-6">
            <div className="text-secondary-600 font-bold text-3xl mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Gas Safe Engineers</div>
          </div>
          <div className="bg-primary-faint rounded-xl p-6">
            <div className="text-secondary-600 font-bold text-3xl mb-2">
              £10M
            </div>
            <div className="text-gray-600 font-medium">Insurance Cover</div>
          </div>
          <div className="bg-primary-faint rounded-xl p-6">
            <div className="text-secondary-600 font-bold text-3xl mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Annual Services</div>
          </div>
          <div className="bg-primary-faint rounded-xl p-6">
            <div className="text-secondary-600 font-bold text-3xl mb-2">5★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
