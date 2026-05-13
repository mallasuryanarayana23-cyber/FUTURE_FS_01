import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
  {
    title: 'Python Essentials',
    issuer: 'Cisco',
    icon: <FiAward />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]'
  },
  {
    title: 'HTML/CSS/JS',
    issuer: 'Cisco',
    icon: <FiAward />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
  },
  {
    title: 'Database Management Systems',
    issuer: 'Infosys',
    icon: <FiAward />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 ${cert.glow}`}
            >
              <div className="text-5xl text-gray-700 group-hover:text-primary transition-colors duration-500 mb-6 relative z-10">
                {cert.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 font-medium mb-1">{cert.issuer}</p>
              </div>
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
