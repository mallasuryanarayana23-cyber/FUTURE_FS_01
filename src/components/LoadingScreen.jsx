import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  
  const statuses = [
    'Initializing quantum core...',
    'Loading styling tokens...',
    'Synchronizing database gateways...',
    'Structuring spatial layout...',
    'Rendering creative elements...',
    'System ready.'
  ];

  useEffect(() => {
    // Increment loading percentage smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        
        // Progress faster or slower randomly for a organic loading feel
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Dynamic status text update
    if (progress < 25) setStatusIndex(0);
    else if (progress < 45) setStatusIndex(1);
    else if (progress < 65) setStatusIndex(2);
    else if (progress < 85) setStatusIndex(3);
    else if (progress < 98) setStatusIndex(4);
    else setStatusIndex(5);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 bg-[#030014] z-[99999] flex flex-col items-center justify-center select-none"
    >
      <div className="relative max-w-md w-full px-8 flex flex-col items-center">
        {/* Glowing Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyanGlow/5 blur-[40px] pointer-events-none" />

        {/* Logo Icon with Pulse */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            scale: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 4, ease: 'linear' }
          }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-cyanGlow p-[1px] mb-8 shadow-[0_0_30px_rgba(124,58,237,0.3)]"
        >
          <div className="w-full h-full rounded-2xl bg-[#030014] flex items-center justify-center">
            <span className="text-2xl font-bold tracking-tight text-white">S</span>
          </div>
        </motion.div>

        {/* Text Percentage */}
        <div className="overflow-hidden mb-2">
          <motion.h2 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-6xl font-extrabold tracking-tighter text-white font-display"
          >
            {progress}%
          </motion.h2>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-cyanGlow to-accent"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Status updates */}
        <div className="h-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs uppercase tracking-widest text-cyanGlow font-medium"
            >
              {statuses[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
