import React, { useState } from "react";
import {
  Home,
  Info,
  Briefcase,
  Mail,
  Linkedin,
  Shield,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    // Add your navigation logic here
    console.log("Navigate to:", path);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-2h2v2h-2zm0 4v2h2v-2h-2zm-2 2v2h2v-2h-2zm0-4v2h2v-2h-2zm2-2v-2h-2v2h2zm-2-2v-2h2v2h-2zm2-4v-2h-2v2h2zm-2-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'moveBackground 20s linear infinite'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-6" style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
            <div className="group flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <Shield className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-180" />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  Armor Guardian
                </h2>
                <p className="text-xs text-blue-400 font-medium">Cybersecurity Solutions</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
              Protecting your digital world with cutting-edge cybersecurity solutions. Stay secure, stay ahead.
            </p>

            {/* Security Badge */}
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-lg px-4 py-2 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-300 font-medium">Trusted Security Partner</span>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="flex flex-col items-center md:items-start" style={{ animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
              Contact Info
            </h3>
            <div className="space-y-4 w-full">
              {[
                { icon: MapPin, text: "Ghaziabad, UP", color: "from-blue-500 to-blue-600" },
                { icon: Phone, text: "+91 8799717013", color: "from-purple-500 to-purple-600" },
                { icon: Mail, text: "it@armorguardian.in", color: "from-pink-500 to-pink-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <div className={`relative bg-gradient-to-r ${item.color} rounded-full p-2 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-4 w-4 text-white" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col items-center md:items-start" style={{ animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3 w-full">
              {[
                { path: "/", icon: Home, text: "Home" },
                { path: "/about", icon: Info, text: "About" },
                { path: "/services", icon: Briefcase, text: "Services" },
                { path: "/contact", icon: Mail, text: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group relative flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 w-full p-2 rounded-lg hover:bg-blue-500/10 focus:outline-none overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300" />
                    
                    {/* Icon */}
                    <div className="relative z-10 bg-gray-700/50 group-hover:bg-blue-500/30 rounded-lg p-2 transition-all duration-300">
                      <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Text */}
                    <span className="relative z-10 flex-1 text-left">{link.text}</span>
                    
                    {/* Arrow */}
                    <ChevronRight
                      className={`relative z-10 h-4 w-4 transition-all duration-300 ${
                        hoveredLink === index ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
                      }`}
                    />

                    {/* Border effect */}
                    <div className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Social Media & Newsletter */}
          <div className="flex flex-col items-center md:items-start" style={{ animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
              Connect With Us
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {[
                { href: "https://www.linkedin.com/company/armor-guardian/", icon: Linkedin, color: "from-blue-500 to-blue-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <social.icon className="relative z-10 h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="w-full bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-xs text-gray-400 mb-4">Get the latest security updates and insights.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:scale-105 transition-transform duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Armor Guardian. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;









// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logoImage from "../assets/logo3.jpeg";
// import {
//   Home,
//   Info,
//   Briefcase,
//   Mail,
//   Linkedin,
// } from "lucide-react";

// const Footer = () => {

//   const navigate = useNavigate();
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
//           <div className="flex flex-col items-center md:items-start">
//             <div className="mt-4 space-y-2">
//   <div className="flex items-start md:items-center">
//     <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     </div>
//     <span className="text-gray-300 text-sm">Ghaziabad, UP</span>
//   </div>

//   <div className="flex items-start md:items-center">
//     <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//       </svg>
//     </div>
//     <span className="text-gray-300 text-sm">+91 8799717013</span>
//   </div>

//   <div className="flex items-start md:items-center">
//     <div className="bg-blue-700 rounded-full p-2 mr-3 flex-shrink-0">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//       </svg>
//     </div>
//     <span className="text-gray-300 text-sm">it@armorguardian.in</span>
//   </div>
// </div>


//           </div>

//           {/* Column 2 - Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-blue-300 mb-3">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 { path: "/", icon: Home, text: "Home" },
//                 { path: "/about", icon: Info, text: "About" },
//                 { path: "/services", icon: Briefcase, text: "Services" },
//                 { path: "/contact", icon: Mail, text: "Contact" },
//               ].map((link, index) => (
//                 <li key={index}>
//                 <button
//                     onClick={() =>{ navigate(link.path);
//                       window.scrollTo(0, 0);
//                     }
//                     }
//                     className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-300 transition focus:outline-none"
//                   >
//                     <link.icon className="h-4 w-4 mr-2" />
//                     {link.text}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 - Social Media */}
//           <div>
//             <h3 className="text-lg font-semibold text-blue-300 mb-3">
//               Follow Us
//             </h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               {[
//                 { href: "https://www.linkedin.com/company/armor-guardian/", icon: Linkedin },
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className="bg-gray-700 rounded-full p-3 hover:bg-blue-500 transition"
//                 >
//                   <social.icon className="h-5 w-5 text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
















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