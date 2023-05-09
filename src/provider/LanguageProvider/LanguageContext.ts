import { Languages } from 'features/language';
import { createContext } from 'react';

export const defaultValue = {
    language: 'ENGLISH',
    setLanguage: (language: Languages) => {}
};

export const LanguageContext = createContext(defaultValue);
