import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import aboutmeEN from '../languages/en/about.json';
import headerEN from '../languages/en/header.json';
import footerEN from '../languages/en/footer.json';
import contactEN from '../languages/en/contact.json';
import landingEN from '../languages/en/landing.json';
import projectsEN from '../languages/en/projects.json';
import aboutmeES from '../languages/es/about.json';
import headerES from '../languages/es/header.json';
import landingES from '../languages/es/landing.json';
import contactES from '../languages/es/contact.json';
import projectsES from '../languages/es/projects.json';
import footerES from '../languages/es/footer.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: headerEN,
        landing: landingEN,
        aboutme: aboutmeEN,
        footer: footerEN,
        contact: contactEN,
        projects: projectsEN,
      },
      es: {
        header: headerES,
        landing: landingES,
        aboutme: aboutmeES,
        footer: footerES,
        contact: contactES,
        projects: projectsES,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
