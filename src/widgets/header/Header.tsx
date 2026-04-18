import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "shared/libs/dom/scrollToSection";
import { Colors } from "shared/styles/colors";
import { SUPPORTED_LANGUAGES } from "shared/libs/i18n";
import { SectionContainer } from "shared/ui";

interface HeaderProps {
  backgroundColor: string;
}

export function Header({ backgroundColor }: HeaderProps) {
  const { t, i18n } = useTranslation();

  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <HeaderContainer>
        <HeaderNav>
          <LogoButton
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            YV.
          </LogoButton>

          <Navigation>
            <NavList>
              <NavItem>
                <NavButton
                  type="button"
                  onClick={() => scrollToSection("about")}
                >
                  {t("header.nav.about")}
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton
                  type="button"
                  onClick={() => scrollToSection("projects")}
                >
                  {t("header.nav.projects")}
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton
                  type="button"
                  onClick={() => scrollToSection("contact")}
                >
                  {t("header.nav.contact")}
                </NavButton>
              </NavItem>
            </NavList>

            <LanguageSwitcher>
              {SUPPORTED_LANGUAGES.map((language) => (
                <LanguageButton
                  key={language}
                  type="button"
                  onClick={() => void i18n.changeLanguage(language)}
                  $active={i18n.language.startsWith(language)}
                >
                  {language.toUpperCase()}
                </LanguageButton>
              ))}
            </LanguageSwitcher>
          </Navigation>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.5s;
  background: ${({ backgroundColor }) => backgroundColor};
  backdrop-filter: ${({ backgroundColor }) =>
    backgroundColor === Colors.transparent ? "none" : "blur(20px)"};
  box-shadow: ${({ backgroundColor }) =>
    backgroundColor === Colors.transparent
      ? "none"
      : `0 1px 0 ${Colors.foregroundTint06}`};
`;

const HeaderContainer = styled(SectionContainer)`
  padding: 24px 32px;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoButton = styled.button`
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: var(--font-display);
  font-weight: 600;

  &:hover {
    color: ${Colors.primary};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  font-size: 15px;
  color: ${Colors.muted};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.foreground};
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  border: 1px solid ${Colors.foregroundTint10};
  border-radius: 9999px;
  background: ${Colors.surfaceTint60};
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  min-width: 40px;
  border: none;
  border-radius: 9999px;
  background: ${({ $active }) =>
    $active ? Colors.primary : Colors.transparent};
  color: ${({ $active }) => ($active ? Colors.surface : Colors.muted)};
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ $active }) => ($active ? Colors.surface : Colors.foreground)};
  }
`;
