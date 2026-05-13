import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'SkillMap — MSME Worker Connect',
    description: 'A comprehensive platform designed to bridge the gap between MSMEs and skilled workers. Features advanced filtering, real-time matching, and an intuitive dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mallasuryanarayana23-cyber/Saikona.git',
    live: 'https://saikona-1.onrender.com',
    color: 'from-primary/20 to-transparent',
    image: ''
  },
  {
    title: 'Smart Crop Recommendation System',
    description: 'An intelligent system utilizing machine learning algorithms to recommend optimal crops based on soil metrics and environmental conditions to maximize yield.',
    tech: ['Python', 'Machine Learning', 'Flask', 'React', 'Data Analysis'],
    github: '#',
    live: '#',
    color: 'from-cyanGlow/20 to-transparent',
    image: ''
  },
  {
    title: 'Visitor Management System',
    description: 'A secure, scalable digital logging system replacing traditional paper logs. Features QR code generation, real-time notifications, and admin analytics.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mallasuryanarayana23-cyber/visitor-management.git',
    live: 'https://visitor-management-935s.onrender.com',
    color: 'from-accent/20 to-transparent',
    image: ''
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden group flex flex-col lg:flex-row gap-10 items-center"
            >
              <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${project.color} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              {/* Project Details */}
              <div className="w-full flex flex-col">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="glass-panel p-6 rounded-2xl mb-6 relative z-10">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                
                <ul className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <li key={i} className="text-sm font-medium text-cyanGlow bg-cyanGlow/10 px-4 py-1.5 rounded-full border border-cyanGlow/20">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                    <FiGithub className="text-xl" /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-cyanGlow transition-colors font-medium ml-4">
                    <FiExternalLink className="text-xl" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
