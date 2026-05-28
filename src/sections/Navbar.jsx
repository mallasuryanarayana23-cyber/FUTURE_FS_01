import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../constants/portfolioData';
import MagneticButton from '../components/MagneticButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // triggers when section occupies center
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections matching nav links
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900/60 shadow-lg' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <div className="w-9 h-9 rounded-lg border border-zinc-850 bg-zinc-900 flex items-center justify-center font-display font-extrabold text-white transition-colors group-hover:border-primary">
            S
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:block">
            <span className="text-white group-hover:text-primary transition-colors">Surya</span>
            <span className="text-zinc-500 font-normal">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel py-1 px-2 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 relative uppercase tracking-widest ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {/* Active Backdrop pill */}
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-zinc-800/40 border border-zinc-800/60 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white transition-all duration-200"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden text-2xl text-white p-2 hover:bg-white/5 rounded-xl transition-colors relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/98 backdrop-blur-md z-40 md:hidden flex flex-col items-center justify-center p-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className={`text-xl font-bold tracking-tight uppercase ${
                      isActive ? 'text-primary' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-6 px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-zinc-800"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
