import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cyberBg from "../assets/hero.jpg";
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
              Hackers Never Rest
              {/* <span className="text-blue-800 relative inline-block">
                {displayText}
                <span
                  className={`${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-700/30 -z-10 transform -rotate-1"></span>
              </span> */}
              <br />
               Neither Do We
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg">
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
               `Stay One Step Ahead – Detect and Neutralize Threats Before They Strike.
                Proactive Defense, Unmatched Security.
                Eliminating Cyber Threats Before They Disrupt Your Business.`,
              icon: <Shield className="w-10 h-10 text-blue-400" />,
            },
            {
              title: "24/7 Monitoring",
              description:
                `Around-the-Clock Protection – Because Cyber Threats Never Sleep.
                 Real-Time Threat Detection, 24/7 Peace of Mind.         
                 We Watch, So You Don’t Have To.`,
              icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
            },
            {
              title: "Network & Data Protection",
              description:
                `Fortifying Your Digital Perimeter – Secure, Resilient, Unbreakable.
                 Multi-Layered Security for Ultimate Data Protection.
                 Your Data, Our Priority – Because Every Bit Matters.`,
              icon: <Fingerprint className="w-10 h-10 text-blue-400" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-8 rounded-xl shadow-lg border border-gray-700/80 group  transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Background glow effect on hover */}
              <div className="absolute inset-0  transition-all duration-300"></div>

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
            <span className="bg-blue-900/30 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
              Stay Protected
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Uncover. Secure. Fortify – Because Every Vulnerability Matters
            </h2>
            <p className="text-gray-800 mb-8 font-bold">
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
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-800 font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                to="/services"
                className="bg-gray-800 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-blue-900/30 backdrop-blur-lg border-y border-blue-900/50">
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
      </section> */}

      {/* Trust Section */}
      {/* <section className="py-16 bg-gray-900">
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
      </section> */}

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
           Protect Your Data, Shield Your Future.
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          At Armor Guardian, We Keep You One Step Ahead – Secure Before the Threat Strikes!"
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-lg border border-blue-500"
          >
            Get Protected Today
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-900/30 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
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
              Armor-Guardian's expertise in cybersecurity has been a game-changer for our organization. Their proactive approach helped us uncover and mitigate vulnerabilities before they could be exploited. Since partnering with them, we've significantly strengthened our defenses and have seen a drastic reduction in security threats. Their dedication to keeping us secure gives us the confidence to focus on growing our business without fear of cyber risks.
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
