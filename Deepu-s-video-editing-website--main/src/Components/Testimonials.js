// src/components/Testimonials.js
import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Client A", text: "Amazing work!" },
    { id: 2, name: "Client B", text: "Highly professional and creative." },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <p className="text-lg italic">"{testimonial.text}"</p>
            <p className="mt-2 text-sm font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
