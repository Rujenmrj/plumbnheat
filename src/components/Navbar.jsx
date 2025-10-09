import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Wrench, Hammer } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full bg-white text-primary-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logohalf.svg" alt="logo" className="h-10 w-auto md:h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-primary-300 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className="hover:text-primary-300 transition-colors flex items-center gap-1"
                aria-expanded={showDropdown}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 mt-[2px]" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100 transition-all duration-150 z-50 ${
                  showDropdown
                    ? "opacity-100 translate-y-1 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
                // Ensure small overlap to prevent hover gap
                style={{ marginTop: "-2px" }}
              >
                <Link
                  to="/services/heating-plumbing"
                  className="flex items-center px-4 py-3 hover:bg-primary-100 transition"
                >
                  <Wrench className="w-8 h-8 mr-3" />
                  <span>Heating & Plumbing</span>
                </Link>
                <Link
                  to="/services/construction"
                  className="flex items-center px-4 py-3 hover:bg-primary-100 transition"
                >
                  <Hammer className="w-8 h-8 mr-3" />
                  <span>Construction</span>
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="hover:text-primary-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-300 transition-colors"
            >
              Contact
            </Link>
            <button className="ml-4 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary-500" />
              ) : (
                <Menu className="w-6 h-6 text-primary-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-primary-500 px-2 pt-2 pb-4 space-y-1 shadow-md">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-3 py-2"
            >
              <span className="font-medium">Services</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {showDropdown && (
              <div className="ml-4">
                <Link
                  to="/services/heating-plumbing"
                  className="block px-3 py-1 hover:bg-primary-100 rounded-md"
                >
                  Heating & Plumbing
                </Link>
                <Link
                  to="/services/construction"
                  className="block px-3 py-1 hover:bg-primary-100 rounded-md"
                >
                  Construction
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
          >
            Contact
          </Link>
          <button className="w-full mt-2 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
