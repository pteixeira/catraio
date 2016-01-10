import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import stringsEn from "./locales/en/strings.json";
import stringsPt from "./locales/pt/strings.json";

i18n
  .use(LanguageDetector)
  .init({
    lng: "pt",
    fallbackLng: "pt",
    resources: {
      en: stringsEn,
      pt: stringsPt
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"]
    }
  });

export default i18n;
