import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import CustomCursor from '../components/CustomCursor';

const MainLayout = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false,
      infinite: false,
    });

    // Request Animation Frame loop for Lenis
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Add Lenis scroll instances to window for external scroll triggers if needed
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#030014] text-white selection:bg-primary/30 overflow-hidden">
      {/* 1. Global Custom Trailing Cursor */}
      <CustomCursor />

      {/* 2. Global Drifting Starfield Background Canvas */}
      <ParticlesBackground />

      {/* 3. Floating Glass sticky Navigation Header */}
      <Navbar />

      {/* 4. Main Page View Container */}
      <main className="relative z-10 w-full">
        {children}
      </main>

      {/* 5. Sleek brand footer section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
