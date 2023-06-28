import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filterReducer } from './filterSlice';
import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});
