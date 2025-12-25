import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import languageReducer from '../features/language/languageSlice';  

import { authorsApi } from '../features/authors/authorsApi';
import { newsApi } from '../features/news/newsApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer, 
    
    [newsApi.reducerPath]: newsApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(newsApi.middleware, authorsApi.middleware),
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;