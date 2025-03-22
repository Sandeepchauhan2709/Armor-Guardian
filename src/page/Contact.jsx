// import React from 'react';

// const Contact = () => {
//   return (
//     // <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
//     <div className="min-h-screen bg-gray-200 text-white">
//       {/* Header Banner */}
//       <div className="relative w-full py-12 bg-blue-900 shadow-lg mb-16">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -top-10 -right-10"></div>
//           <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -bottom-10 -left-10"></div>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Contact Us</h1>
//       </div>

//       <div className="container mx-auto px-4 pb-20">
//         <div className="bg-blue-900 rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//             {/* Contact Information */}
//             <div className="p-8 bg-blue-800">
//               <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//               <p className="text-blue-100 mb-8">
//                 Get in touch with us to give your organization the complete security against Cyber Threats.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <span className="text-blue-100">Arjunganj, Lucknow, Uttar Pradesh - 226002</span>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <span className="text-blue-100">+91 8707616261</span>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <span className="text-blue-100">+91 8707616261</span>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <span className="text-blue-100">hr@armorguardian.in</span>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="p-8 bg-blue-900">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Your name"
//                       className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="tel"
//                       placeholder="Phone number"
//                       className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
//                   />
//                 </div>
                
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
//                   />
//                 </div>
                
//                 <div>
//                   <textarea
//                     placeholder="Your message"
//                     rows="5"
//                     className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
//                   ></textarea>
//                 </div>
                
//                 <div className="flex items-center mb-4">
//                   <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key">
//                   </div>
//                 </div>
                
//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded transition duration-200"
//                   >
//                     SEND MESSAGE
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




import React, { useState, useRef } from 'react';

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
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formElement = formRef.current;
      const formData = new FormData(formElement);
      
      const response = await fetch("https://formsubmit.co/hr@armorguardian.in", {
        method: "POST",
        body: formData
      });

      console.log(response);
      
      if (response.ok) {
        setStatus({
          success: true,
          error: false,
          message: 'Your message has been sent. We will contact you soon!'
        });
        // Reset form
        formElement.reset();
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        success: false,
        error: true,
        message: 'Failed to send your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 text-white">
      {/* Header Banner */}
      <div className="relative w-full py-12 bg-blue-900 shadow-lg mb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -top-10 -right-10"></div>
          <div className="absolute transform -rotate-12 bg-blue-700 w-full h-32 -bottom-10 -left-10"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Contact Us</h1>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="bg-blue-900 rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Contact Information */}
            <div className="p-8 bg-blue-800">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-blue-100 mb-8">
                Get in touch with us to give your organization the complete security against Cyber Threats.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Arjunganj, Lucknow, Uttar Pradesh - 226002</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-blue-100">+91 8707616261</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-blue-100">hr@armorguardian.in</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-blue-900">
              {status.success && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded">
                  {status.message}
                </div>
              )}
              
              {status.error && (
                <div className="mb-6 p-4 bg-red-600 text-white rounded">
                  {status.message}
                </div>
              )}
              
              <form ref={formRef} action="https://formsubmit.co/hr@armorguardian.in" method="POST" className="space-y-4" onSubmit={handleSubmit}>
                {/* FormSubmit configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New contact form submission" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows="5"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-6 ${
                      loading ? 'bg-yellow-300' : 'bg-yellow-500 hover:bg-yellow-400'
                    } text-blue-900 font-bold rounded transition duration-200 flex justify-center items-center`}
                  >
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;