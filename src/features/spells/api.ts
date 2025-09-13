import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetList } from '../types';
import type { Spell } from './types';
import type { RuleListProps } from '../rules/types';

export const spellsApi = createApi({
  reducerPath: 'spellsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['spellsList'],
  endpoints: (builder) => ({
    getSpellsList: builder.query<GetList<Spell>, RuleListProps | void>({
      query: (data) => ({
        url: '/spells/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['spellsList'],
    }),
    createSpell: builder.mutation<Spell, Spell>({
      query: (data) => ({
        url: '/spells',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['spellsList'],
    }),
    deleteSpell: builder.mutation<Spell, Pick<Spell, 'id'>>({
      query: (data) => ({
        url: `/spells/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['spellsList'],
    }),
    updateSpell: builder.mutation<Spell, Partial<Spell>>({
      query: (data) => ({
        url: `/spells/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['spellsList'],
    }),
  }),
});

export const {
  useGetSpellsListQuery,
  useCreateSpellMutation,
  useDeleteSpellMutation,
  useUpdateSpellMutation,
} = spellsApi;
