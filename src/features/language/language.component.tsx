import useLanguageContext from 'provider/LanguageProvider/useLanguageContext';

const LanguageComponent = () => {
    const { setLanguage, language, t } = useLanguageContext();

    return (
        <div className={'language'}>
            <div
                onClick={() => setLanguage('SPANISH')}
                className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
                {t('language.spanish')}
            </div>
            <button
                onClick={() => setLanguage('ENGLISH')}
                className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
                {t('language.english')}
            </button>
            <button
                onClick={() => setLanguage('PORTUGUESE')}
                className={
                    language === 'PORTUGUESE' ? 'language-button active' : 'language-button'
                }>
                {t('language.portuguese')}
            </button>
        </div>
    );
};
export default LanguageComponent;
