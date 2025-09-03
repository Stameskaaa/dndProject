import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/constants/api';
import type { Class } from './types';

export const classesApi = createApi({
  reducerPath: 'classesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClassesList: builder.query<Class[], void>({
      query: () => 'classes',
    }),
    getClassById: builder.query<Class, { id: string }>({
      query: ({ id }) => `classes/${id}`,
    }),
  }),
});

export const { useGetClassesListQuery, useGetClassByIdQuery } = classesApi;
