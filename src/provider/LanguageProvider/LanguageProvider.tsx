import { useState } from 'react';
import { defaultValue, LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
    const [language, setLanguage] = useState(defaultValue.language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
