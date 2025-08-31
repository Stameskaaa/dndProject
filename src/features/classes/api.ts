import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterClass } from './types';
import { baseUrl } from '@/constants/api';

export const classesApi = createApi({
  reducerPath: 'classesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClassesList: builder.query<CharacterClass[], void>({
      query: () => 'classes',
    }),
    getClassById: builder.query<CharacterClass, { id: string }>({
      query: ({ id }) => `classes/${id}`,
    }),
  }),
});

export const { useGetClassesListQuery, useGetClassByIdQuery } = classesApi;
