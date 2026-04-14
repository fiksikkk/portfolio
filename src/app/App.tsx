import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AISection from './components/AISection';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Header scrolled={scrolled} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISection />
        <Personal />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}