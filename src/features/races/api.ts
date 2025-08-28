import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Race } from './types';
import { baseUrl } from '@/constants/api';

export const racesApi = createApi({
  reducerPath: 'racesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRaceList: builder.query<Race[], void>({
      query: () => 'races',
    }),
    getRaceById: builder.query<Race, { id: string }>({
      query: ({ id }) => `races/${id}`,
    }),
  }),
});

export const { useGetRaceListQuery, useGetRaceByIdQuery } = racesApi;
