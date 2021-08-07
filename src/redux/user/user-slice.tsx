import { createSlice } from '@reduxjs/toolkit';

const INIT_STATE = {};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: INIT_STATE,
  reducers: {
    updateUser: (state, action) => action.payload ?? INIT_STATE,
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
