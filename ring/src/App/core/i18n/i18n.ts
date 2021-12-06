import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_pl from '../../../translations/pl/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'pl',
    fallbackLng: 'pl',
    supportedLngs: ['pl'],
    resources: {
      pl: {
        common: common_pl,
      },
    },
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
