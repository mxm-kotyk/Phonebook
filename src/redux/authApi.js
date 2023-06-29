import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { setToken } from 'helpers/axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      setToken(result.data.token);
      console.log(result.data);
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
    getUser: builder.query({
      query: () => '/users/current',
      providesTags: ['Auth'],
    }),
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
      // transformResponse: response => ({ ...response, isLoggedIn: true }),
      providesTags: ['Auth'],
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: '/users/logout',
          method: 'POST',
        };
      },
      providesTags: ['Auth'],
    }),
  }),
});

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     // prepareHeaders: (headers, { getState }) => {
//     //   const token = getState()
//     // }
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

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useGetUserQuery,
  useLogOutUserMutation,
} = authApi;
