import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken(state, { payload }) {
      return payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
