import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import stringsEn from "app-root/locales/en/strings.json";
import stringsPt from "app-root/locales/pt/strings.json";
import { I18N_LANGUAGE } from "app-root/constants/globals";

i18n
  .use(LanguageDetector)
  .init({
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
