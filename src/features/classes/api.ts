import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterClass } from './types';
import { baseUrl } from '@/constants/api';

export const racesApi = createApi({
  reducerPath: 'racesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getClassesList: builder.query<CharacterClass[], void>({
      query: () => 'races',
    }),
    getClassById: builder.query<CharacterClass, { id: number }>({
      query: ({ id }) => `races/${id}`,
    }),
  }),
});

export const { useGetClassesListQuery, useGetClassByIdQuery } = racesApi;
