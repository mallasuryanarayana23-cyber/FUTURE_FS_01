import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { BsBoxes } from 'react-icons/bs';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'JavaScript', icon: IoLogoJavascript, color: '#f7df1e' },
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Git', icon: FaDatabase, color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'DSA', icon: BiNetworkChart, color: '#7c3aed' },
  { name: 'OOP', icon: BsBoxes, color: '#06b6d4' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Tools, technologies, and concepts I've mastered to build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
                />
                <Icon 
                  className="text-5xl transition-all duration-300 group-hover:scale-110 drop-shadow-lg text-gray-400 group-hover:text-white" 
                  style={{ filter: `drop-shadow(0 0 10px ${skill.color}40)` }}
                />
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
