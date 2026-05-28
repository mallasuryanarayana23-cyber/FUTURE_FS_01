import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../constants/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-5 rounded-xl flex flex-col items-center justify-center gap-3 relative overflow-hidden group cursor-pointer text-center"
      whileHover={{ 
        y: -3,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
    >
      {/* Static Minimal Icon Wrapper */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg relative z-10 text-zinc-400 group-hover:text-primary transition-colors duration-200">
        <Icon className="text-3xl" />
      </div>

      {/* Text details */}
      <div className="relative z-10">
        <h4 className="font-bold text-sm text-zinc-300 group-hover:text-white transition-colors font-display">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 font-display">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Tools, technologies, and concepts I've mastered to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* 10 Skills Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
