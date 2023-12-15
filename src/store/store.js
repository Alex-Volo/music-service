import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import userReducer from './UserSlice';
import playerReducer from './playerSlice';
import { musicServiceAPI } from 'services/API';

export const store = configureStore({
  reducer: {
    [musicServiceAPI.reducerPath]: musicServiceAPI.reducer,
    tracks: tracksReducer,
    user: userReducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicServiceAPI.middleware),
});

