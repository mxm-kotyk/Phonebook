import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.goit.global',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: token => ({
        url: '/users/current',
        headers: {
          authorization: token,
        },
      }),
      providesTags: ['Auth'],
    }),
    registerUser: builder.mutation({
      query: userData => {
        return {
          url: '/users/signup',
          method: 'POST',
          body: userData,
        };
      },
      providesTags: ['Auth'],
    }),
    logInUser: builder.mutation({
      query: userData => {
        return {
          url: '/users/login',
          method: 'POST',
          body: userData,
        };
      },
      providesTags: ['Auth'],
    }),
    logOutUser: builder.mutation({
      query: token => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          authorization: token,
        },
      }),
      providesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useGetUserQuery,
  useLogOutUserMutation,
} = authApi;
