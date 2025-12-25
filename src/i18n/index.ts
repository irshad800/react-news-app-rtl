import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en.json';

import arTranslation from './ar.json';

i18n
  .use(LanguageDetector)
 .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: localStorage.getItem('language') || 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  });


i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});




export default i18n;