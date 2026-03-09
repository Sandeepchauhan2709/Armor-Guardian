import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Search, 
  GraduationCap, 
  Fingerprint,
  Key,
  Lock,
  Shield,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 500;

    const particles = [];
    const particleCount = 60;

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

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`;
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
  }, []);

  const services = [
    {
      id: 1,
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description: "Assess. Secure. Fortify. We evaluate your organization's digital infrastructure to uncover vulnerabilities, assess controls, and provide ironclad security recommendations.",
      accent: "from-blue-500 to-blue-700",
      glowColor: "blue"
    },
    {
      id: 2,
      icon: <Search className="h-10 w-10" />,
      title: "Security Configuration Review ",
      description: "Expose Weaknesses Before Hackers Do. Identify, evaluate, and prioritize risks to safeguard your business against cyber threats with our strategic security solutions.",
      accent: "from-indigo-500 to-indigo-700",
      glowColor: "indigo"
    },
    {
      id: 3,
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Compliance Security Audit",
      description: "Empower Your Team, Defend Your Business. Equip your workforce with the knowledge and skills to recognize and mitigate cyber threats through expert-led training.",
      accent: "from-purple-500 to-purple-700",
      glowColor: "purple"
    },
    {
      id: 4,
      icon: <Fingerprint className="h-10 w-10" />,
      title: "Infrastructure & Security Audits",
      description: "Track, Trace, Terminate Threats. We assist organizations in uncovering cyber incidents, analyzing attacks, and delivering actionable forensic insights.",
      accent: "from-cyan-500 to-cyan-700",
      glowColor: "cyan"
    },
    {
      id: 5,
      icon: <Key className="h-10 w-10" />,
      title: "Rule Set Review",
      description: "Our Key Management is suitable for the successful implementation of encryption in the Cloud. Our experts help you establish better encryption key management including secure key generation, secure exchange, secure key distribution, rotation, and destruction of encryption keys.",
      accent: "from-teal-500 to-teal-700",
      glowColor: "teal"
    },
    // {
    //   id: 6,
    //   icon: <Lock className="h-10 w-10" />,
    //   title: "Network Security Solutions",
    //   description: "Protect your organization with comprehensive network security solutions that safeguard your data, applications, and infrastructure from external and internal threats.",
    //   accent: "from-pink-500 to-pink-700",
    //   glowColor: "pink"
    // },
  ];

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    console.log('Navigate to:', path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[150px] overflow-hidden flex items-center justify-center">
        {/* Particle Canvas */}
        {/* <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ opacity: 0.6 }}
        /> */}

        {/* Animated Background */}
        {/* <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
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
        </div> */}

        {/* Glowing orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${12 + Math.random() * 20}px`,
              }}
            >
              {["</>", "{}", "[]", "01", "10", "//"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fadeInUp">
          <div className="mb-6 flex justify-center">
            {/* <div className="relative">
              <Shield className="w-20 h-20 text-blue-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-50 animate-pulse" />
            </div> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              Our Services
            </span>
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets
          </p> */}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl overflow-hidden backdrop-blur-md border border-blue-400/20 transition-all duration-500 hover:scale-105 hover:border-blue-400/60 hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
              
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-scanVertical" />
              </div>

              {/* Service Card Header */}
              <div className={`relative bg-gradient-to-r ${service.accent} p-6 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-2h2v2h-2zm0 4v2h2v-2h-2zm-2 2v2h2v-2h-2zm0-4v2h2v-2h-2zm2-2v-2h-2v2h2zm-2-2v-2h2v2h-2zm2-4v-2h-2v2h2zm-2-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      animation: 'moveBackground 20s linear infinite'
                    }}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-sm p-5 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Service Card Body */}
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex justify-center">
                  <div className={`flex items-center gap-2 text-blue-400 font-medium transition-all duration-300 ${
                    hoveredService === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-2h2v2h-2zm0 4v2h2v-2h-2zm-2 2v2h2v-2h-2zm0-4v2h2v-2h-2zm2-2v-2h-2v2h2zm-2-2v-2h2v2h-2zm2-4v-2h-2v2h2zm-2-4v-2h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInLeft">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Need a Custom Security Solution?
                </h2>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  Our team of experts can develop tailored cybersecurity strategies to address your specific business needs and challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="group relative bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Learn More</span>
                  </button>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-2 gap-4 animate-fadeInRight">
                {[
                  { icon: <ShieldCheck className="h-8 w-8" />, title: "24/7 Monitoring", color: "from-blue-500 to-blue-600" },
                  { icon: <Lock className="h-8 w-8" />, title: "Secure Infrastructure", color: "from-purple-500 to-purple-600" },
                  { icon: <Fingerprint className="h-8 w-8" />, title: "Threat Detection", color: "from-pink-500 to-pink-600" },
                  { icon: <GraduationCap className="h-8 w-8" />, title: "Expert Training", color: "from-indigo-500 to-indigo-600" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${feature.color} rounded-xl w-14 h-14 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                  </div>
                ))}
              </div>
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scanVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }

        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scanVertical {
          animation: scanVertical 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   ShieldCheck, 
//   Search, 
//   GraduationCap, 
//   Fingerprint,
//   Key,
//   Lock
// } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       icon: <ShieldCheck className="h-8 w-8" />,
//       title: "Cyber Security Audit",
//       description: "Assess. Secure. Fortify. We evaluate your organization's digital infrastructure to uncover vulnerabilities, assess controls, and provide ironclad security recommendations.",
//       accent: "from-blue-600 to-blue-800"
//     },
//     {
//       id: 2,
//       icon: <Search className="h-8 w-8" />,
//       title: "Vulnerability Assessment & Penetration Tests",
//       description: "Expose Weaknesses Before Hackers Do. Identify, evaluate, and prioritize risks to safeguard your business against cyber threats with our strategic security solutions.",
//       accent: "from-indigo-600 to-indigo-800"
//     },
//     {
//       id: 3,
//       icon: <GraduationCap className="h-8 w-8" />,
//       title: "Cyber Security Training",
//       description: "Empower Your Team, Defend Your Business. Equip your workforce with the knowledge and skills to recognize and mitigate cyber threats through expert-led training.",
//       accent: "from-purple-600 to-purple-800"
//     },
//     {
//       id: 4,
//       icon: <Fingerprint className="h-8 w-8" />,
//       title: "Cyber Forensics",
//       description: "Track, Trace, Terminate Threats. We assist organizations in uncovering cyber incidents, analyzing attacks, and delivering actionable forensic insights.",
//       accent: "from-cyan-600 to-cyan-800"
//     },
//     {
//       id: 5,
//       icon: <Key className="h-8 w-8" />,
//       title: "Encryption Key Management",
//       description: "Our Key Management is suitable for the successful implementation of encryption in the Cloud. Our experts help you establish better encryption key management including secure key generation, secure exchange, secure key distribution, rotation, and destruction of encryption keys.",
//       accent: "from-teal-600 to-teal-800"
//     },
//     {
//       id: 6,
//       icon: <Lock className="h-8 w-8" />,
//       title: "Network Security Solutions",
//       description: "Protect your organization with comprehensive network security solutions that safeguard your data, applications, and infrastructure from external and internal threats.",
//       accent: "from-blue-600 to-blue-800"
//     },
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       {/* Hero Banner */}
//       <div className="relative w-full py-9 bg-gradient-to-r from-blue-900 to-blue-800 shadow-2xl overflow-hidden">
//         <div className="absolute inset-0">
//           {/* Animated Background Elements */}
//           <div className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-10 -top-20 -left-20"></div>
//           <div className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-10 -bottom-20 -right-20"></div>
//           <div className="absolute w-64 h-64 rounded-full bg-blue-600 opacity-10 top-1/4 left-1/3"></div>
          
//           {/* Network Lines Animation */}
//           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <path d="M0,0 L100,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
//             <path d="M100,0 L0,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
//             <path d="M50,0 L50,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
//             <path d="M0,50 L100,50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
//           </svg>
//         </div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
//           {/* <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
//           <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
//             Comprehensive cybersecurity solutions to protect your digital assets and infrastructure
//           </p> */}
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div 
//               key={service.id} 
//               className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
//             >
//               {/* Service Card Header */}
//               <div className={`bg-gradient-to-r ${service.accent} p-6 relative overflow-hidden`}>
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                     <path d="M0,0 L100,100" stroke="white" strokeWidth="0.5"></path>
//                     <path d="M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
//                   </svg>
//                 </div>
                
//                 {/* Icon and Title */}
//                 <div className="relative z-10 flex items-center">
//                   <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mr-4 text-white">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{service.title}</h3>
//                 </div>
//               </div>
              
//               {/* Service Card Body */}
//               <div className="p-6">
//                 <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                
//                 {/* Learn More Button */}
//                 {/* <div className="mt-auto">
//                   <a 
//                     href={`/services/${service.id}`} 
//                     className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
//                   >
//                     Learn more 
//                     <ArrowRight className="ml-2 h-4 w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Security Solution?</h2>
//                 <p className="text-blue-100 mb-6">
//                   Our team of experts can develop tailored cybersecurity strategies to address your specific business needs and challenges.
//                 </p>
//                 <div className="flex space-x-4">
//                   <a 
//                    onClick={()=>navigate('/contact')}
//                     className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
//                   >
//                     Contact Us
//                   </a>
//                   <a 
//                      onClick={() => navigate('/about')}  
//                     className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white/20 p-6 rounded-xl">
//                     <ShieldCheck className="h-8 w-8 text-white mb-3" />
//                     <h3 className="text-lg font-semibold text-white">24/7 Monitoring</h3>
//                   </div>
//                   <div className="bg-white/20 p-6 rounded-xl">
//                     <Lock className="h-8 w-8 text-white mb-3" />
//                     <h3 className="text-lg font-semibold text-white">Secure Infrastructure</h3>
//                   </div>
//                   <div className="bg-white/20 p-6 rounded-xl">
//                     <Fingerprint className="h-8 w-8 text-white mb-3" />
//                     <h3 className="text-lg font-semibold text-white">Threat Detection</h3>
//                   </div>
//                   <div className="bg-white/20 p-6 rounded-xl">
//                     <GraduationCap className="h-8 w-8 text-white mb-3" />
//                     <h3 className="text-lg font-semibold text-white">Expert Training</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;