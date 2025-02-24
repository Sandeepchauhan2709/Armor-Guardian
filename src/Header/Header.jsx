import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Flex container for Logo & Desktop Nav */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl tracking-tight hover:text-blue-100 transition duration-200">
              Yaha Logo aayega
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white font-medium border-b-2 border-white py-2" 
                  : "text-blue-100 hover:text-white py-2 border-b-2 border-transparent hover:border-blue-200 transition duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white font-medium border-b-2 border-white py-2" 
                  : "text-blue-100 hover:text-white py-2 border-b-2 border-transparent hover:border-blue-200 transition duration-200"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white font-medium border-b-2 border-white py-2" 
                  : "text-blue-100 hover:text-white py-2 border-b-2 border-transparent hover:border-blue-200 transition duration-200"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-white font-medium border-b-2 border-white py-2" 
                  : "text-blue-100 hover:text-white py-2 border-b-2 border-transparent hover:border-blue-200 transition duration-200"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-md p-1"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 py-3 bg-red-700 shadow-lg flex flex-col space-y-2">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "block py-3 px-4 text-white bg-blue-800 rounded-md font-medium" 
                : "block py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition duration-150"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "block py-3 px-4 text-white bg-blue-800 rounded-md font-medium" 
                : "block py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition duration-150"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive 
                ? "block py-3 px-4 text-white bg-blue-800 rounded-md font-medium" 
                : "block py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition duration-150"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "block py-3 px-4 text-white bg-blue-800 rounded-md font-medium" 
                : "block py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition duration-150"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
