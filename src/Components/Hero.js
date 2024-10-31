// src/components/Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-hero-image">
      <h1 className="text-5xl font-bold text-white">Professional Video Editor</h1>
      <p className="mt-4 text-lg text-white">Transforming ideas into compelling visual stories</p>
      <a href="#portfolio" className="mt-6 bg-blue-600 px-4 py-2 text-white rounded-md">Watch My Work</a>
    </section>
  );
}
