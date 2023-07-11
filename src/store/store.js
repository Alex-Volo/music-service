import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import UIReducer from './UISlice'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    UI: UIReducer,
  },
});
