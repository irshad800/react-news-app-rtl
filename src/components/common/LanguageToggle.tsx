import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLanguage } from '../../features/language/languageSlice';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const dispatch = useAppDispatch();
const language = useAppSelector((state) => state.language.currentLanguage);
const { t: _t } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <button

      onClick={toggleLanguage}

     className="w-11 h-11 rounded-full bg-gray-200 dark:bg-gray-700  hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 
                 shadow-lg text-sm font-medium flex items-center justify-center  
                 text-gray-900 dark:text-gray-100" 


      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      {language === 'en' ? 'ع' : 'EN'}

    </button>
  );
};