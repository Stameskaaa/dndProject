import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/constants/api';
import type { Trait } from './types';

export const traitsApi = createApi({
  reducerPath: 'traitsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTraitsList: builder.query<Trait[], void>({
      query: () => 'traits',
    }),
    getTraitsById: builder.query<Trait, { id: string }>({
      query: ({ id }) => `traits/${id}`,
    }),
  }),
});

export const { useGetTraitsListQuery, useGetTraitsByIdQuery } = traitsApi;
