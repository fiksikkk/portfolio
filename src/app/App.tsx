import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Header } from "widgets/header";
import { HomePage } from "pages/home";
import { Footer } from "widgets/footer";

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = t("seo.title");

    const description = t("seo.description");
    const descriptionMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (descriptionMeta) {
      descriptionMeta.content = description;
    }

    document.documentElement.lang = i18n.language.startsWith("ru") ? "ru" : "en";
  }, [i18n.language, t]);

  return (
    <AppContainer>
      <Header scrolled={scrolled} />

      <HomePage />

      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  scroll-behavior: smooth;
`;
