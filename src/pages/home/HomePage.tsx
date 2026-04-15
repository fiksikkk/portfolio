import styled from "styled-components";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Projects from "./ui/Projects";
import AISection from "./ui/AISection";
import Personal from "./ui/Personal";
import Contact from "./ui/Contact";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AISection />
      <Personal />
      <Contact />
    </Main>
  );
}

const Main = styled.main``;
