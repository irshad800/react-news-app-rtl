import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
            {t('news.pageNotFound') || 'Page Not Found'}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {t('news.pageNotFoundDesc') || 'The page you are looking for might have been removed or is temporarily unavailable.'}
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          ← {t('news.backToNews') || 'Back to News'}
        </Link>
      </div>
    </div>
  );
};