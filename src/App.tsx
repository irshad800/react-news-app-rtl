import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import { ThemeToggle } from './components/common/ThemeToggle';
import { LanguageToggle } from './components/common/LanguageToggle';
import { useTranslation } from 'react-i18next';

function App() {


  const theme = useAppSelector((state) => state.theme.theme);

  const language = useAppSelector((state) => state.language.currentLanguage);

  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.lang = language;
  }, [theme, language]);




  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">

      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {t('app.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('news.loading')}
        </p>
      </div>
      
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
}

export default App;