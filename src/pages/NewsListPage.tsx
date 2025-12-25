import { useGetNewsQuery } from '../features/news/newsApi';
import { useGetAuthorsQuery } from '../features/authors/authorsApi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



const fallbackImage = '/fallback-thumbnail.jpg'; 



export const NewsListPage = () => {


  const { t } = useTranslation();
  const { data: posts = [], isLoading } = useGetNewsQuery();
  const { data: authors = [] } = useGetAuthorsQuery();


  

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8 text-center">{t('news.title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">

              <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full" />

              <div className="p-6">

                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />

                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />

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

      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">

        {t('news.title')}

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post) => {

          const author = authors.find((a) => a.id === post.userId);

          return (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">

              <img
                src={`https://picsum.photos/400/300?random=${post.id}`}

                alt={post.title}

                onError={(e) => {
                  e.currentTarget.src = fallbackImage;

                }}

                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.body}</p>
                <div className="flex justify-between items-center">

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('news.author')}: {author?.name || 'Unknown'}
                  </p>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {t('news.readMore')} →
                  </Link>
                </div>
              </div>
            </div>
          );
                        }
        )
        }
      </div>
    </div>
  );
};