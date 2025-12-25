import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const authorsApi = createApi({
  reducerPath: 'authorsApi',
  
//   API
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({

    getAuthors: builder.query<Author[], void>({
      query: () => 'users',
    }),
  }),
});

export const { useGetAuthorsQuery } = authorsApi;