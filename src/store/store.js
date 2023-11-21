import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import UIReducer from './UISlice';
import playerReducer from './playerSlice';
import { musicServiceAPI } from 'services/API';

export const store = configureStore({
  reducer: {
    [musicServiceAPI.reducerPath]: musicServiceAPI.reducer,
    tracks: tracksReducer,
    UI: UIReducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicServiceAPI.middleware)
});
