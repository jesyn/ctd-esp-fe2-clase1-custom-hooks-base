import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import esTranslations from './../../data/i18n.es';
import enTranslations from './../../data/i18n.en';
import ptTranslations from './../../data/i18n.pt';

const useLanguageContext = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const t = (key: string) => {
        if (language === 'SPANISH') {
            return esTranslations[key];
        } else if (language === 'ENGLISH') {
            return enTranslations[key];
        } else if (language === 'PORTUGUESE') {
            return ptTranslations[key];
        }
        return key;
    };

    return { language, setLanguage, t };
};

export default useLanguageContext;
