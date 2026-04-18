import { useState } from "react";
import type { i18n as I18n } from "i18next";
import { scrollToSection } from "shared/libs/dom/scrollToSection";

interface UseHeaderNavigationResult {
  isMobileMenuOpen: boolean;
  handleScrollTop: () => void;
  handleNavigate: (sectionId: string) => void;
  handleLanguageChange: (language: string) => void;
  toggleMobileMenu: () => void;
}

export const useHeaderNavigation = (i18n: I18n): UseHeaderNavigationResult => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    void i18n.changeLanguage(language);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return {
    isMobileMenuOpen,
    handleScrollTop,
    handleNavigate,
    handleLanguageChange,
    toggleMobileMenu,
  };
};
