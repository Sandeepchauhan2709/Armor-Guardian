import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  GraduationCap, 
  Fingerprint,
  Key,
  Lock,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Cyber Security Audit",
      description: "Assess. Secure. Fortify. We evaluate your organization's digital infrastructure to uncover vulnerabilities, assess controls, and provide ironclad security recommendations.",
      accent: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      icon: <Search className="h-8 w-8" />,
      title: "Vulnerability Assessment & Penetration Tests",
      description: "Expose Weaknesses Before Hackers Do. Identify, evaluate, and prioritize risks to safeguard your business against cyber threats with our strategic security solutions.",
      accent: "from-indigo-600 to-indigo-800"
    },
    {
      id: 3,
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Cyber Security Training",
      description: "Empower Your Team, Defend Your Business. Equip your workforce with the knowledge and skills to recognize and mitigate cyber threats through expert-led training.",
      accent: "from-purple-600 to-purple-800"
    },
    {
      id: 4,
      icon: <Fingerprint className="h-8 w-8" />,
      title: "Cyber Forensics",
      description: "Track, Trace, Terminate Threats. We assist organizations in uncovering cyber incidents, analyzing attacks, and delivering actionable forensic insights.",
      accent: "from-cyan-600 to-cyan-800"
    },
    {
      id: 5,
      icon: <Key className="h-8 w-8" />,
      title: "Encryption Key Management",
      description: "Our Key Management is suitable for the successful implementation of encryption in the Cloud. Our experts help you establish better encryption key management including secure key generation, secure exchange, secure key distribution, rotation, and destruction of encryption keys.",
      accent: "from-teal-600 to-teal-800"
    },
    {
      id: 6,
      icon: <Lock className="h-8 w-8" />,
      title: "Network Security Solutions",
      description: "Protect your organization with comprehensive network security solutions that safeguard your data, applications, and infrastructure from external and internal threats.",
      accent: "from-blue-600 to-blue-800"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Hero Banner */}
      <div className="relative w-full py-9 bg-gradient-to-r from-blue-900 to-blue-800 shadow-2xl overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Background Elements */}
          <div className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-10 -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-10 -bottom-20 -right-20"></div>
          <div className="absolute w-64 h-64 rounded-full bg-blue-600 opacity-10 top-1/4 left-1/3"></div>
          
          {/* Network Lines Animation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M100,0 L0,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M50,0 L50,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
            <path d="M0,50 L100,50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          {/* <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets and infrastructure
          </p> */}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              {/* Service Card Header */}
              <div className={`bg-gradient-to-r ${service.accent} p-6 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100" stroke="white" strokeWidth="0.5"></path>
                    <path d="M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
                  </svg>
                </div>
                
                {/* Icon and Title */}
                <div className="relative z-10 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mr-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              {/* Service Card Body */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                
                {/* Learn More Button */}
                {/* <div className="mt-auto">
                  <a 
                    href={`/services/${service.id}`} 
                    className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more 
                    <ArrowRight className="ml-2 h-4 w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Security Solution?</h2>
                <p className="text-blue-100 mb-6">
                  Our team of experts can develop tailored cybersecurity strategies to address your specific business needs and challenges.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="/contact" 
                    className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="/about" 
                    className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 p-6 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-lg font-semibold text-white">24/7 Monitoring</h3>
                  </div>
                  <div className="bg-white/20 p-6 rounded-xl">
                    <Lock className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-lg font-semibold text-white">Secure Infrastructure</h3>
                  </div>
                  <div className="bg-white/20 p-6 rounded-xl">
                    <Fingerprint className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-lg font-semibold text-white">Threat Detection</h3>
                  </div>
                  <div className="bg-white/20 p-6 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-lg font-semibold text-white">Expert Training</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;