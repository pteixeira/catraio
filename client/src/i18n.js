import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import stringsEn from "./locales/en/strings.json";
import stringsPt from "./locales/pt/strings.json";
import { I18N_LANGUAGE } from "./constants/globals";

i18n
  .use(LanguageDetector)
  .init({
    lng: localStorage.getItem(I18N_LANGUAGE) || "pt",
    fallbackLng: "pt",
    resources: {
      en: stringsEn,
      pt: stringsPt
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupLocalStorage: I18N_LANGUAGE,
      caches: ["localStorage"]
    }
  });

export default i18n;
