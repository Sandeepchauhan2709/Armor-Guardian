import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo3.jpeg";
import {
  Home,
  Info,
  Briefcase,
  Mail,
  Linkedin,
} from "lucide-react";

const Footer = () => {

  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1 - Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logoImage} alt="Your Logo" className="h-14 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted security solution providing protection for what
              matters most.
            </p>

            <div className="mt-4 space-y-2">
  <div className="flex items-start md:items-center">
    <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <span className="text-gray-300 text-sm">Mansarowar Parc, Lal kuan, ghaziabad, UP - 201009</span>
  </div>

  <div className="flex items-start md:items-center">
    <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <span className="text-gray-300 text-sm">+91 8799717013</span>
  </div>

  <div className="flex items-start md:items-center">
    <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <span className="text-gray-300 text-sm">hr@armorguardian.in</span>
  </div>
</div>


          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", icon: Home, text: "Home" },
                { path: "/about", icon: Info, text: "About" },
                { path: "/services", icon: Briefcase, text: "Services" },
                { path: "/contact", icon: Mail, text: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                <button
                    onClick={() =>{ navigate(link.path);
                      window.scrollTo(0, 0);
                    }
                    }
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-300 transition focus:outline-none"
                  >
                    <link.icon className="h-4 w-4 mr-2" />
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-3">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { href: "https://www.linkedin.com/in/armor-guardian-59470334b/", icon: Linkedin },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-700 rounded-full p-3 hover:bg-blue-500 transition"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Armor Guardian. All rights
            reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-blue-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Terms of Service
            </a>
            <a href="contact" className="hover:text-blue-300 transition">
              Support
            </a>
          </div>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;
