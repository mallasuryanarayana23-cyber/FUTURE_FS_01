import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../animations/variants';
import MagneticButton from '../components/MagneticButton';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Role Typing Effect Setup
  const roles = ['Full Stack Developer', 'Problem Solver', 'CSE Engineer', 'UI/UX Architect'];
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1800;

  useEffect(() => {
    let timer;
    const activeWord = roles[roleIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentRoleText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentRoleText((prev) => activeWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Word completion transitions
    if (!isDeleting && currentRoleText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentRoleText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentRoleText, isDeleting, roleIndex]);

  // Mouse Reactive Glow Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring inertia for the mouse tracker
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 bg-hero-gradient"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          Welcome to my portfolio
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.h1
          variants={staggerContainer(0.06, 0.2)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-tight select-none"
        >
          <motion.span variants={fadeInUp} className="text-white">Hi, I'm </motion.span>
          <br className="sm:hidden" />
          <motion.span 
            variants={fadeInUp} 
            className="text-gradient block sm:inline font-display"
          >
            Surya Narayana
          </motion.span>
        </motion.h1>

        {/* Dynamic Typing Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 md:h-10 flex items-center justify-center mb-6 font-mono"
        >
          <p className="text-lg md:text-2xl text-zinc-300 font-semibold tracking-tight">
            I am a <span className="text-primary font-bold">{currentRoleText}</span>
            <span className="w-[2px] h-5 bg-primary inline-block ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Minimalist Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs md:text-base text-zinc-400 max-w-xl leading-relaxed mb-10"
        >
          I build high-performance full-stack web applications with modern frontend technologies, robust backend scalability, and clean engineering principles.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full"
        >
          <a
            href="#projects"
            className="group px-6 py-3 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-200"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 flex items-center justify-center"
          >
            Get In Touch
          </a>

          <a
            href="/malla_surya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FiFileText className="text-sm" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Smooth scrolling visual indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] text-zinc-500 uppercase tracking-[0.25em] font-semibold">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-zinc-800 flex justify-center p-[3px]">
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[3px] h-[6px] bg-zinc-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
