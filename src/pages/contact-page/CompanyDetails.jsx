import React from 'react'
import { Phone, Mail, ShieldCheck, MapPin } from "lucide-react";


const CompanyDetails = () => {
  return (
     <section className="pb-12 max-w-7xl mx-auto px-6">
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
  )
}

export default CompanyDetails