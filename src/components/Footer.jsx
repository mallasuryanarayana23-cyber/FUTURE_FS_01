const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-white">Surya</span>
            <span className="text-primary">.dev</span>
          </span>
        </div>
        
        <p className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Malla Surya Narayana. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
