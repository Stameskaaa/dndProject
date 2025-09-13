import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetList, ListQuery } from '../types';
import type { Race } from './types';

export const racesApi = createApi({
  reducerPath: 'racesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['racesList'],
  endpoints: (builder) => ({
    getRaceList: builder.query<GetList<Race>, ListQuery | void>({
      query: (data) => ({
        url: '/races/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['racesList'],
    }),
    createRace: builder.mutation<Race, Race>({
      query: (data) => ({
        url: '/races',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['racesList'],
    }),
    deleteRace: builder.mutation<Race, Pick<Race, 'id'>>({
      query: (data) => ({
        url: `/races/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['racesList'],
    }),
    updateRace: builder.mutation<Race, Partial<Race>>({
      query: (data) => ({
        url: `/races/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['racesList'],
    }),
  }),
});

export const {
  useGetRaceListQuery,
  useCreateRaceMutation,
  useUpdateRaceMutation,
  useDeleteRaceMutation,
} = racesApi;
