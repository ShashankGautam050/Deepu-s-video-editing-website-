import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-start gap-12">
        
        {/* Sticky Image Section for Large Screens */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
            <img
              src="/deepu.jpg"
              alt="Deepankar Gautam"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="lg:w-2/3 h-auto overflow-y-auto">
          <div className="max-w-3xl mx-auto lg:mx-0 bg-white p-6 rounded-xl shadow-lg border-l-8 border-blue-600">
            <span className="text-4xl">👋</span>{" "}
            <span className="font-extrabold text-blue-600 text-4xl">
              Hello, I'm Deepankar!
            </span>
            <br />
            <br />
            <p className="text-gray-800 text-lg leading-relaxed">
              A <strong>creative video editor</strong> and <strong>motion graphics designer</strong> with a passion for bringing stories to life through captivating visuals and seamless editing. Whether it's <strong>dynamic promotional videos</strong>, <strong>engaging social media content</strong>, or <strong>cinematic storytelling</strong>, I ensure every frame leaves a lasting impact.
            </p>
            <br />
            🎬 <span className="font-semibold text-purple-600">Expert in:</span>{" "}
            <strong>Adobe Premiere Pro</strong>, <strong>After Effects</strong>,
            and <strong>Figma</strong> – crafting visually stunning videos,
            motion graphics, and brand-focused content.
            <br />
            <br />
            🚀{" "}
            <span className="font-semibold text-green-600">Let’s collaborate</span> and turn your ideas into{" "}
            <strong>high-quality video content</strong> that connects with your
            audience and elevates your brand.
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              💡 Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "🎨 Motion Graphics", desc: "Dynamic animations & eye-catching effects" },
                { title: "🎬 Video Editing", desc: "Smooth transitions & compelling storytelling" },
                { title: "📢 Promotional Videos", desc: "Engaging brand visuals & marketing content" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-blue-600">
                    {skill.title}
                  </h4>
                  <p className="text-gray-700 text-md mt-2">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Expertise Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              🛠️ Software Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "🎞️ Adobe Premiere Pro", desc: "Professional video editing & color grading" },
                { title: "🎨 Adobe After Effects", desc: "Motion graphics & visual effects" },
                { title: "🖥️ Figma", desc: "UI/UX design & prototyping" },
              ].map((software, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-purple-600">
                    {software.title}
                  </h4>
                  <p className="text-gray-700 text-md mt-2">{software.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
