import React from 'react';
import { Shield, CheckCircle, Target, Award, Flag } from 'lucide-react';
import image from "../assets/bgimg2.jpg";
import missionImage from "../assets/cyber-background2.jpg";
import visionImage from "../assets/cyber-background3.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      {/* Header Banner with Animated Elements */}
      <div className="relative w-full py-16 md:py-12 bg-gradient-to-r from-blue-900 to-blue-800 shadow-xl overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white">About Us</h1>
          {/* <div className="w-24 h-1 bg-blue-400 mx-auto"></div> */}
          {/* <p className="text-center text-blue-100 mt-4 max-w-2xl mx-auto">
            Securing your digital assets with advanced cybersecurity solutions
          </p> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content with Shadow and Better Spacing */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
                  We Prepare You To Face Lethal Cyber Threats
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  With extensive experience working for a range of Public and Private sector Enterprises, 
                  we ensure our clients have a robust system to combat the rising risk of cyber crimes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-medium text-gray-800">CERT-IN Empanelled Information Security Auditor</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-medium text-gray-800">STQC Empanelled Test Lab (SETL)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-medium text-gray-800">Industry-leading penetration testing methodologies</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-0">
              <img 
                src={image} 
                alt="Cybersecurity Expert" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              The principles that guide everything we do at Armor Guardian
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "Security First",
                description: "We prioritize security in everything we do, ensuring your data and systems remain protected."
              },
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: "Precision",
                description: "Our targeted approach identifies and addresses specific vulnerabilities in your systems."
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: "Excellence",
                description: "We strive for excellence in all our security assessments and consultations."
              },
              {
                icon: <Flag className="h-10 w-10 text-blue-600" />,
                title: "Integrity",
                description: "We operate with transparency and honesty in all our business practices."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 text-center mb-3">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission with Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={visionImage} 
                alt="Our Vision" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm inline-block mb-2">Our Vision</div>
                  <h3 className="text-2xl font-bold text-white">Shaping a Secure Digital Future</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                At Armor Guardian, our vision is to be the global leader in vulnerability assessment and penetration testing (VAPT) solutions, setting new benchmarks in cybersecurity. We aim to empower businesses with cutting-edge security frameworks, ensuring a robust digital environment free from cyber threats. Our goal is to create a future where organizations operate with confidence, knowing their digital assets are secure.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={missionImage} 
                alt="Our Mission" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm inline-block mb-2">Our Mission</div>
                  <h3 className="text-2xl font-bold text-white">Delivering Exceptional Security</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide comprehensive, proactive, and tailored VAPT solutions to businesses across all industries. We strive to identify and eliminate vulnerabilities before they can be exploited, ensuring our clients stay ahead of cybercriminals. By leveraging advanced security methodologies and innovative technology, we help organizations strengthen their defenses, maintain compliance, and achieve complete digital resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;