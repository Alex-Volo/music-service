import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: true,
  isLoop: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    toggleLoop: (state) => {
      state.isLoop = !state.isLoop;
    },
  },
});

export const { setIsPaused, toggleLoop } = playerSlice.actions;
export default playerSlice.reducer;
