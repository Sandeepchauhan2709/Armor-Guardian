import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo3.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logoImage} alt="Your Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map((navItem) => (
            <NavLink
              key={navItem.path}
              to={navItem.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-200 py-2 px-4 rounded-lg ${
                  isActive
                    ? "text-blue-600 "
                    : "text-gray-600 hover:text-blue-500 "
                }`
              }
            >
              {navItem.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-white p-2 rounded-md text-gray-200 focus:outline-none shadow-md"
          >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col bg-white shadow-md py-3 space-y-2">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map((navItem) => (
            <NavLink
              key={navItem.path}
              to={navItem.path}
              className={({ isActive }) =>
                `block px-5 py-3 text-lg font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-white bg-blue-600 shadow-lg scale-105"
                    : "text-gray-700 hover:text-white hover:bg-blue-500"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {navItem.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
