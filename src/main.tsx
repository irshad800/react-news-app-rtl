import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store';

import { router } from './routes';

import './index.css';

import './i18n'; 

import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);