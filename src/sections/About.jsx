import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiCode, FiCpu, FiLayout } from 'react-icons/fi';
import { focusCards, aboutBio } from '../constants/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

// Sleek Minimalist Profile Picture Card
const TiltProfileCard = () => {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl p-[1px] bg-zinc-850 shadow-md group overflow-hidden">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        {/* Profile Image with graceful fallback */}
        <img 
          src="/profile.png" 
          alt="Surya Narayana" 
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=Surya+Narayana&background=18181b&color=fff&size=512';
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  // Mapping custom icons to renderfocus cards
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'code': return <FiCode className="text-2xl text-primary" />;
      case 'cpu': return <FiCpu className="text-2xl text-primary" />;
      case 'layout': return <FiLayout className="text-2xl text-primary" />;
      default: return <FiCode className="text-2xl text-primary" />;
    }
  };

  return (
    <section id="about" className="py-20 relative z-10 overflow-hidden">
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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* 2-Column Grid matching the original design layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image & Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 flex flex-col items-center lg:items-start"
          >
            {/* Tilt Profile Card */}
            <div className="mb-6">
              <TiltProfileCard />
            </div>

            <h3 className="text-xl font-bold text-white text-center lg:text-left">
              {aboutBio.heading}
            </h3>
            
            <p className="text-zinc-400 leading-relaxed text-xs md:text-sm text-center lg:text-left">
              {aboutBio.para1}
            </p>
            
            <p className="text-zinc-400 leading-relaxed text-xs md:text-sm text-center lg:text-left">
              {aboutBio.para2}
            </p>
          </motion.div>

          {/* Right Column: Focus Cards */}
          <motion.div
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 w-full"
          >
            {focusCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="glass-card p-5 rounded-xl flex items-start gap-5 group relative overflow-hidden"
              >
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg relative z-10 shrink-0 text-primary">
                  {getIcon(card.icon)}
                </div>
                <div className="relative z-10">
                  <h4 className="text-base font-bold mb-1 text-white group-hover:text-primary transition-colors font-display">
                    {card.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
