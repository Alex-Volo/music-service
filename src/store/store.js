import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';
import userReducer from './UserSlice';
import playerReducer from './playerSlice';
import { musicServiceAPI } from 'services/API';

const combinedReducer = combineReducers({
  [musicServiceAPI.reducerPath]: musicServiceAPI.reducer,
  tracks: tracksReducer,
  user: userReducer,
  player: playerReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    localStorage.clear();
    state = undefined;
  }
  return combinedReducer(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicServiceAPI.middleware),
});
