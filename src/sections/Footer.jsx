import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { codingProfiles } from '../constants/portfolioData';
import MagneticButton from '../components/MagneticButton';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-zinc-900 bg-zinc-950/90 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center font-display font-extrabold text-white text-base">
              S
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              Surya<span className="text-zinc-500 font-normal">.dev</span>
            </span>
          </div>
          <p className="text-[9px] text-zinc-500 font-semibold mt-1">
            Full-Stack Engineering &bull; CSE Engineer
          </p>
        </div>

        {/* Social Icons row shortcuts */}
        <div className="flex items-center gap-3">
          {codingProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-primary text-zinc-400 hover:text-white transition-colors duration-200 flex items-center justify-center text-base"
                title={profile.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <p className="text-[10px] text-zinc-500 font-semibold">
            &copy; {new Date().getFullYear()} Malla Surya Narayana. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="group px-3.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[9px] text-zinc-400 hover:text-white transition-colors duration-200 font-bold uppercase tracking-widest flex items-center gap-1"
          >
            Back To Top
            <FiArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
