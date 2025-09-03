import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/constants/api';
import type { Spell } from './types';

export const spellsApi = createApi({
  reducerPath: 'spellsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSpellsList: builder.query<Spell[], void>({
      query: () => 'spells',
    }),
    getSpellById: builder.query<Spell, { id: string }>({
      query: ({ id }) => `spells/${id}`,
    }),
  }),
});

export const { useGetSpellsListQuery, useGetSpellByIdQuery } = spellsApi;
