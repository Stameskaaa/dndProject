import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Race } from './types';

export const racesApi = createApi({
  reducerPath: 'racesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getRaceList: builder.query<Race[], void>({
      query: () => 'races',
    }),
    getRaceById: builder.query<Race, { id: number }>({
      query: ({ id }) => `races/${id}`,
    }),
  }),
});

export const { useGetRaceListQuery, useGetRaceByIdQuery } = racesApi;
