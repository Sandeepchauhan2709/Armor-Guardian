import React, { useState, useEffect, useRef } from "react";
import { Shield, ShieldCheck, Fingerprint, Check, Box, Clock } from "lucide-react";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Digital World";
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Text animation effect
  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseTime = 2000;

    let timer;

    if (!isDeleting && charIndex < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
    }

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [charIndex, isDeleting, fullText]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Floating cyber elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              fontSize: `${12 + Math.random() * 20}px`,
            }}
          >
            {["01", "10", "11", "00", "</>", "{}"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen px-4 sm:px-6 lg:px-12 flex items-center justify-center">
        {/* 3D Background Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)),
              repeating-linear-gradient(
                0deg,
                rgba(59, 130, 246, 0.1) 0px,
                transparent 1px,
                transparent 40px,
                rgba(59, 130, 246, 0.1) 41px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(59, 130, 246, 0.1) 0px,
                transparent 1px,
                transparent 40px,
                rgba(59, 130, 246, 0.1) 41px
              )
            `,
            transform: `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.5}px)`,
            transformOrigin: 'center top',
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              left: `${40 + mousePosition.x * 0.02}%`,
              top: `${30 + mousePosition.y * 0.02}%`,
              transition: 'all 0.3s ease-out',
            }}
          />
          <div
            className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              right: `${30 - mousePosition.x * 0.01}%`,
              bottom: `${20 - mousePosition.y * 0.01}%`,
              animationDelay: '1s',
              transition: 'all 0.3s ease-out',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-7xl px-4 md:px-6 animate-fadeInUp">
          {/* <div className="mb-6 relative">
            <Shield className="w-20 h-20 text-blue-400 animate-spin-slow" />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-50 animate-pulse" />
          </div> */}

          {/* <span className="bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-blue-400/30 animate-slideDown">
            Advanced Cybersecurity Solutions
          </span> */}

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              Armor Up with Your Digital Guardian
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl mt-4 block animate-slideUp">
              Unbreakable Security for an Unpredictable World
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mt-15 mb-8 leading-relaxed backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-2xl border border-blue-400/20 animate-fadeIn shadow-2xl max-w-3xl">
            We help organizations protect their applications, infrastructure, and data through structured
cybersecurity assessments, audits, and secure software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Our Services</span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan"
                    style={{ top: `${i * 33}%`, animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </button>

            <button className="group relative bg-transparent text-white font-medium py-4 px-8 rounded-xl border-2 border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-blue-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              // title: "Threat Protection",
              title: "Audit-ready reports",
              // description: "Stay One Step Ahead – Detect and Neutralize Threats Before They Strike. Proactive Defense, Unmatched Security. Eliminating Cyber Threats Before They Disrupt Your Business.",
              description: "Clear, compliant, and evidence-backed reports designed for smooth and hassle-free audits.",
              icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
              delay: "0s",
            },
            {
              // title: "24/7 Monitoring",
              title: "Risk-focused security testing",
              // description: "Around-the-Clock Protection – Because Cyber Threats Never Sleep. Real-Time Threat Detection, 24/7 Peace of Mind. We Watch, So You Don't Have To.",
              description: "Security strategies designed to identify, prioritize, and mitigate the most critical risks to your business.",
              icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
              delay: "0.2s",
            },
            {
              // title: "Network & Data Protection",
              title: "Secure-by-design development approach",
              // description: "Fortifying Your Digital Perimeter – Secure, Resilient, Unbreakable. Multi-Layered Security for Ultimate Data Protection. Your Data, Our Priority – Because Every Bit Matters.",
              description: "Security is built into every stage of development to reduce risks and prevent vulnerabilities from the start.",
              icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
              delay: "0.4s",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-blue-900/30 p-8 rounded-2xl backdrop-blur-md border border-blue-400/20 transition-all duration-500 hover:scale-105 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/30 animate-fadeInUp"
              style={{ animationDelay: feature.delay }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanVertical" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative p-4 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                    <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/5 relative group animate-fadeInLeft">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500">
                <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-white/80 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10" />
            </div>

            <div className="md:w-3/5 animate-fadeInRight">
              <span className="text-white text-3xl font-semibold tracking-wider uppercase mb-4 block">
                WHAT WE DO
              </span>
              <h2 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {/* Comprehensive Cybersecurity and Secure Technology Services */}
                 {/* <br /> */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Comprehensive Cybersecurity and Secure Technology Services
                </span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {/* At Armor Guardian, we are committed to being the global leader in vulnerability assessment and penetration testing (VAPT). Our mission is to set new standards in cybersecurity by empowering businesses with advanced security frameworks, ensuring a safe, threat-free digital environment. */}
                We provide cybersecurity and technology consulting services designed to help businesses
identify risks, meet compliance requirements, and build reliable digital systems. Our
engagements are practical, structured, and aligned with real-world threats and audit
expectations.
<br/>
<br/>
Our team works closely with startups, enterprises, and growing organizations to deliver security
assessments, audits, and secure application development, ensuring technology remains
both resilient and scalable.
              </p>
              {/* <h3 className="text-2xl font-bold text-white mb-4">Why Choose Armor Guardian?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We believe in a proactive approach to cybersecurity, helping organizations stay ahead of cyber threats before they become a problem. Our expert-driven solutions ensure digital resilience, allowing you to operate with confidence while safeguarding your most valuable assets.
              </p> */}

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <Box className="w-6 h-6 text-blue-400" />,
                    title: "Threat Protection",
                    desc: "Stay one step ahead of cybercriminals with intelligent defense systems that identify and neutralize threats before they infiltrate your network.",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-400" />,
                    title: "24/7 Monitoring",
                    desc: "With our round-the-clock security monitoring, we provide real-time threat detection and rapid incident response to keep your business secure—anytime, anywhere.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start bg-gradient-to-br from-gray-800/50 to-blue-900/30 p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-10 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">READ MORE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5 relative animate-fadeInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 group">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-32 h-32 text-white/80 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10" />
            </div>
          </div>

          <div className="md:w-3/5 animate-fadeInRight">
            {/* <span className="bg-blue-500/20 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 inline-block border border-blue-400/30">
              Stay Protected
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Uncover. Secure. Fortify
              </span>
              <br />
              Because Every Vulnerability Matters
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              In today's interconnected world, cyber threats are constantly evolving. Armor-Guardian's comprehensive security solutions are designed to protect your business from all types of digital threats.
            </p>

            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Malware Protection",
                "Ransomware Defense",
                "Phishing Prevention",
                "Data Breach Protection",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-4 rounded-xl border border-blue-400/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div> */}

            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-10 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0tMi0ydi0yaDJ2MmgtMnptMi00di0yaC0ydjJoMnptLTItNHYtMmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center animate-fadeInUp">
          <div className="mb-8">
            <Shield className="w-20 h-20 text-blue-400 mx-auto animate-spin-slow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Protect Your Data, Shield Your Future
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            At Armor Guardian, We Keep You One Step Ahead – Secure Before the Threat Strikes!
          </p>
          
          <button className="group relative bg-white text-blue-900 font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:scale-110 overflow-hidden text-lg">
            <span className="relative z-10">Get Protected Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan"
                  style={{ top: `${i * 20}%`, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scanVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }

        .animate-scanVertical {
          animation: scanVertical 2s linear infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;



















// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import cyberBg from "../assets/hero.jpg";
// import logoImage from "../assets/cyber-background2.jpg"; // adjust path if needed
// import bgimg from "../assets/bgimg3.jpg";
// import bgaboutimg from "../assets/bgimg.jpg";

// import {
//   Shield,
//   ShieldCheck,
//   Fingerprint,
//   Check,
//   Box,
//   Clock,
// } from "lucide-react";

// function Home() {
//   // const [showTooltip, setShowTooltip] = useState(false);
//   // State for text animation
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "Digital World";
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [cursorVisible, setCursorVisible] = useState(true);

//   // Text animation effect
//   useEffect(() => {
//     const typingSpeed = 150; // milliseconds per character
//     const deletingSpeed = 75; // faster when deleting
//     const pauseTime = 2000; // pause before deleting

//     let timer;

//     if (!isDeleting && charIndex < fullText.length) {
//       // Still typing
//       timer = setTimeout(() => {
//         setDisplayText(fullText.substring(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, typingSpeed);
//     } else if (!isDeleting && charIndex === fullText.length) {
//       // Finished typing, pause before delete
//       timer = setTimeout(() => {
//         setIsDeleting(true);
//       }, pauseTime);
//     } else if (isDeleting && charIndex > 0) {
//       // Deleting
//       timer = setTimeout(() => {
//         setDisplayText(fullText.substring(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//       }, deletingSpeed);
//     } else if (isDeleting && charIndex === 0) {
//       // Finished deleting, restart
//       setIsDeleting(false);
//     }

//     // Blinking cursor effect
//     const cursorTimer = setInterval(() => {
//       setCursorVisible((prev) => !prev);
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//       clearInterval(cursorTimer);
//     };
//   }, [charIndex, isDeleting, fullText]);

//   return (
//     <div className="min-h-screen bg-gray-100 text-white">
//       {/* Hero Section with Background Image */}
//       <section className="relative w-full min-h-screen px-4 sm:px-6 lg:px-12 flex items-center justify-center">
//   {/* Background Layer */}
//   <div className="absolute inset-0 z-0">
//     {/* Background Image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${cyberBg})`,
//         filter: "brightness(0.8) contrast(0.9)",
//       }}
//     ></div>
//     {/* Grid Overlay */}
//     <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] pointer-events-none"></div>
//   </div>

//   {/* Foreground Content */}
//   <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 md:px-6">
//     <span className="bg-blue-900/30 text-blue-100 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
//       Advanced Cybersecurity Solutions
//     </span>
//     <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//       Armor Up with Your Digital Guardian
//       Unbreakable Security for an Unpredictable World.
//     </h1>
//     <p className="text-sm sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed backdrop-blur-sm bg-black/20 p-3 sm:p-4 rounded-lg">
//       Armor-Guardian delivers innovative cybersecurity solutions that protect
//       your business. Our expertise helps you stay ahead of evolving digital
//       threats.
//     </p>
//     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 ">
//       <Link
//         to="/services"
//         className="bg-gray-900 text-white text-sm sm:text-base font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition duration-300 shadow-lg hover:-translate-y-1"
//       >
//         Our Services
//       </Link>
//       <Link
//         to="/contact"
//         className="bg-gray-900 text-white text-sm sm:text-base font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition duration-300 shadow-lg hover:-translate-y-1"
//       >
//         Contact Us
//       </Link>
//     </div>
//   </div>
// </section>


//       {/* Feature Cards Section - Updated to match your image with hover effects */}
//       <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//   <div className="grid md:grid-cols-3 gap-6">
//     {[
//       {
//         title: "Threat Protection",
//         description: `Stay One Step Ahead – Detect and Neutralize Threats Before They Strike.
//           Proactive Defense, Unmatched Security.
//           Eliminating Cyber Threats Before They Disrupt Your Business.`,
//         icon: <Shield className="w-10 h-10 text-white" />,
//       },
//       {
//         title: "24/7 Monitoring",
//         description: `Around-the-Clock Protection – Because Cyber Threats Never Sleep.
//           Real-Time Threat Detection, 24/7 Peace of Mind.         
//           We Watch, So You Don’t Have To.`,
//         icon: <ShieldCheck className="w-10 h-10 text-white" />,
//       },
//       {
//         title: "Network & Data Protection",
//         description: `Fortifying Your Digital Perimeter – Secure, Resilient, Unbreakable.
//           Multi-Layered Security for Ultimate Data Protection.
//           Your Data, Our Priority – Because Every Bit Matters.`,
//         icon: <Fingerprint className="w-10 h-10 text-white" />,
//       },
//     ].map((feature, index) => (
//       <div
//         key={index}
//         className="bg-blue-950 p-8 rounded-xl shadow-lg border border-gray-700 group transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative"
//       >
//         {/* Background glow effect on hover */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

//         <div className="relative z-10">
//           {/* Icon & Title in a Row */}
//           <div className="flex items-center gap-3 mb-4">
//             <div className="bg-blue-600 p-3 rounded-full shadow-lg group-hover:bg-blue-500 transition-all duration-300">
//               {feature.icon}
//             </div>
//             <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
//               {feature.title}
//             </h3>
//           </div>

//           <p className="text-gray-100 group-hover:text-gray-100 transition-colors duration-300">
//             {feature.description}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>



//       {/* About Section - Updated */}
//       <section className="about py-16 ">
//         <div className="max-w-6xl mx-auto px-4 md:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             {/* Left side with image */}
//             <div className="md:w-2/5 relative">
//               <div className="rounded-lg overflow-hidden shadow-xl relative">
//                 <img
//                   src={bgaboutimg}
//                   alt="Professional cybersecurity team"
//                   className="w-full h-132 object-cover"
//                 />
//                 {/* <div className="absolute bottom-0 left-0 bg-blue-600 text-white py-3 px-6 rounded-tr-lg">
//                   <span className="text-md font-bold">Armor Guardian</span>
//                 </div> */}
//               </div>
//             </div>

//             {/* Right side with content */}
//             <div className="md:w-3/5">
//               <div className="mb-6">
//                 <span className="text-blue-600 text-3xl font-medium">
//                   About Our Company
//                 </span>
//                 <h2 className="text-3xl font-bold text-gray-800 mt-2">
//                 Cutting-Edge Cybersecurity Solutions <br /> for Every Business
//                 </h2>
//                 <p className="text-gray-800 mt-4">
//                 At Armor Guardian, we are committed to being the global leader in vulnerability assessment and penetration testing (VAPT). Our mission is to set new standards in cybersecurity by empowering businesses with advanced security frameworks, ensuring a safe, threat-free digital environment.
//                 </p>
//                 <h2 className="text-gray-800 font-bold mt-2 text-2xl">Why Choose Armor Guardian?</h2>
//                 <p className="text-gray-800 mt-2">
//                 We believe in a proactive approach to cybersecurity, helping organizations stay ahead of cyber threats before they become a problem. Our expert-driven solutions ensure digital resilience, allowing you to operate with confidence while safeguarding your most valuable assets.
//                 </p>
//               </div>

//               {/* Feature boxes in grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                 <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Box size={20} className="text-blue-600" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       Threat Protection
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                     Stay one step ahead of cybercriminals with intelligent defense systems that identify and neutralize threats before they infiltrate your network.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Clock size={20} className="text-blue-600" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       24/7 Monitoring
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                     With our round-the-clock security monitoring, we provide real-time threat detection and rapid incident response to keep your business secure—anytime, anywhere.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <Link
//                   to="/about"
//                   className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700  transition duration-300"
//                 >
//                   READ MORE
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Threats Section */}
//       <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-2/5">
//             <img src={logoImage} alt="Your Logo" className="rounded-lg" />
//           </div>
//           <div className="md:w-3/5">
//             <span className="bg-blue-900/30 text-blue-600 text-lg font-medium px-3 py-1 rounded-full mb-6 inline-block">
//               Stay Protected
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
//               Uncover. Secure. Fortify – Because Every Vulnerability Matters
//             </h2>
//             <p className="text-gray-800 mb-8 font-bold">
//               In today's interconnected world, cyber threats are constantly
//               evolving. Armor-Guardian's comprehensive security solutions are
//               designed to protect your business from all types of digital
//               threats.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {[
//                 "Malware Protection",
//                 "Ransomware Defense",
//                 "Phishing Prevention",
//                 "Data Breach Protection",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <Check className="w-5 h-5 text-blue-600" />
//                   <span className="text-gray-800 font-bold">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-4">
//               <Link
//                 to="/services"
//                 className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Stats Section */}
//       {/* <section className="py-16 bg-blue-900/30 backdrop-blur-lg border-y border-blue-900/50">
//         <div className="max-w-6xl mx-auto px-4 md:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "500+", label: "Clients Protected" },
//               { number: "150+", label: "Threats Neutralized" },
//               { number: "10+", label: "Years Experience" },
//               { number: "98%", label: "Success Rate" },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-800/20 rounded-lg backdrop-blur-md border border-blue-900/30 transform hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="text-4xl font-bold mb-2 text-white">
//                   {stat.number}
//                 </div>
//                 <div className="text-blue-200">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       {/* Trust Section */}
//       {/* <section className="py-16 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 md:px-8">
//           <div className="text-center mb-12">
//             <span className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-6 inline-block">
//               Industry Trust
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Trusted by Industry Leaders
//             </h2>
//             <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div
//                 key={item}
//                 className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700 hover:border-blue-600 transition-colors duration-300 transform hover:-translate-y-1 hover:opacity-100"
//               >
//                 <span className="text-gray-400 font-medium">BRAND</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* CTA Section */}
//       <section
//         className="py-20 bg-cover bg-center bg-no-repeat relative"
//         style={{
//           backgroundImage: `url(${bgimg})`,
//         }}
//       >
//         {/* Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Protect Your Data, Shield Your Future.
//           </h2>
//           <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
//             At Armor Guardian, We Keep You One Step Ahead – Secure Before the
//             Threat Strikes!"
//           </p>
//           <Link
//             to="/contact"
//             className="bg-blue-600 text-white font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-lg border border-blue-500"
//           >
//             Get Protected Today
//           </Link>
//         </div>
//       </section>

//       {/* Testimonial Section */}
   
//     </div>
//   );
// }

// export default Home;
