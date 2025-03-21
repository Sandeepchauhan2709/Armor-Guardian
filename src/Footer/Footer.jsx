import React from "react";
import logoImage from "../assets/logo.jpg";
import {
  Home,
  Info,
  Briefcase,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <img src={logoImage} alt="Your Logo" className="" />
              </div>
              <h2 className="text-2xl font-bold text-white">Armor Guardian</h2>
            </div>
            <p className="text-gray-300 text-center md:text-left">
              Your trusted security solution providing protection for what
              matters most.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition flex items-center"
                >
                  <Info className="h-4 w-4 mr-2" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition flex items-center"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 transition flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Connect With Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-300 transition flex items-center"
              >
                <div className="bg-gray-700 rounded-full p-2 mr-3">
                  <Facebook className="h-4 w-4" />
                </div>
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-300 transition flex items-center"
              >
                <div className="bg-gray-700 rounded-full p-2 mr-3">
                  <Twitter className="h-4 w-4" />
                </div>
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-300 transition flex items-center"
              >
                <div className="bg-gray-700 rounded-full p-2 mr-3">
                  <Instagram className="h-4 w-4" />
                </div>
                Instagram
              </a>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Armor Guardian. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
