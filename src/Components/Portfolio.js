// src/components/Portfolio.js
import React, { useState } from 'react';

export default function Portfolio() {
  const projects = [
    { id: 3, videoUrl: "/video3.mp4", thumbnailUrl: "/th1.png" },
    { id: 1, videoUrl: "/final_comp_prob3.mp4", thumbnailUrl: "/tth1.png" },
    { id: 4, videoUrl: "/video4.mp4", thumbnailUrl: "/th4.png" },
    { id: 2, videoUrl: "/cola_prob3.mp4", thumbnailUrl: "/tth2.png" },
    { id: 2, videoUrl: "/shoe_ad_prob3.mp4", thumbnailUrl: "/tth3.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openVideo = (index) => {
    setCurrentProjectIndex(index);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  const nextProject = (event) => {
    event.stopPropagation();
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = (event) => {
    event.stopPropagation();
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleOutsideClick = (event) => {
    const videoModal = document.getElementById('video-modal');
    if (videoModal && !videoModal.contains(event.target)) {
      closeVideo();
    }
  };

  return (
    <section id="portfolio" className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Sample Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="bg-gray-100 rounded-lg p-3 shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openVideo(index)}
          >
            <div className="overflow-hidden rounded-lg mb-2 w-full relative">
              <img 
                src={project.thumbnailUrl} 
                alt={`Video ${project.id} thumbnail`} 
                className="w-full h-36 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-sm">Click to play video</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="relative w-4/5 md:w-3/5 lg:w-1/3" id="video-modal">
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-5xl z-10"
              onClick={previousProject} 
            >
              &#9664; {/* Left Arrow */}
            </button>
            <div className="flex justify-center">
              <video
                className="rounded-lg border-0 w-full h-auto"
                src={projects[currentProjectIndex].videoUrl}
                autoPlay
                controls
                allowFullScreen
              />
            </div>
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-5xl z-10"
              onClick={nextProject} 
            >
              &#9654; {/* Right Arrow */}
            </button>
            <button 
              className="absolute top-4 right-16 text-white text-2xl"
              onClick={closeVideo} 
            >
              &times; {/* Close Button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
