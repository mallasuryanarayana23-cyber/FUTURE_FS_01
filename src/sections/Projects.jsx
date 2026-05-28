import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projectsData } from '../constants/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

// High-Fidelity Interactive CSS Mockups representing the systems
const ProjectMockup = ({ projectTitle }) => {
  if (projectTitle.includes('SkillMap')) {
    // MSME Worker Connect Map Mockup
    return (
      <div className="w-full h-40 bg-zinc-950 rounded-xl border border-zinc-900 relative overflow-hidden flex flex-col p-3.5">
        {/* Mock Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="text-[8px] text-zinc-500 font-mono ml-1">skillmap.io</span>
          </div>
          <span className="text-[8px] text-zinc-400 font-bold flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" /> Active
          </span>
        </div>

        {/* Constellation geolocation mockup */}
        <div className="flex-1 bg-zinc-900/10 border border-zinc-900 rounded-lg p-2 relative overflow-hidden flex items-center justify-center">
          <div className="absolute w-20 h-20 border border-zinc-800 rounded-full" />
          <div className="absolute w-10 h-10 border border-zinc-800/40 rounded-full" />

          <span className="w-2 h-2 bg-primary rounded-full relative z-10 flex items-center justify-center">
            <span className="w-0.5 h-0.5 bg-white rounded-full" />
          </span>

          <div className="absolute top-1.5 left-3 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-[7px] flex items-center gap-1 shadow relative z-10">
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            <span className="text-zinc-400">Electrician (2.1 km)</span>
          </div>

          <div className="absolute bottom-1.5 right-3 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-[7px] flex items-center gap-1 shadow relative z-10">
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            <span className="text-zinc-400">Welder (0.8 km)</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectTitle.includes('Crop')) {
    // Soil Metrics / AI Crop Recommender Mockup
    return (
      <div className="w-full h-40 bg-zinc-950 rounded-xl border border-zinc-900 relative overflow-hidden flex flex-col p-3.5">
        {/* Mock Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="text-[8px] text-zinc-500 font-mono ml-1">crop-recommender.py</span>
          </div>
          <span className="text-[8px] text-zinc-400 font-bold">ML Core</span>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-2 items-center">
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[7px] text-zinc-500">
              <span>Nitrogen</span>
              <span>85</span>
            </div>
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-zinc-650 rounded-full" />
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-zinc-500">
              <span>Phosphorus</span>
              <span>42</span>
            </div>
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div className="w-[42%] h-full bg-zinc-650 rounded-full" />
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-2 flex flex-col items-center justify-center text-center h-full">
            <span className="text-[6px] text-zinc-500 uppercase font-bold tracking-wider mb-0.5">Crop Output</span>
            <span className="text-xs font-bold text-white font-display">MAIZE</span>
            <span className="text-[6px] text-zinc-500">Accuracy: 94.8%</span>
          </div>
        </div>
      </div>
    );
  }

  // Visitor Management System / DB Register Mockup
  return (
    <div className="w-full h-40 bg-zinc-950 rounded-xl border border-zinc-900 relative overflow-hidden flex flex-col p-3.5">
      {/* Mock Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-2">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="text-[8px] text-zinc-500 font-mono ml-1">visitor-auth.cs</span>
        </div>
        <span className="text-[8px] text-zinc-400 font-mono">ASP.NET</span>
      </div>

      <div className="flex-1 bg-zinc-900/20 border border-zinc-900 rounded-lg p-2.5 flex flex-col justify-center gap-1.5 overflow-hidden">
        <div className="flex items-center justify-between text-[7px] text-zinc-500 font-bold border-b border-zinc-900 pb-1">
          <span>Visitor</span>
          <span>Time Logged</span>
          <span>Status</span>
        </div>
        <div className="flex items-center justify-between text-[7px] text-zinc-400">
          <span>Rohan Sharma</span>
          <span>10:45 AM</span>
          <span className="text-zinc-300 px-1 py-0.5 rounded bg-zinc-800 font-bold">Approved</span>
        </div>
        <div className="flex items-center justify-between text-[7px] text-zinc-400">
          <span>Priya Kapoor</span>
          <span>11:15 AM</span>
          <span className="text-zinc-500 px-1 py-0.5 rounded bg-zinc-900 font-bold">Pending</span>
        </div>
      </div>
    </div>
  );
};

// Sleek Minimalist Project Card
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card rounded-xl p-5 relative overflow-hidden group flex flex-col h-full"
      whileHover={{ 
        y: -3,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
    >
      {/* Category Pill Tag */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-[9px] uppercase font-bold tracking-widest text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded">
          {project.tag}
        </span>
        <FiFolder className="text-base text-zinc-500 group-hover:text-primary transition-colors duration-200" />
      </div>

      {/* Title Details */}
      <div className="mb-3 relative z-10">
        <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors font-display">
          {project.title}
        </h4>
      </div>

      {/* Simulated Live UI Mockup Preview Frame */}
      <div className="w-full mb-4 relative z-10">
        <ProjectMockup projectTitle={project.title} />
      </div>

      {/* Description text */}
      <p className="text-xs text-zinc-400 leading-relaxed mb-4 flex-grow relative z-10">
        {project.description}
      </p>

      {/* Tech pills array */}
      <div className="flex flex-wrap gap-1 mb-4 relative z-10">
        {project.tech.map((t, i) => (
          <span 
            key={i} 
            className="text-[9px] font-semibold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action CTA Buttons */}
      <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-zinc-900 pt-3">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white transition-colors duration-200 font-bold uppercase tracking-wider"
        >
          <FiGithub className="text-sm" /> Code
        </a>
        
        {project.live !== '#' ? (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-primary transition-colors duration-200 font-bold uppercase tracking-wider ml-auto"
          >
            <FiExternalLink className="text-sm" /> Live Demo
          </a>
        ) : (
          <span className="text-[9px] text-zinc-650 font-mono italic ml-auto uppercase font-bold">Local Core</span>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 font-display">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* 3-Column Original Project Grid Layout */}
        <motion.div
          variants={staggerContainer(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, idx) => (
            <div key={idx} className="h-full project-card">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
