import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: true,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
  },
});

export const { setIsPaused } = playerSlice.actions;
export default playerSlice.reducer;
