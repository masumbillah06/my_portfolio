import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-linear-to-r from-[#6c63ff] to-[#a78bfa] bg-clip-text text-transparent">
              About Me 👤
            </span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#6c63ff] to-[#a78bfa] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-[#9a9ab0] max-w-2xl mx-auto">
            A passionate developer dedicated to building impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-[#6c63ff]/20 to-[#ff6b9d]/20 p-1">
                {/* profile.jpg */}
                <img
                  src="/profile.JPG"
                  alt="John Doe - Developer"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#6c63ff]/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#ff6b9d]/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Building the future, one line at a time
            </h3>
            <p className="text-[#c4c4d4] leading-relaxed mb-4">
              Hi, I'm a Computer Science & Engineering graduate passionate about AI, Computer Vision, and Full-Stack Development. I enjoy turning ideas into practical, scalable applications using technologies like Python, React, FastAPI, YOLO, and Docker.
            </p>
            <p className="text-[#c4c4d4] leading-relaxed mb-4">
              Alongside software development, I'm an active competitive programmer who has solved 1000+ algorithmic problems across multiple online judges, strengthening my analytical thinking and problem-solving skills.
            </p>
            <p className="text-[#c4c4d4] leading-relaxed">
              I'm driven by continuous learning and enjoy building projects that combine intelligent systems with modern web technologies. I'm currently seeking opportunities where I can contribute to impactful software while growing as an AI and software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

