import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { EnglishTranslate, JapaneseTranslate } from "../translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: EnglishTranslate },
      ja: { translation: JapaneseTranslate },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
