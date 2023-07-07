import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './appSlice';

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
