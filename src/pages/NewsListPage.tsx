import { useEffect } from 'react';

import { useGetNewsQuery } from '../features/news/newsApi';
import { useGetAuthorsQuery } from '../features/authors/authorsApi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';



const fallbackImage = '/fallback-thumbnail.jpg'; 



export const NewsListPage = () => {


  const { t } = useTranslation();
  const { data: posts = [], isLoading } = useGetNewsQuery();
  const { data: authors = [] } = useGetAuthorsQuery();

  const location = useLocation();


useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location.state]);
  

  if (isLoading) {

    return (
      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8 text-center">{t('news.title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
          [...Array(6)].map((_, i) => (


            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100 dark:border-gray-700">

              <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full"></div>

              <div className="p-6">

                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-4"></div>


                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">


                  <div className="flex items-center space-x-2">

                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div>

                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-1"></div>

                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>

                    </div>    </div>
                
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-24"></div>
                </div>
              </div>
            </div>
          )
                  )}
        </div>
      </div>
    );
  }




  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="text-center mb-16 relative">
      
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl"></div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
          {t('news.title')}
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          {t('news.stayInformed')}
        </p>

     
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm md:text-base">
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{t('news.liveUpdates')}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span>{t('news.coverage')}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span>{t('news.globalNews')}</span>
          </div>
        </div>

       
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post) => {

          const author = authors.find((a) => a.id === post.userId);

          return (
            <article key={post.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-slate-300 dark:hover:border-slate-500 transform hover:-translate-y-1">

              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/400/300?random=${post.id}`}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                    News
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">

                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.body}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 gap-4">

                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {author?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {author?.name || 'Unknown'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        2 {t('news.hoursAgo')}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/post/${post.id}`}
                    className="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0"
                  >
                    {t('news.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          );
                        }
        )
        }
      </div>
    </div>
  );
};