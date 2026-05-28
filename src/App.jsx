import { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Head Specifications */}
        <title>Malla Surya Narayana | Premium Full-Stack Portfolio</title>
        <meta name="description" content="Explore the portfolio of Malla Surya Narayana, a computer science engineer specializing in premium React web apps, Node.js REST APIs, MongoDB pipelines, and C# ASP.NET services." />
        <meta name="keywords" content="Malla Surya Narayana, Surya Narayana, Full Stack Developer, React.js, Node.js, Express, MongoDB, ASP.NET Core, C#, DSA, Web Design, Awwwards Portfolio" />
        <meta name="theme-color" content="#030014" />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content="Malla Surya Narayana | Full-Stack Portfolio" />
        <meta property="og:description" content="Discover premium interactive web apps, full-stack systems, and robust database architectures designed by Surya Narayana." />
        <meta property="og:url" content="https://suryadev-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Malla Surya Narayana | Full-Stack Portfolio" />
        <meta name="twitter:description" content="Discover premium interactive web apps, full-stack systems, and robust database architectures designed by Surya Narayana." />
      </Helmet>

      {/* Cinematic Preloader Coordination */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Visual Layout */}
      {!isLoading && (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    </HelmetProvider>
  );
}

export default App;
