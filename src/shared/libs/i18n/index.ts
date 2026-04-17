import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

const LANGUAGE_KEY = "app_language";
const SUPPORTED_LANGUAGES = ["en", "ru"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as SupportedLanguage)) {
    return savedLanguage as SupportedLanguage;
  }

  const browserLanguage = window.navigator.language.slice(0, 2) as SupportedLanguage;
  if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
    return browserLanguage;
  }

  return "en";
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.on("languageChanged", (language) => {
    if (SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)) {
      window.localStorage.setItem(LANGUAGE_KEY, language);
    }
  });
}

export { i18n, SUPPORTED_LANGUAGES };
