import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/constants/api';
import type { SpellCardType, SpellDataType } from './types';

export const spellsApi = createApi({
  reducerPath: 'spellsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSpellsList: builder.query<SpellCardType[], void>({
      query: () => 'spells',
    }),
    getSpellById: builder.query<SpellDataType, { id: number }>({
      query: ({ id }) => `spells/${id}`,
    }),
  }),
});

export const { useGetSpellsListQuery, useGetSpellByIdQuery } = spellsApi;
