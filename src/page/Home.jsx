import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-blue-600">Sandeep Chauhan Project</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We deliver innovative solutions that transform your business.
              Our expertise helps you stay ahead in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-center"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-200 rounded-lg w-full max-w-md h-64 flex items-center justify-center">
              <span className="text-gray-500">Hero Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50 rounded-xl my-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional value through our core strengths
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Team",
              description: "Our professionals bring years of industry experience to every project.",
              icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Innovative Solutions",
              description: "We leverage cutting-edge technology to solve complex challenges.",
              icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Customer Focused",
              description: "Your success is our priority, with support at every step of the journey.",
              icon: (
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div> */}
      </section>

      {/* Testimonial Section */}
      <section className="py-12">
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-gray-700 text-center italic mb-6">
              "Working with this team has transformed our business operations. Their innovative solutions have helped us increase efficiency by 40% and reduce costs significantly."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-medium text-gray-800">Jane Smith</p>
                <p className="text-gray-600 text-sm">CEO, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join hundreds of satisfied clients who have transformed their businesses with our solutions.
        </p>
        <Link 
          to="/contact" 
          className="bg-blue-600 text-white font-medium py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 inline-block"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}

export default Home;