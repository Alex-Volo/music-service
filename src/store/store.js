import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import UIReducer from './UISlice';
import playerReducer from './playerSlice'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    UI: UIReducer,
    player: playerReducer,
  },
});
