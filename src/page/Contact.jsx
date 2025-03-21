import React from 'react';

const Contact = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
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
                  <span className="text-blue-100">+91 7080239900</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-blue-100">+91 7080239900</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-700 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-blue-100">info@innovationinfotech.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-blue-900">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your message"
                    rows="5"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key">
                    {/* This is a placeholder for the reCAPTCHA */}
                    {/* <div className="flex items-center bg-white text-gray-700 p-2 rounded w-fit text-sm">
                      <input type="checkbox" className="mr-2" />
                      <span>I'm not a robot</span>
                      <img src="/api/placeholder/40/40" alt="reCAPTCHA" className="ml-2 h-10" />
                    </div> */}
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded transition duration-200"
                  >
                    SEND MESSAGE
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