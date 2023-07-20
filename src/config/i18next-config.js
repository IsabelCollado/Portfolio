import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import aboutmeEN from '../languages/en/about.json';
import headerEN from '../languages/en/header.json';
import landingEN from '../languages/en/landing.json';
import aboutmeES from '../languages/es/about.json';
import headerES from '../languages/es/header.json';
import landingES from '../languages/es/landing.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: headerEN,
        landing: landingEN,
        aboutme: aboutmeEN,
      },
      es: {
        header: headerES,
        landing: landingES,
        aboutme: aboutmeES,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
