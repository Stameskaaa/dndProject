import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetList, ListQuery } from '../types';
import type { Origin } from './types';

export const originsApi = createApi({
  reducerPath: 'originsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['originList'],
  endpoints: (builder) => ({
    getOriginList: builder.query<GetList<Origin>, ListQuery | void>({
      query: (data) => ({
        url: '/origins/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['originList'],
    }),
    createOrigin: builder.mutation<Origin, Origin>({
      query: (data) => ({
        url: '/origins',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['originList'],
    }),
    deleteOrigin: builder.mutation<Origin, Pick<Origin, 'id'>>({
      query: (data) => ({
        url: `/origins/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['originList'],
    }),
    updateOrigin: builder.mutation<Origin, Partial<Origin>>({
      query: (data) => ({
        url: `/origins/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['originList'],
    }),
  }),
});

export const {
  useGetOriginListQuery,
  useCreateOriginMutation,
  useUpdateOriginMutation,
  useDeleteOriginMutation,
} = originsApi;
