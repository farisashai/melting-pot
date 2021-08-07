import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user-slice';

const reducer = {
  user: userReducer,
};

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer,
});
