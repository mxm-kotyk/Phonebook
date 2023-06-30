import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filterReducer } from './filterSlice';
import { authApi } from './authApi';
import { tokenReducer } from './tokenSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
};

const persistedTokenReducer = persistReducer(persistConfig, tokenReducer);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: filterReducer,
    token: persistedTokenReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});

export const persistor = persistStore(store);
