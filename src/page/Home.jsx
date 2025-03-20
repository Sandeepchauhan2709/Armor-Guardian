import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cyberBg from "../assets/cyber-background.jpg";
import logoImage from "../assets/cyber-background2.jpg"; // adjust path if needed
import bgimg from "../assets/bgimg3.jpg";

import {
  Shield,
  ShieldCheck,
  Fingerprint,
  Check,
  User,
  Quote,
} from "lucide-react";

function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  // State for text animation
  const [displayText, setDisplayText] = useState("");
  const fullText = "Digital World";
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Text animation effect
  useEffect(() => {
    const typingSpeed = 150; // milliseconds per character
    const deletingSpeed = 75; // faster when deleting
    const pauseTime = 2000; // pause before deleting

    let timer;

    if (!isDeleting && charIndex < fullText.length) {
      // Still typing
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, pause before delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, restart
      setIsDeleting(false);
    }

    // Blinking cursor effect
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [charIndex, isDeleting, fullText]);

  return (
    <div className="min-h-screen bg-gray-100 text-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen w-full px-4 md:px-8">
        {/* Background image with optional grid overlay */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${cyberBg})`,
              filter: "brightness(0.8) contrast(0.9)", // Corrected 'contrast' + combined
            }}
          ></div>

          {/* Optional Grid Overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] pointer-events-none"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <span className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block backdrop-blur-sm">
              Advanced Cybersecurity Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Securing Your{" "}
              <span className="text-blue-800 relative inline-block">
                {displayText}
                <span
                  className={`${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-700/30 -z-10 transform -rotate-1"></span>
              </span>
              <br />
              One Byte at a Time
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg">
              Armor-Guardian delivers innovative cybersecurity solutions that
              protect your business. Our expertise helps you stay ahead of
              evolving digital threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-black text-white font-medium py-4 px-8 rounded-lg  transition duration-300 shadow-lg hover:-translate-y-1 transform"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-black backdrop-blur-sm text-gray-400 font-medium py-4 px-8 rounded-lg hover:bg-gray-700 border border-gray-700 transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Updated to match your image with hover effects */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-100">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Threat Protection",
              description:
                "Advanced systems to detect and neutralize cyber threats before they impact your business.",
              icon: <Shield className="w-10 h-10 text-blue-400" />,
            },
            {
              title: "24/7 Monitoring",
              description:
                "Continuous surveillance and real-time alerts to protect your systems around the clock.",
              icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
            },
            {
              title: "Network & Data Protection",
              description:
                "Multi-layered security approach to safeguard your valuable data and business networks.",
              icon: <Fingerprint className="w-10 h-10 text-blue-400" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-8 rounded-xl shadow-lg border border-gray-700/80 group hover:bg-blue-800/20 hover:border-blue-600/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-900/20 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 bg-blue-900/30 p-4 rounded-full group-hover:bg-blue-800/50 transition-colors duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img src={logoImage} alt="Your Logo" className="" />
          </div>
          <div className="md:w-3/5">
            <span className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
              Stay Protected
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protecting you from the dangers of cyberspace
            </h2>
            <p className="text-gray-300 mb-8">
              In today's interconnected world, cyber threats are constantly
              evolving. Armor-Guardian's comprehensive security solutions are
              designed to protect your business from all types of digital
              threats.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Malware Protection",
                "Ransomware Defense",
                "Phishing Prevention",
                "Data Breach Protection",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                to="/services"
                className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900/30 backdrop-blur-lg border-y border-blue-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Protected" },
              { number: "150+", label: "Threats Neutralized" },
              { number: "10+", label: "Years Experience" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/20 rounded-lg backdrop-blur-md border border-blue-900/30 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
              Industry Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700 hover:border-blue-600 transition-colors duration-300 transform hover:-translate-y-1 hover:opacity-100"
              >
                <span className="text-gray-400 font-medium">BRAND</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure your data, secure your future.
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't wait until after a breach. Protect your business with
            Armor-Guardian's comprehensive cybersecurity solutions.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-lg border border-blue-500"
          >
            Get Protected Today
          </Link>
        </div>
      </section>

      <section className="simran"></section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700/80 shadow-lg backdrop-blur-md relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-blue-900/10 opacity-70"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <Quote className="w-16 h-16 text-blue-500/30" />
            </div>

            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                "Armor-Guardian's cybersecurity team identified vulnerabilities
                we never knew existed. Since implementing their solutions, we've
                blocked over 200 potential security incidents. The peace of mind
                is invaluable."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 overflow-hidden border border-gray-600">
                  <User className="w-full h-full text-gray-500" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-bold text-white text-lg">Robert Johnson</p>
                  <p className="text-blue-400">CTO, Enterprise Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
