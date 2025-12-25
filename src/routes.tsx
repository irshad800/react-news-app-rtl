import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { NewsListPage } from './pages/NewsListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <NewsListPage />,
      },
    ],
  },
]);