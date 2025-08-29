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
  }),
});

export const { useGetTraitsListQuery } = traitsApi;
