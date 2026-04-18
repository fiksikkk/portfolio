import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { useHeaderNavigation } from "../model/useHeaderNavigation";
import {
  DesktopNavigation,
  HeaderContainer,
  HeaderNav,
  HeaderWrapper,
  LogoButton,
  MobileControls,
} from "./Header.styles";

interface HeaderProps {
  backgroundColor: string;
}

export function Header({ backgroundColor }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const {
    isMobileMenuOpen,
    handleScrollTop,
    handleNavigate,
    handleLanguageChange,
    toggleMobileMenu,
  } = useHeaderNavigation(i18n);

  return (
    <HeaderWrapper
      backgroundColor={backgroundColor}
      $forceSolidBackground={isMobileMenuOpen}
    >
      <HeaderContainer>
        <HeaderNav>
          <LogoButton type="button" onClick={handleScrollTop}>
            YV.
          </LogoButton>

          <DesktopNavigation>
            <NavLinks
              onNavigate={handleNavigate}
              getLabel={(translationKey) => t(translationKey)}
            />

            <LanguageSwitcher
              currentLanguage={i18n.language}
              onLanguageChange={handleLanguageChange}
            />
          </DesktopNavigation>

          <MobileControls>
            <LanguageSwitcher
              mobile
              currentLanguage={i18n.language}
              onLanguageChange={handleLanguageChange}
            />

            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              onNavigate={handleNavigate}
              getLabel={(translationKey) => t(translationKey)}
              openLabel={t("header.menu.open", { defaultValue: "Open menu" })}
              closeLabel={t("header.menu.close", {
                defaultValue: "Close menu",
              })}
            />
          </MobileControls>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
