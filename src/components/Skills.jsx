import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: '🤖 Machine Learning & AI',
      icon: '🧠',
      skills: [
        { name: 'YOLO (v8–v12) – Object Detection', icon: '👁️' },
        { name: 'Custom Dataset Training (Polyp Detection)', icon: '📊' },
        { name: 'Evaluation Metrics (IoU, Confidence Tuning)', icon: '📈' },
        { name: 'OpenCV – Basic Image Processing', icon: '🖼️' },
      ],
    },
    {
      title: '🛠️ Tools & Technologies',
      icon: '⚙️',
      skills: [
        { name: 'Languages: C, C++, Python, Java, JavaScript', icon: '💻' },
        { name: 'ML/DL: PyTorch, Ultralytics YOLO', icon: '🔥' },
        { name: 'Frameworks: React, Node.js, FastAPI', icon: '⚛️' },
        { name: 'Databases: SQL, MongoDB', icon: '🗄️' },
        { name: 'Core CS: DSA, OOP, System Design (basic)', icon: '📚' },
        { name: 'UI/UX: Figma, Canva', icon: '🎨' },
        { name: 'Others: Git, Linux, Docker (basic)', icon: '🐳' },
      ],
    },
    {
      title: '💬 Language & Communication',
      icon: '🗣️',
      skills: [
        { name: 'Bangla – Native', icon: '🇧🇩' },
        { name: 'English – Professional working proficiency', icon: '🇬🇧' },
        { name: 'Strong communication & collaboration', icon: '🤝' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] bg-clip-text text-transparent">
              My Skills 🧩
            </span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-[#9a9ab0] max-w-2xl mx-auto">
            Technologies, tools, and expertise I bring to the table
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6c63ff]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3 text-[#c4c4d4]">
                    <span className="text-base mt-0.5">{skill.icon}</span>
                    <span className="text-sm leading-relaxed">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* compact summary */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #YOLO
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #PyTorch
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #React
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #DSA
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #OpenCV
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-[#a78bfa] border border-[#2a2a42]">
            #Figma
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;

