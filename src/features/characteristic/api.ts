import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Characteristic } from './types';

export const characteristicApi = createApi({
  reducerPath: 'characteristicApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['characteristicList'],
  endpoints: (builder) => ({
    getCharacteristicList: builder.query<Characteristic[], void>({
      query: (type) => ({
        url: '/characteristics',
        method: 'GET',
        body: type,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['characteristicList'],
    }),
    createCharacteristic: builder.mutation<Characteristic, Characteristic>({
      query: (data) => ({
        url: '/characteristics',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['characteristicList'],
    }),
    deleteCharacteristic: builder.mutation<Characteristic, Pick<Characteristic, 'id'>>({
      query: (data) => ({
        url: `/characteristics/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['characteristicList'],
    }),
    updateCharacteristic: builder.mutation<Characteristic, Partial<Characteristic>>({
      query: (data) => ({
        url: `/characteristics/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['characteristicList'],
    }),
  }),
});

export const {
  useGetCharacteristicListQuery,
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useUpdateCharacteristicMutation,
} = characteristicApi;
