import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Flame, Droplet, Hammer } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [activeUnderlineStyle, setActiveUnderlineStyle] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();
  const menuRefs = useRef({});
  const dropdownTimeoutRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", isDropdown: true },
  ];

  const dropdownLinks = [
    { icon: Flame, label: "Heating", to: "/services/heating" },
    { icon: Droplet, label: "Plumbing", to: "/services/plumbing" },
    { icon: Hammer, label: "Construction", to: "/services/construction" },
  ];

  // Update underline based on active route
  useEffect(() => {
    const activePath = location.pathname.startsWith("/services")
      ? "/services"
      : location.pathname;

    const activeEl = menuRefs.current[activePath];
    if (activeEl) {
      const style = {
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      };
      setActiveUnderlineStyle(style);
      if (!isHovering) {
        setUnderlineStyle(style);
      }
    }
  }, [location, isHovering]);

  const handleHover = (path) => {
    setIsHovering(true);
    const el = menuRefs.current[path];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Return underline to active page
    setUnderlineStyle(activeUnderlineStyle);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
  };

  return (
    <nav className="w-full bg-white text-primary-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logohalf.svg"
                alt="logo"
                className="h-10 w-auto md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center relative">
            <div
              className="flex space-x-8 items-center relative"
              onMouseLeave={handleMouseLeave}
            >
              {/* Single underline */}
              <span
                className="absolute bottom-[-8px] h-[3px] bg-secondary-500 transition-all duration-300 ease-out"
                style={underlineStyle}
              />

              {links.map((link) => (
                <div
                  key={link.name}
                  ref={(el) => (menuRefs.current[link.path] = el)}
                  className="relative flex items-center cursor-pointer"
                  onMouseEnter={() => handleHover(link.path)}
                >
                  {link.isDropdown ? (
                    <div
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button className="flex items-center gap-1 hover:text-primary-300 transition-colors">
                        <span>Services</span>
                        <ChevronDown className="w-4 h-4 mt-[2px]" />
                      </button>

                      {/* Dropdown */}
                      {showDropdown && (
                        <div
                          className="absolute top-full mt-2 left-0 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50"
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {dropdownLinks.map(({ icon: Icon, label, to }) => (
                            <Link
                              key={label}
                              to={to}
                              className="flex items-center px-4 py-3 hover:bg-primary-100 transition"
                              onClick={() => setShowDropdown(false)}
                            >
                              <Icon className="w-8 h-8 mr-3" />
                              <span>{label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-primary-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition"
            >
              Get in Touch
            </Link>
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
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-3 py-2"
            >
              <span className="font-medium">Services</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="ml-4">
                {dropdownLinks.map(({ icon: Icon, label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-100 transition"
                    onClick={() => {
                      setShowDropdown(false);
                      setIsOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md hover:bg-primary-100 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block mx-3 mt-2 px-4 py-2 rounded-lg bg-secondary-500 text-white hover:bg-secondary-400 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
