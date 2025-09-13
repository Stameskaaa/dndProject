import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { God } from './types';
import type { GetList, ListQuery } from '../types';

export const godApi = createApi({
  reducerPath: 'godApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['godList'],
  endpoints: (builder) => ({
    getGodList: builder.query<GetList<God>, ListQuery | void>({
      query: (type) => ({
        url: '/gods/search',
        method: 'POST',
        body: type,
      }),
      providesTags: ['godList'],
    }),
    createGod: builder.mutation<God, God>({
      query: (data) => ({
        url: '/gods',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['godList'],
    }),
    deleteGod: builder.mutation<God, Pick<God, 'id'>>({
      query: (data) => ({
        url: `/gods/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['godList'],
    }),
    updateGod: builder.mutation<God, Partial<God>>({
      query: (data) => ({
        url: `/gods/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['godList'],
    }),
  }),
});

export const {
  useGetGodListQuery,
  useCreateGodMutation,
  useDeleteGodMutation,
  useUpdateGodMutation,
} = godApi;
