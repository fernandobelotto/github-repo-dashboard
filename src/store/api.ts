import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReposType } from '../types/ReposType'

const repos = 'repos'
const repo = 'repo'
const user = 'user'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: [repos, user, repo],
  baseQuery: fetchBaseQuery({
    baseUrl:'https://api.github.com',
  }),
  endpoints: build => ({
    getRepos: build.query<ReposType[], void>({
      query: () => '/users/fernandobelotto/repos',
      providesTags: [repos, user]
    }),
    getRepositoryByName: build.query<ReposType, string>({
      query: (name) => `/repos/fernandobelotto/${name}`,
      providesTags: [repo]
    }),
  }),
})

export const { useLazyGetReposQuery, useGetRepositoryByNameQuery } = api

// https://api.github.com/users/octocat/repos