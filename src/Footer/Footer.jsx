import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold">Armor Guardian</h2>
            <p className="text-gray-400 mt-2">Your trusted security solution.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Armor Guardian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
