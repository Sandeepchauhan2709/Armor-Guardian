import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Header Banner */}
      <div className="relative w-full py-12 bg-blue-900 shadow-lg mb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -top-10 -right-10"></div>
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -bottom-10 -left-10"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">About Us</h1>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Prepare you to face lethal Cyber Threats</h2>
            <p className="text-blue-100 mb-6">
              With the right amount of experience working for a range of Public 
              and Private sector Enterprises, we make sure that our clients have a 
              robust system to combat the rising risk of cyber crimes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium">CERT-IN Empanelled Information Security Auditor</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium">STQC Empanelled Test Lab (SETL)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/api/placeholder/500/400" alt="Cybersecurity Expert" className="rounded-lg shadow-xl w-full max-w-md object-cover" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-300 mb-2">55K+</div>
            <div className="text-xl">Products Secured</div>
          </div>
          <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-xl">Clients</div>
          </div>
          <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-300 mb-2">100%</div>
            <div className="text-xl">Effective Shielding</div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-800/50 rounded-xl overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/api/placeholder/600/300" alt="Our Vision" className="w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                Our vision is to be India's most reliable information-security service provider which provides end-to-end solutions for organizations — across domains — to protect their digital applications and IT infrastructure.
              </p>
            </div>
          </div>
          <div className="bg-blue-800/50 rounded-xl overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/api/placeholder/600/300" alt="Our Mission" className="w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                Our Mission is to help organizations — across domains — always remain safe from breaches in their digital infrastructure by cyber-intruders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;