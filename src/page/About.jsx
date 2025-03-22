import React from 'react';
import image from "../assets/bgimg2.jpg"
// import visionimage from "../assets/vision.jpg"
import missionimage from "../assets/cyber-background2.jpg"
import visionimage from "../assets/cyber-background3.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">We Prepare you to face lethal Cyber Threats</h2>
            <p className="text-gray-700 font-bold mb-6">
              With the right amount of experience working for a range of Public 
              and Private sector Enterprises, we make sure that our clients have a 
              robust system to combat the rising risk of cyber crimes.
            </p>

            {/* <div className="space-y-3">
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
            </div> */}

          </div>
          <div className="flex justify-center">
            <img src={image} alt="Cybersecurity Expert" className="rounded-lg shadow-xl w-full max-w-md object-cover" />
          </div>
        </div>


        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-800/50 rounded-xl overflow-hidden">
            <div className="h-90 overflow-hidden">
              <img src={missionimage} alt="Our Vision" className="w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Vision</h3>
              <p className="text-white">
              At Armor Guardian, our vision is to be the global leader in vulnerability assessment and penetration testing (VAPT) solutions, setting new benchmarks in cybersecurity. We aim to empower businesses with cutting-edge security frameworks, ensuring a robust digital environment free from cyber threats. Our goal is to create a future where organizations operate with confidence, knowing their digital assets are secure.              </p>
            </div>
          </div>
          <div className="bg-blue-800/50 rounded-xl overflow-hidden">
            <div className="h-90 overflow-hidden">
              <img src={visionimage} alt="Our Mission" className="w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h3>
              <p className="text-white">
              Our mission is to provide comprehensive, proactive, and tailored VAPT solutions to businesses across all industries. We strive to identify and eliminate vulnerabilities before they can be exploited, ensuring our clients stay ahead of cybercriminals. By leveraging advanced security methodologies and innovative technology, we help organizations strengthen their defenses, maintain compliance, and achieve complete digital resilience.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;