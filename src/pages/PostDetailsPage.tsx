import { useParams, Link } from 'react-router-dom';
import { useGetNewsQuery } from '../features/news/newsApi';


import { useGetAuthorsQuery } from '../features/authors/authorsApi';
import { useTranslation } from 'react-i18next';

const fallbackImage = '/fallback-thumbnail.jpg';

export const PostDetailsPage = () => {


  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation();

  const { data: posts = [] } = useGetNewsQuery();

  const { data: authors = [] } = useGetAuthorsQuery();


  const post = posts.find(p => p.id === Number(id));
  
  const author = authors.find(a => a.id === post?.userId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('news.title')} Not Found</h1>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to News List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to News
      </Link>

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">

        <img
          src={`https://picsum.photos/800/400?random=${post.id}`}    alt={post.title}   onError={(e) => { e.currentTarget.src = fallbackImage; }}  className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">

            {post.title}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t('news.author')}: <span className="font-medium">{author?.name || 'Unknown'}</span>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {post.body}
          </p>   </div>      </article>
      
   
    </div>
  );
};