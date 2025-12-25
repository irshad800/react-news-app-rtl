import { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { useGetNewsQuery } from '../features/news/newsApi';


import { useGetAuthorsQuery } from '../features/authors/authorsApi';
import { useTranslation } from 'react-i18next';

const fallbackImage = '/fallback-thumbnail.jpg';

export const PostDetailsPage = () => {


 const { id } = useParams<{ id: string }>();


  const { t } = useTranslation();

 const { data: posts = [], isLoading: postsLoading } = useGetNewsQuery();
  const { data: authors = [], isLoading: authorsLoading } = useGetAuthorsQuery();

  const isLoading = postsLoading || authorsLoading;


  const post = posts.find(p => p.id === Number(id));
  
  const author = authors.find(a => a.id === post?.userId);


useEffect(() => {
    if (post) {
      document.title = `${post.title} | News App`;
    } else {
      document.title = 'Article Not Found | News App';
    }
  }, [post?.title]);

  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600 dark:text-gray-300">
          {t('news.loading')}...
        </div>
      </div>
    );
  }

 if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {t('news.articleNotFound') || 'Article Not Found'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {t('news.articleNotFoundDesc') || 'The article you are looking for does not exist or was removed.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          ← {t('news.backToNews') || 'Back to News List'}
        </Link>
      </div>
    );
  }

  const readingTime = Math.ceil(post.body.split(' ').length / 200);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('news.backToNews')}
        </Link>
      </nav>

      <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">



        <div className="relative">
          <img
            src={`https://picsum.photos/800/400?random=${post.id}`}
            alt={post.title}
            onError={(e) => { e.currentTarget.src = fallbackImage; }}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
              {t('news.category')}
            </span>
          </div>
        </div>


        <div className="p-6 sm:p-8 lg:p-12">


          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">

                    {author?.name?.charAt(0)?.toUpperCase() || 'A'}

                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{author?.name || 'Unknown Author'}</p>


                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('news.published')} 2 {t('news.hoursAgo')}</p>

                </div>

              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>{readingTime} {t('news.minRead')}</span>

                <span>•</span>

                <span>{t('news.category')}</span>
              </div>

            </div>

          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:dark:text-blue-400 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {post.body}
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 dark:text-slate-400 my-8 bg-slate-50 dark:bg-slate-800/50 py-4 rounded-r-lg">
              "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
            </blockquote>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


              <div className="flex items-center gap-4">


          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent 
                   text-slate-700 dark:text-slate-300 
                   hover:text-blue-600 dark:hover:text-blue-400 
                   transition-colors duration-300 
                   border border-slate-300 dark:border-slate-600 
                   hover:border-blue-600 dark:hover:border-blue-400">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  <span>{t('news.like')}</span>
</button>

<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent 
                   text-slate-700 dark:text-slate-300 
                   hover:text-blue-600 dark:hover:text-blue-400 
                   transition-colors duration-300 
                   border border-slate-300 dark:border-slate-600 
                   hover:border-blue-600 dark:hover:border-blue-400">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
  <span>{t('news.share')}</span>
</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400">{t('news.tags')}</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full">{t('news.category')}</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full">{t('news.title')}</span>
              </div>

            </div>
          </footer>
        </div>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('news.relatedArticles')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
              <img
                src={`https://picsum.photos/300/200?random=${item + 10}`}
                alt={`Related article ${item}`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {t('news.relatedArticleTitle')} {item}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {t('news.relatedArticleDesc')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};