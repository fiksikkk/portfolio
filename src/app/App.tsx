import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AISection from "./components/AISection";
import Personal from "./components/Personal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppContainer>
      <Header scrolled={scrolled} />

      <Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISection />
        <Personal />
        <Contact />
      </Main>

      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  scroll-behavior: smooth;
`;

const Main = styled.main``;
