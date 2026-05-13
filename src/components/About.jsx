import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayout } from 'react-icons/fi';

const cards = [
  {
    icon: <FiCode className="text-3xl text-primary" />,
    title: 'Frontend Development',
    desc: 'Creating immersive, pixel-perfect UIs with React and modern CSS.'
  },
  {
    icon: <FiCpu className="text-3xl text-cyanGlow" />,
    title: 'Backend Systems',
    desc: 'Building robust, scalable server-side architectures and APIs.'
  },
  {
    icon: <FiLayout className="text-3xl text-accent" />,
    title: 'UI/UX Design',
    desc: 'Designing intuitive and beautiful user experiences.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyanGlow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass-panel p-2 mx-auto lg:mx-0 mb-8">
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src="/profile.png" 
                  alt="Surya Narayana" 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Surya+Narayana&background=7c3aed&color=fff&size=512';
                  }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold">
              I'm an engineer who loves <span className="text-gradient">building things</span>.
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Currently pursuing my studies in Computer Science and Engineering, I have developed a strong passion for full-stack web development. I enjoy bridging the gap between engineering and design—combining technical knowledge with a keen eye for aesthetics.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              My goal is to always build products that provide pixel-perfect, performant experiences. When I'm not in front of a computer screen, I'm probably exploring new technologies or solving algorithmic challenges.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {cards.map((card, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex items-start gap-6 group">
                <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 text-white group-hover:text-primary transition-colors">{card.title}</h4>
                  <p className="text-gray-400">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
