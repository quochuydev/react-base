import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';

const lng = localStorage.getItem('lng') || 'en';

i18next.use(initReactI18next).init({
  lng,
  fallbackLng: 'en',
  resources: {
    en,
    vi,
  },
  keySeparator: false,
});

export default i18next;
