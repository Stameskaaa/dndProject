import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetList, ListQuery } from '../types';
import type { Class } from './types';

export const classesApi = createApi({
  reducerPath: 'classesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['classesList'],
  endpoints: (builder) => ({
    getClasses: builder.query<GetList<Class>, ListQuery | void>({
      query: (data) => ({
        url: '/classes/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['classesList'],
    }),
    createClass: builder.mutation<Class, Class>({
      query: (data) => ({
        url: '/classes',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['classesList'],
    }),
    deleteClass: builder.mutation<Class, Pick<Class, 'id'>>({
      query: (data) => ({
        url: `/classes/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['classesList'],
    }),
    updateClass: builder.mutation<Class, Partial<Class>>({
      query: (data) => ({
        url: `/classes/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['classesList'],
    }),
  }),
});

export const {
  useGetClassesQuery,
  useCreateClassMutation,
  useDeleteClassMutation,
  useUpdateClassMutation,
} = classesApi;
