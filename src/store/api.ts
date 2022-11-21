import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReposType } from '../types/ReposType'

const repos = 'repos'
const user = 'user'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: [repos, user],
  baseQuery: fetchBaseQuery({
    baseUrl:'https://api.github.com',
  }),
  endpoints: build => ({
    getRepos: build.query<ReposType[], void>({
      query: () => '/users/fernandobelotto/repos',
      providesTags: [repos, user]
    }),
  }),
})

export const { useLazyGetReposQuery } = api

// https://api.github.com/users/octocat/repos