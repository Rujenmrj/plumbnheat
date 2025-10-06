// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-primary-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/wph-logo-1.png" alt="logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <Link to="/" className="hover:text-primary-300 transition-colors">
              Home
            </Link>
            <Link to="/services" className="hover:text-primary-300 transition-colors">
              Services
            </Link>
            <Link to="/about" className="hover:text-primary-300 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-300 transition-colors">
              Contact
            </Link>
            <button className="ml-4 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-primary-500 px-2 pt-2 pb-4 space-y-1 shadow-md">
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            Services
          </a>
          <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-primary-100 transition">
            About
          </Link>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            Contact
          </a>
          <button className="w-full mt-2 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
