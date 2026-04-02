import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zh from './locales/zh.json';
import es from './locales/es.json';
import ja from './locales/ja.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      es: { translation: es },
      ja: { translation: ja },
      fr: { translation: fr },
      de: { translation: de },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Set HTML lang attribute on language change for Chrome translation
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  // Update meta tag for better browser language detection
  let metaTag = document.querySelector('meta[http-equiv="content-language"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'content-language');
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', lng);
});

export default i18n;
