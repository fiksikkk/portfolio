import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./src/widgets/header";
import MainPage from "./src/pages/home";
import Footer from "./src/widgets/footer";

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

      <MainPage />

      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  scroll-behavior: smooth;
`;
