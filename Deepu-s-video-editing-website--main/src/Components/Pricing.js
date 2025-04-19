// src/components/Pricing.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 transition-transform transform hover:scale-105">Pricing</h2>
        
        {/* Short Video Packages */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Short Video Packages</h3>
          <ul className="space-y-4 text-xl text-gray-700">
            <li className="bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-blue-800">3 videos for ₹199</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-blue-800">5 videos for ₹299</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-blue-800">8 videos for ₹399</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-blue-800">10 videos for ₹499</li>
          </ul>
        </div>
        
        {/* Long Video Packages */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Long Video Packages</h3>
          <ul className="space-y-4 text-xl text-gray-700">
            <li className="bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-green-800">1 video for ₹299</li>
            <li className="bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-green-800">2 videos for ₹499</li>
            <li className="bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-green-800">5 videos for ₹999</li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-bold mb-4 text-gray-900">Connect with Me</h4>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/deepankar-dipankar-98055b27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-4xl transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/lxst_editxx?igsh=eGk0cWQ4emVocWJn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-4xl transition-transform transform hover:scale-110" />
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-sm">Feel free to reach out for collaborations or inquiries!</p>
        </div>
      </div>
    </section>
  );
}
