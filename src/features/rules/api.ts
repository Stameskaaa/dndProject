import { baseUrl } from './../../constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Rule } from './types';

export const rulesApi = createApi({
  reducerPath: 'rulesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['ruleList'],
  endpoints: (builder) => ({
    getRulesList: builder.query<Rule[], Pick<Rule, 'type'> | void>({
      query: (type) => ({
        url: '/rules/search',
        method: 'POST',
        body: type,
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
  }),
});

export const { useGetRulesListQuery, useCreateRuleMutation } = rulesApi;
