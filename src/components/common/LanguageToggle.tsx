import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLanguage } from '../../features/language/languageSlice';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const dispatch = useAppDispatch();
const language = useAppSelector((state) => state.language.currentLanguage);
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-20 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
    >
      {language === 'en' ? 'ع' : 'EN'}
    </button>
  );
};