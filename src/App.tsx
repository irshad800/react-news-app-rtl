  import { Outlet } from 'react-router-dom';
  import { ThemeToggle } from './components/common/ThemeToggle';
  import { LanguageToggle } from './components/common/LanguageToggle';
  import { useEffect } from 'react';
  import { useAppSelector } from './app/hooks';

  function App() {


    const theme = useAppSelector((state) => state.theme.theme);


    const language = useAppSelector((state) => state.language.currentLanguage);

    useEffect(() => {


      document.documentElement.classList.toggle('dark', theme === 'dark');

      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

      document.documentElement.lang = language;
      
    }, [theme, language]);

    return (

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <Outlet />

      <div className="fixed top-4 right-4 flex flex-col sm:flex-row gap-4 z-50">

  <LanguageToggle />
  <ThemeToggle />

</div>
      </div>
      
    );

  }

  export default App;