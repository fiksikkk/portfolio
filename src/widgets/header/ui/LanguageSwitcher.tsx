import { SUPPORTED_LANGUAGES } from "shared/libs/i18n";
import {
  LanguageButton,
  LanguageSwitcher as LanguageSwitcherBase,
  MobileLanguageSwitcher,
} from "./Header.styles";

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  mobile?: boolean;
}

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
  mobile = false,
}: LanguageSwitcherProps) {
  const Switcher = mobile ? MobileLanguageSwitcher : LanguageSwitcherBase;

  return (
    <Switcher>
      {SUPPORTED_LANGUAGES.map((language) => (
        <LanguageButton
          key={language}
          type="button"
          onClick={() => onLanguageChange(language)}
          $active={currentLanguage.startsWith(language)}
        >
          {language.toUpperCase()}
        </LanguageButton>
      ))}
    </Switcher>
  );
}
