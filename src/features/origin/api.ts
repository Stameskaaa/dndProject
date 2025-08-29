import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Origin } from './types';
import { baseUrl } from '@/constants/api';

export const originsApi = createApi({
  reducerPath: 'originsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOriginsList: builder.query<Origin[], void>({
      query: () => 'origins',
    }),
    getOriginById: builder.query<Origin, { id: string }>({
      query: ({ id }) => `origins/${id}`,
    }),
  }),
});

export const { useGetOriginsListQuery, useGetOriginByIdQuery } = originsApi;
