import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.goit.global',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: token => ({
        url: '/contacts',
        headers: {
          authorization: token,
        },
      }),
      providesTags: ['Contact'],
      transformResponse: response => {
        return response.sort((a, b) => a.name.localeCompare(b.name));
      },
    }),
    addContact: builder.mutation({
      query: ({ contactData, token }) => ({
        url: `/contacts`,
        method: 'POST',
        body: contactData,
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
