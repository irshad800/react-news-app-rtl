import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getNews: builder.query<Post[], void>({
      query: () => 'posts',
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;