import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiExternalLink, FiFileText } from 'react-icons/fi';
import { certificationsData, codingProfiles } from '../constants/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';
import MagneticButton from '../components/MagneticButton';

const CertificationCard = ({ cert }) => {
  const Icon = cert.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-5 rounded-xl relative overflow-hidden group flex items-start gap-4"
      whileHover={{ 
        y: -3,
        borderColor: 'rgba(99, 102, 241, 0.3)'
      }}
    >
      {/* Icon */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xl relative z-10 text-primary">
        <Icon />
      </div>

      {/* Details */}
      <div className="relative z-10 flex-1">
        <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors font-display">
          {cert.title}
        </h4>
        <p className="text-xs text-zinc-400 mt-1 font-semibold">{cert.issuer}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500">{cert.date}</span>
          <span className="text-[9px] uppercase tracking-wider font-bold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Verified <FiExternalLink className="text-[10px]" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative z-10 overflow-hidden">
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
            Resume & <span className="text-primary">Credentials</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Verifiable qualifications, certifications, and institutional background validating my engineering path.
          </p>
        </motion.div>

        {/* Two Column Layout: Qualifications & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Quick Resume Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-6 rounded-xl border border-zinc-900 relative overflow-hidden"
          >
            <h3 className="text-lg font-bold font-display text-white mb-5 flex items-center gap-2">
              <FiFileText className="text-primary" /> Professional Snapshot
            </h3>

            {/* Core Competencies list */}
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-bold text-zinc-300 uppercase tracking-wider text-[10px]">Core Focus</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed text-xs">
                  Full-stack engineering specialized in highly active front-ends and robust database queries.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-300 uppercase tracking-wider text-[10px]">Key Academic Modules</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed text-xs">
                  Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Database Systems (DBMS), Advanced Web Technologies.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-300 uppercase tracking-wider text-[10px]">Coding Milestones</h4>
                <p className="text-zinc-400 mt-1 leading-relaxed text-xs">
                  100+ LeetCode problems solved, active user on CodeChef with a peak rating of 1054 (3-star coder).
                </p>
              </div>
            </div>

            {/* Verification Button Call To Action */}
            <div className="mt-8 pt-5 border-t border-zinc-900 flex justify-center">
              <a
                href="/malla_surya_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary/95 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <FiDownload className="text-sm group-hover:translate-y-[1px] transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Interactive Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-lg font-bold font-display text-white mb-5 flex items-center gap-2">
              <FiAward className="text-primary" /> Licenses & Certifications
            </h3>

            <motion.div 
              variants={staggerContainer(0.06, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certificationsData.map((cert, idx) => (
                <CertificationCard key={idx} cert={cert} index={idx} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Coding Profiles Grid */}
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold font-display text-center text-white mb-8"
          >
            Continuous Engagement on Competitive Platforms
          </motion.h3>

          <motion.div 
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {codingProfiles.map((profile, idx) => {
              const Icon = profile.icon;
              return (
                <motion.a
                  key={idx}
                  variants={fadeInUp}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-xl flex flex-col items-center justify-center gap-3 group text-center relative overflow-hidden"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <Icon 
                    className="text-3xl transition-transform duration-200 group-hover:scale-105" 
                    style={{ color: profile.color }}
                  />
                  
                  <div>
                    <h4 className="font-bold text-xs text-zinc-300 group-hover:text-white transition-colors">{profile.name}</h4>
                    <p className="text-[8px] font-bold text-zinc-500 mt-1 uppercase tracking-wider">{profile.stats}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
