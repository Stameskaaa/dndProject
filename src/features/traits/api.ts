import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Trait } from './types';
import type { GetList, ListQuery } from '../types';

export const traitsApi = createApi({
  reducerPath: 'traitApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['traitList'],
  endpoints: (builder) => ({
    getTraitList: builder.query<GetList<Trait>, ListQuery | void>({
      query: (data) => ({
        url: '/features/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['traitList'],
    }),
    createTrait: builder.mutation<Trait, Trait>({
      query: (data) => ({
        url: '/features',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['traitList'],
    }),
    deleteTrait: builder.mutation<Trait, Pick<Trait, 'id'>>({
      query: (data) => ({
        url: `/features/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['traitList'],
    }),
    updateTrait: builder.mutation<Trait, Partial<Trait>>({
      query: (data) => ({
        url: `/features/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['traitList'],
    }),
  }),
});

export const {
  useGetTraitListQuery,
  useCreateTraitMutation,
  useDeleteTraitMutation,
  useUpdateTraitMutation,
} = traitsApi;
