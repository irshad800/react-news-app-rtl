import { useEffect } from 'react';
import { ThemeToggle } from '../components/common/ThemeToggle'
import { useAppSelector } from './hooks';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center relative transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        News App – Ready to Build 🚀
      </h1>

      <ThemeToggle />
    </div>
  );
}

export default App;