import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'PolypDetectAi',
    description:
      'The system uses a YOLO-based deep learning model served via FastAPI, with a React + Tailwind frontend and Firebase authentication, deployed using Docker and Vercel.',
    tags: ['React', 'Tailwind', 'YOLO', 'FastAPI'],
    image: '🩺',
    github: '#',
    demo: 'https://polyps-detector.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio',
    description:
      'Welcome to my portfolio! I am a passionate web developer who enjoys building modern, responsive, and user-friendly applications. Here you will find a collection of my projects, technical skills, achievements, and ways to get in touch. I am always eager to learn new technologies and create solutions that make a meaningful impact.',
    tags: ['React', 'JavaScrit', 'Tailwind'],
    image: '💻',
    github: 'https://github.com/masumbillah06/my_portfolio',
    demo: 'https://masum06-portfolio.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    description:
      'An interactive Tic-Tac-Toe web-based Game with an AI opponent using the Minimax algorithm, featuring multiple difficulty levels, a responsive modern UI, real-time updates, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '🎮',
    github: 'https://github.com/masumbillah06/TicTacToe',
    demo: 'https://tic-tac-toe-mb06.vercel.app/',
    featured: false,
  },
  {
    id: 4,
    title: 'Mini Quiz',
    description:
      'This is a Mini-Quiz website built with Html, CSS and JavaScript. Here you can test your knowlwdge while having some fun!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '🎯',
    github: 'https://github.com/masumbillah06/Quiz-Game',
    demo: 'https://quizgame-masum.vercel.app/',
    featured: false,
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-[#1a1a2e] rounded-2xl overflow-hidden border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6c63ff]/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="text-5xl mb-4">{project.image}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-[#9a9ab0] text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-[#0a0a0f] text-[#a78bfa] border border-[#2a2a42]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            className="text-sm text-[#9a9ab0] hover:text-[#6c63ff] transition-colors duration-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>
          <a
            href={project.demo}
            className="text-sm text-[#9a9ab0] hover:text-[#6c63ff] transition-colors duration-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'featured'
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="py-20 px-6 bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] bg-clip-text text-transparent">
              My Projects 🚀
            </span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-[#9a9ab0] max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'all'
              ? 'bg-[#6c63ff] text-white shadow-lg shadow-[#6c63ff]/30'
              : 'bg-[#1a1a2e] text-[#9a9ab0] hover:text-white border border-[#2a2a42]'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'featured'
              ? 'bg-[#6c63ff] text-white shadow-lg shadow-[#6c63ff]/30'
              : 'bg-[#1a1a2e] text-[#9a9ab0] hover:text-white border border-[#2a2a42]'
              }`}
          >
            Featured
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-[#9a9ab0]">
            No projects match this filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

