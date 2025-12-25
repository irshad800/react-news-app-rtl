import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { NewsListPage } from './pages/NewsListPage';
import { PostDetailsPage } from './pages/PostDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <NewsListPage />,
      },

    //   {
    //     path: 'post/:id',
    //     element: <PostDetai />,
    //   },

{
  path: 'post/:id',
  element: <PostDetailsPage />,
},

    ],
  },
]);