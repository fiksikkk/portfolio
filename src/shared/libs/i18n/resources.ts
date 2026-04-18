import { enTranslation } from "./en";
import { ruTranslation } from "./ru";

export const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
} as const;
