import React, { useState, useEffect, useRef } from 'react';
import { Shield, MapPin, Phone, Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, error: false, message: '' });
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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
    const particleCount = 50;

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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // This is where your actual EmailJS code would go
    // Keep your original emailjs.send() call here with the same parameters:
    // emailjs.send('service_tg6s6kq', 'template_zdxqrni', {...}, 'eEg7aSMy09kKt3V2P')
    
    // Simulating for demo purposes
    setTimeout(() => {
      setStatus({
        success: true,
        error: false,
        message: 'Your message has been sent. We will contact you soon!'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[150px] overflow-hidden flex items-center justify-center">
        {/* <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ opacity: 0.6 }}
        />

        <div className="absolute inset-0">
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

        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
              {["</>", "{}", "[]", "01", "10"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
          {/* <div className="mb-6 flex justify-center">
            <div className="relative">
              <Shield className="w-20 h-20 text-blue-400" style={{ animation: 'spin-slow 8s linear infinite' }} />
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-50 animate-pulse" />
            </div>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400" style={{ backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite' }}>
              Contact Us
            </span>
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for complete cybersecurity solutions
          </p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div style={{ animation: 'fadeInLeft 1s ease-out forwards' }}>
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-8 md:p-10 backdrop-blur-md border border-blue-400/20 h-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Get In Touch
                </span>
              </h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Secure your organization with comprehensive protection against evolving cyber threats.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Our Location",
                    content: "Mansarowar Parc, Lal kuan, ghaziabad, Uttar-Pradesh - 201009",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Phone Number",
                    content: "+91 8799717013",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email",
                    content: "hr@armorguardian.in",
                    color: "from-pink-500 to-pink-600"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start bg-gray-800/30 p-5 rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${item.color} rounded-xl p-3 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-blue-400/20">
                <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/armor-guardian-59470334b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <Linkedin className="relative z-10 h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ animation: 'fadeInRight 1s ease-out forwards' }}>
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-2xl p-8 md:p-10 backdrop-blur-md border border-purple-400/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Send Us a Message
              </h2>
              
              {status.success && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-xl backdrop-blur-sm" style={{ animation: 'fadeIn 0.5s ease-out forwards' }}>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    <p className="text-green-300">{status.message}</p>
                  </div>
                </div>
              )}
              
              {status.error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-xl backdrop-blur-sm" style={{ animation: 'fadeIn 0.5s ease-out forwards' }}>
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-3 text-red-400" />
                    <p className="text-red-300">{status.message}</p>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-500 transition duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-500 transition duration-300"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-500 transition duration-300"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your requirements in detail..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-500 transition duration-300 resize-none"
                    required
                  />
                </div>
                
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`group relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg overflow-hidden ${
                      loading 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-blue-500/50'
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center text-white">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </span>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center justify-center text-white">
                          <Send className="mr-2 h-5 w-5" />
                          SEND MESSAGE
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
      `}</style>
    </div>
  );
};

export default Contact;









// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({ success: false, error: false, message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
    

//     emailjs.send(
//       'service_tg6s6kq', 
//       'template_zdxqrni', 
//       {
//         from_email: formData.email,
//         from_name: formData.name,
//         from_phone: formData.phone,
//         subject: formData.subject,
//         message: formData.message,
//       },
//       'eEg7aSMy09kKt3V2P' 
//     )
//     .then((response) => {
//       console.log('Email sent successfully:', response);
//       setStatus({
//         success: true,
//         error: false,
//         message: 'Your message has been sent. We will contact you soon!'
//       });
//       // Reset form
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error('Email sending failed:', error);
//       setStatus({
//         success: false,
//         error: true,
//         message: 'Failed to send your message. Please try again later.'
//       });
//       setLoading(false);
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
//       {/* Header Banner with improved responsiveness */}
//       <div className="relative w-full py-12 bg-gradient-to-r from-blue-800 to-blue-900 shadow-xl mb-8 md:mb-16 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute transform -rotate-12 bg-blue-700 opacity-20 w-full h-32 -top-10 -right-10"></div>
//           <div className="absolute transform -rotate-12 bg-blue-700 opacity-20 w-full h-32 -bottom-10 -left-10"></div>
//         </div>
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative z-10">
//             Contact Us
//           </h1>
//           {/* <p className="text-center text-blue-100 mt-4 max-w-3xl mx-auto text-lg">
//             Get in touch with our team for complete cybersecurity solutions
//           </p> */}
//         </div>
//       </div>

//       <div className="container mx-auto px-4 pb-16">
//         <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto transform transition-all duration-300 hover:shadow-3xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Contact Information */}
//             <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
//               <div className="max-w-md">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
//                 <p className="text-blue-100 mb-8 text-lg">
//                   Secure your organization with comprehensive protection against evolving cyber threats.
//                 </p>

//                 <div className="space-y-8">
//                   <div className="flex items-start">
//                     <div className="bg-blue-700 rounded-full p-3 mr-4 shadow-md flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-white mb-1">Our Location</h3>
//                       <p className="text-blue-100">Mansarowar Parc, Lal kuan, ghaziabad, Uttar-Pradesh - 201009</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-700 rounded-full p-3 mr-4 shadow-md flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-white mb-1">Phone Number</h3>
//                       <p className="text-blue-100">+91 8799717013</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-700 rounded-full p-3 mr-4 shadow-md flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-white mb-1">Email</h3>
//                       <p className="text-blue-100">hr@armorguardian.in</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-12 pt-8 border-t border-blue-700">
//                   <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                   <div className="flex space-x-4">
                   
//                     <a href="https://www.linkedin.com/in/armor-guardian-59470334b/" className="bg-blue-700 hover:bg-blue-600 transition-colors duration-300 p-3 rounded-full">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="p-6 md:p-8 lg:p-10 bg-white">
//               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              
//               {status.success && (
//                 <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
//                   <div className="flex items-center">
//                     <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <p>{status.message}</p>
//                   </div>
//                 </div>
//               )}
              
//               {status.error && (
//                 <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
//                   <div className="flex items-center">
//                     <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <p>{status.message}</p>
//                   </div>
//                 </div>
//               )}
              
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//                     <input
//                       id="name"
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Your name"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-200"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input
//                       id="phone"
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="Phone number"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-200"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Your email"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-200"
//                     required
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
//                   <input
//                     id="subject"
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     placeholder="How can we help you?"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-200"
//                     required
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Please describe your requirements in detail..."
//                     rows="5"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition duration-200"
//                     required
//                   ></textarea>
//                 </div>
                
//                 <div>
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition duration-300 shadow-md ${
//                       loading 
//                         ? 'bg-yellow-300 text-blue-900 cursor-not-allowed' 
//                         : 'bg-yellow-500 hover:bg-yellow-400 text-blue-900 hover:shadow-lg transform hover:-translate-y-1'
//                     }`}
//                   >
//                     {loading ? (
//                       <span className="flex items-center justify-center">
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         SENDING...
//                       </span>
//                     ) : 'SEND MESSAGE'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;