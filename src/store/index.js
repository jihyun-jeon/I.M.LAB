import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import userReducer from './userSlice';

// 1. store객체를 만들어 형태를 만들어준다.
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});
