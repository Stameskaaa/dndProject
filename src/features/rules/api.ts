import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Rule, RuleListProps } from './types';
import type { GetList } from '../types';

export const rulesApi = createApi({
  reducerPath: 'rulesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['ruleList'],
  endpoints: (builder) => ({
    getRulesList: builder.query<GetList<Rule>, RuleListProps | void>({
      query: (data) => ({
        url: '/rules/search',
        method: 'POST',
        body: data,
      }),
      providesTags: ['ruleList'],
    }),
    createRule: builder.mutation<Rule, Rule>({
      query: (data) => ({
        url: '/rules',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ruleList'],
    }),
    deleteRule: builder.mutation<Rule, Pick<Rule, 'id'>>({
      query: (data) => ({
        url: `/rules/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ruleList'],
    }),
    updateRule: builder.mutation<Rule, Partial<Rule>>({
      query: (data) => ({
        url: `/rules/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['ruleList'],
    }),
  }),
});

export const {
  useGetRulesListQuery,
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useUpdateRuleMutation,
} = rulesApi;
