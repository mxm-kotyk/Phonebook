import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
      console.log(result.data.token);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.message,
        },
      };
    }
  };

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(userData) {
        return {
          url: '/users/signup',
          method: 'POST',
          data: userData,
        };
      },
      providesTags: ['Auth'],
    }),
    logInUser: builder.mutation({
      query(userData) {
        return {
          url: '/users/login',
          method: 'POST',
          data: userData,
        };
      },
      transformResponse: response => ({ ...response, isLoggedIn: true }),
      providesTags: ['Auth'],
      // async onCacheEntryAdded(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     cacheEntryRemoved,
      //     cacheDataLoaded,
      //     getCacheEntry,
      //   }
      // ) {
      //   console.log(cacheDataLoaded());
      // },
    }),
  }),
});

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Auth'],
//   endpoints: builder => ({
//     registerUser: builder.mutation({
//       query(userData) {
//         return {
//           url: '/users/signup',
//           method: 'POST',
//           body: userData,
//         };
//       },
//       providesTags: ['Auth'],
//     }),
//   }),
// });

export const { useRegisterUserMutation, useLogInUserMutation } = authApi;
