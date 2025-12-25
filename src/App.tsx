import { ThemeToggle } from './components/common/ThemeToggle';
import { LanguageToggle } from './components/common/LanguageToggle';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400">
        {t('app.title', { defaultValue: 'News App' })}
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        working
      </p>

      <div className="fixed top-4 right-4 flex gap-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}

export default App;