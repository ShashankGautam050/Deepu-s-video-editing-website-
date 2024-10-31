// src/components/About.js
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 text-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/5 flex justify-start mb-8 lg:mb-0">
          <img 
            src="/deepu.jpg" // Reference the image in the public folder
            alt="Deepankar Gautam" 
            className="w-72 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="lg:w-4/5 mb-8 lg:mb-0">
          <p className="max-w-2xl mx-auto text-xl text-gray-800 leading-relaxed transition-transform transform hover:scale-105 font-poppins">
            Hi there, I'm <span className="font-semibold text-blue-600">Deepankar</span>, a committed video editor passionate about storytelling and proficient with tools like 
            <span className="font-semibold text-green-600"> VN Editor</span>, <span className="font-semibold text-green-600">CapCut</span>, <span className="font-semibold text-purple-600">Premiere Pro</span>, 
            and <span className="font-semibold text-purple-600">Filmora</span>. I bring creativity and technical precision to each project—from engaging social media clips to polished, long-form videos.
            I tailor each piece to align with clients' visions, focusing on captivating visuals and seamless editing. With expertise in these industry-leading tools, I optimize workflows and consistently 
            deliver polished, impactful content. Whether you're looking to tell a story, boost brand visibility, or <span className="font-semibold text-blue-600">advertise your product</span>, I'm here to help
            create visuals that leave a lasting impression. Let’s bring your vision to life and make an impact together!
          </p>
        </div>
      </div>
    </section>
  );
}
