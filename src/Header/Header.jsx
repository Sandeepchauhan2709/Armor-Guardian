import React, { useState, useEffect } from "react";
import { Link, Shield } from "lucide-react";
import logoImage from "../assets/weblogo3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/20 border-b border-blue-400/20"
          : "bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* <Shield className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-180" />
               */}
                {/* <div> */}
          {/* <Link to="/"> */}
            <img src={logoImage} alt="Your Logo" className="h-16 w-auto" />
          {/* </Link> */}
        {/* </div> */}
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                Armor Guardian
              </h1>
              {/* <p className="text-xs text-blue-400 font-medium">Cybersecurity Solutions</p> */}
            </div>
          </div>

         { /* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-2">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/services", label: "Services" },
                  { path: "/contact", label: "Contact" },
                ].map((navItem, index) => (
                  <a
                  key={navItem.path}
                  href={navItem.path}
                  className="group relative text-gray-300 font-medium px-5 py-2 rounded-lg transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  >
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  
                  {/* Scan line effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan top-1/2" />
                  </span>

                  {/* Border glow */}
                  <span className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300" />

                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    {navItem.label}
                    <span className="w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>

                  {/* Active indicator */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
                </nav>

                {/* CTA Button - Desktop */}
          {/* <div className="hidden lg:block">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan top-1/2" />
              </div>
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg flex items-center justify-center group hover:bg-blue-600/40 transition-all duration-300 hover:scale-110"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-blue-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-gray-800/95 backdrop-blur-lg border-t border-blue-400/20 px-4 pb-6 space-y-2">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map((navItem, index) => (
            <a
              key={navItem.path}
              href={navItem.path}
              className="group relative block px-5 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animation: isMenuOpen ? `slideInRight 0.3s ease-out ${index * 0.1}s forwards` : "none",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/80 group-hover:to-purple-600/80 transition-all duration-300" />
              
              {/* Border */}
              <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-lg transition-all duration-300" />
              
              {/* Scan effect */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan top-1/2" />
              </div>

              {/* Text */}
              <span className="relative z-10 flex items-center justify-between text-gray-300 group-hover:text-white font-medium">
                <span>{navItem.label}</span>
                <svg
                  className="w-5 h-5 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}

          {/* Mobile CTA Button */}
          {/* <button className="w-full group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 mt-4">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan top-1/2" />
            </div>
          </button> */}
        </nav>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;










// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logoImage from "../assets/logo3.jpeg";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
        // <div>
        //   <Link to="/">
        //     <img src={logoImage} alt="Your Logo" className="h-12 w-auto" />
        //   </Link>
        // </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/services", label: "Services" },
//             { path: "/contact", label: "Contact" },
//           ].map((navItem) => (
//             <NavLink
//               key={navItem.path}
//               to={navItem.path}
//               className={({ isActive }) =>
//                 `relative text-lg font-medium transition-all duration-200 py-2 px-4 rounded-lg ${
//                   isActive
//                     ? "text-blue-600 "
//                     : "text-gray-600 hover:text-blue-500 "
//                 }`
//               }
//             >
//               {navItem.label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden bg-white p-2 rounded-md text-gray-200 focus:outline-none shadow-md"
//           >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav className="md:hidden flex flex-col bg-white shadow-md py-3 space-y-2">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/services", label: "Services" },
//             { path: "/contact", label: "Contact" },
//           ].map((navItem) => (
//             <NavLink
//               key={navItem.path}
//               to={navItem.path}
//               className={({ isActive }) =>
//                 `block px-5 py-3 text-lg font-medium rounded-md transition-all duration-200 ${
//                   isActive
//                     ? "text-white bg-blue-600 shadow-lg scale-105"
//                     : "text-gray-700 hover:text-white hover:bg-blue-500"
//                 }`
//               }
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {navItem.label}
//             </NavLink>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
