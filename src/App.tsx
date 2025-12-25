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

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, []);

   
   
   
    // Initialize 





    useEffect(() => {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      }
    }, []);

    return (

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <Outlet />

      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50 sm:flex-row sm:gap-4">

  <LanguageToggle />
  <ThemeToggle />

</div>
      </div>
      
    );

  }

  export default App;