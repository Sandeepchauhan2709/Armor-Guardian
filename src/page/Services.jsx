import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "shield-check",
      title: "Cyber Security Audit",
      description: "🔍 Assess. Secure. Fortify. We evaluate your organization's digital infrastructure to uncover vulnerabilities, assess controls, and provide ironclad security recommendations."
    },
    {
      id: 2,
      icon: "search",
      title: "Vulnerability Assessment, Penetration Tests, & Risk Assessment",
      description: "🛡️ Expose Weaknesses Before Hackers Do. Identify, evaluate, and prioritize risks to safeguard your business against cyber threats with our strategic security solutions."
    },
    {
      id: 3,
      icon: "academic-cap",
      title: "Cyber Security Training",
      description: "🎓 Empower Your Team, Defend Your Business. Equip your workforce with the knowledge and skills to recognize and mitigate cyber threats through expert-led training."
    },
    {
      id: 4,
      icon: "search-circle",
      title: "Cyber Forensics",
      description: "🔎 Track, Trace, Terminate Threats. We assist organizations in uncovering cyber incidents, analyzing attacks, and delivering actionable forensic insights."
    },
    // {
    //   id: 5,
    //   icon: "code",
    //   title: "CIGW Testing",
    //   description: "We identify, analyze, and evaluate the information security risk levels and guide the organization to determine the required level of risk to establish this by utilizing a highly qualified team."
    // },
    {
      id: 6,
      icon: "key",
      title: "Encryption Key Management",
      description: "💻 Our Key Management is suitable for the successful implementation of encryption in the Cloud. Our experts help you establish better encryption key management including secure key generation, secure exchange, secure key distribution, rotation, and destruction of encryption keys."
    },
    // {
    //   id: 7,
    //   icon: "cloud",
    //   title: "Cloud Encryption Solutions",
    //   description: "We provide customized encryption solutions that are a perfect option for the cloud environment. We provide consulting on developing the implementation and strategy."
    // },
    // {
    //   id: 8,
    //   icon: "lock-closed",
    //   title: "Penetration Testing",
    //   description: "A practical demonstration of possible attack scenarios performed with a simulated attack strategy, aiming to discover and exploit security vulnerabilities of your important systems."
    // }
  ];

  // Function to render icon based on icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'shield-check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'search':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'academic-cap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
      case 'search-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'key':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        );
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'lock-closed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
    <div className="min-h-screen bg-gray-200 text-white">
      {/* Header Banner */}
      <div className="relative w-full py-12 bg-blue-900 shadow-lg mb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -top-10 -right-10"></div>
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -bottom-10 -left-10"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Our Services</h1>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-blue-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="rounded-lg p-2 mr-4 bg-blue-900">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-blue-100 mb-6">{service.description}</p>
              </div>
              {/* <div className="px-6 pb-6">
                <button className="px-4 py-2 bg-yellow-500 text-blue-900 font-semibold text-sm hover:bg-yellow-400 transition-colors duration-300 rounded">
                  LEARN MORE
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;