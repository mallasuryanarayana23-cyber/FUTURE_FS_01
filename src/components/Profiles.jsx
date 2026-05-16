import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const profiles = [
  { name: 'GitHub', icon: SiGithub, url: 'https://github.com/mallasuryanarayana23-cyber', color: '#ffffff', stats: '' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/malla-surya-narayana-5520a9349', color: '#0a66c2', stats: '' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/suryamalla/', color: '#ffa116', stats: '100+ Problems' },
  { name: 'CodeChef', icon: SiCodechef, url: 'https://www.codechef.com/users/surya189489', color: '#5B4638', stats: '1054 Rating' },
];

const Profiles = () => {
  return (
    <section id="profiles" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="text-primary">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-6 group relative overflow-hidden text-center"
              >
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: profile.color }}
                />
                
                <Icon 
                  className="text-6xl transition-all duration-500 group-hover:scale-110" 
                  style={{ color: profile.color }}
                />
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white text-gray-200 transition-colors">{profile.name}</h3>
                  {profile.stats && (
                    <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full border border-primary/20 inline-block">
                      {profile.stats}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
