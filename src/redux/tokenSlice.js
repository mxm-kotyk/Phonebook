import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: { token: null },
  reducers: {
    setToken(state, { payload }) {
      // return payload;
      state.token = payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
