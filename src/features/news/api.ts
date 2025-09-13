import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { News } from './types';
import type { GetList, ListQuery } from '../types';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['newsList'],
  endpoints: (builder) => ({
    getNewsList: builder.query<GetList<News>, ListQuery | void>({
      query: (data) => ({
        url: '/news/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['newsList'],
    }),
    createNews: builder.mutation<News, News>({
      query: (data) => ({
        url: '/news',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['newsList'],
    }),
    deleteNews: builder.mutation<News, Pick<News, 'id'>>({
      query: (data) => ({
        url: `/news/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['newsList'],
    }),
    updateNews: builder.mutation<News, Partial<News>>({
      query: (data) => ({
        url: `/news/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['newsList'],
    }),
  }),
});

export const {
  useGetNewsListQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;
