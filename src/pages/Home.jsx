import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      {/* 1. Cinematic Entry Hero area */}
      <Hero />

      {/* 2. Professional Biography, Stats and Timelines */}
      <About />

      {/* 3. Categorized Technical Stack cards */}
      <Skills />

      {/* 4. Interactive mockups grid of creative projects */}
      <Projects />

      {/* 5. Licenses, Certifications, and CV downloads */}
      <Resume />

      {/* 6. Availability and database contact form */}
      <Contact />
    </>
  );
};

export default Home;
