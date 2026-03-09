import { Shield, CheckCircle, Target, Award, Flag, Eye, Crosshair } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white">
      {/* Header Banner */}
      <div className="relative w-full min-h-[150px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900">
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
                )
              `,
            }}
          />
        </div>

        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              About Us
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Prepare You To Face{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Lethal Cyber Threats
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                With extensive experience working for a range of Public and Private sector Enterprises, 
                we ensure our clients have a robust system to combat the rising risk of cyber crimes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Industry-leading penetration testing methodologies",
                  "Advanced threat detection and prevention",
                  "24/7 security monitoring and response",
                  "Compliance and regulatory expertise"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-4 rounded-xl border border-blue-400/20 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="bg-blue-500/20 rounded-full p-2 mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30">
                <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-white/80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              The principles that guide everything we do at Armor Guardian
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-400" />,
                title: "Security First",
                description: "We prioritize security in everything we do, ensuring your data and systems remain protected.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Target className="h-12 w-12 text-purple-400" />,
                title: "Precision",
                description: "Our targeted approach identifies and addresses specific vulnerabilities in your systems.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Award className="h-12 w-12 text-pink-400" />,
                title: "Excellence",
                description: "We strive for excellence in all our security assessments and consultations.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: <Flag className="h-12 w-12 text-indigo-400" />,
                title: "Integrity",
                description: "We operate with transparency and honesty in all our business practices.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/50 to-blue-900/30 p-8 rounded-2xl backdrop-blur-md border border-blue-400/20 transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <div className={`bg-gradient-to-r ${value.color} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 backdrop-blur-md">
            <div className="relative h-64 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Eye className="w-24 h-24 text-white/80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 text-white rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 mb-3">
                    <Eye className="w-4 h-4" />
                    Our Vision
                  </div>
                  <h3 className="text-3xl font-bold text-white">Shaping a Secure Digital Future</h3>
                </div>
              </div>
            </div>
            
            <div className="p-8 relative z-10">
              <p className="text-gray-300 leading-relaxed">
                At Armor Guardian, our vision is to be the global leader in vulnerability assessment and penetration testing (VAPT) solutions, setting new benchmarks in cybersecurity. We aim to empower businesses with cutting-edge security frameworks, ensuring a robust digital environment free from cyber threats.
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-md">
            <div className="relative h-64 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Crosshair className="w-24 h-24 text-white/80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-purple-500/30 backdrop-blur-sm border border-purple-400/30 text-white rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 mb-3">
                    <Crosshair className="w-4 h-4" />
                    Our Mission
                  </div>
                  <h3 className="text-3xl font-bold text-white">Delivering Exceptional Security</h3>
                </div>
              </div>
            </div>
            
            <div className="p-8 relative z-10">
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide comprehensive, proactive, and tailored VAPT solutions to businesses across all industries. We strive to identify and eliminate vulnerabilities before they can be exploited, ensuring our clients stay ahead of cybercriminals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;









// import React from 'react';
// import { Shield, CheckCircle, Target, Award, Flag } from 'lucide-react';
// import image from "../assets/bgimg2.jpg";
// import missionImage from "../assets/cyber-background2.jpg";
// import visionImage from "../assets/cyber-background3.jpg";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
//       {/* Header Banner with Animated Elements */}
//       <div className="relative w-full py-16 md:py-12 bg-gradient-to-r from-blue-900 to-blue-800 shadow-xl overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
//           <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold text-center text-white">About Us</h1>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Content with Shadow and Better Spacing */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="p-8 md:p-12 flex items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
//                   We Prepare You To Face Lethal Cyber Threats
//                 </h2>
//                 <p className="text-gray-700 text-lg mb-8">
//                   With extensive experience working for a range of Public and Private sector Enterprises, 
//                   we ensure our clients have a robust system to combat the rising risk of cyber crimes.
//                 </p>
                
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
//                       <CheckCircle className="h-5 w-5 text-white" />
//                     </div>
//                     <p className="font-medium text-gray-800">Industry-leading penetration testing methodologies</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             <div className="relative h-full min-h-[300px] lg:min-h-0">
//               <img 
//                 src={image} 
//                 alt="Cybersecurity Expert" 
//                 className="absolute inset-0 w-full h-full object-cover" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
//             </div>
//           </div>
//         </div>

//         {/* Core Values Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Core Values</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//               The principles that guide everything we do at Armor Guardian
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Shield className="h-10 w-10 text-blue-600" />,
//                 title: "Security First",
//                 description: "We prioritize security in everything we do, ensuring your data and systems remain protected."
//               },
//               {
//                 icon: <Target className="h-10 w-10 text-blue-600" />,
//                 title: "Precision",
//                 description: "Our targeted approach identifies and addresses specific vulnerabilities in your systems."
//               },
//               {
//                 icon: <Award className="h-10 w-10 text-blue-600" />,
//                 title: "Excellence",
//                 description: "We strive for excellence in all our security assessments and consultations."
//               },
//               {
//                 icon: <Flag className="h-10 w-10 text-blue-600" />,
//                 title: "Integrity",
//                 description: "We operate with transparency and honesty in all our business practices."
//               }
//             ].map((value, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-blue-800 text-center mb-3">{value.title}</h3>
//                 <p className="text-gray-700 text-center">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vision & Mission with Modern Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
//             <div className="h-64 overflow-hidden relative">
//               <img 
//                 src={visionImage} 
//                 alt="Our Vision" 
//                 className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                 <div className="p-6">
//                   <div className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm inline-block mb-2">Our Vision</div>
//                   <h3 className="text-2xl font-bold text-white">Shaping a Secure Digital Future</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6">
//               <p className="text-gray-700 leading-relaxed">
//                 At Armor Guardian, our vision is to be the global leader in vulnerability assessment and penetration testing (VAPT) solutions, setting new benchmarks in cybersecurity. We aim to empower businesses with cutting-edge security frameworks, ensuring a robust digital environment free from cyber threats. Our goal is to create a future where organizations operate with confidence, knowing their digital assets are secure.
//               </p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
//             <div className="h-64 overflow-hidden relative">
//               <img 
//                 src={missionImage} 
//                 alt="Our Mission" 
//                 className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                 <div className="p-6">
//                   <div className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm inline-block mb-2">Our Mission</div>
//                   <h3 className="text-2xl font-bold text-white">Delivering Exceptional Security</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6">
//               <p className="text-gray-700 leading-relaxed">
//                 Our mission is to provide comprehensive, proactive, and tailored VAPT solutions to businesses across all industries. We strive to identify and eliminate vulnerabilities before they can be exploited, ensuring our clients stay ahead of cybercriminals. By leveraging advanced security methodologies and innovative technology, we help organizations strengthen their defenses, maintain compliance, and achieve complete digital resilience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;