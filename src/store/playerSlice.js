import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlayerVisible: false,
  isPaused: true,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },

    setPlayerVisible: (state) => ({
      ...state,
      isPlayerVisible: true,
    }),
  },
});

export const { setIsPaused, setPlayerVisible } = playerSlice.actions;
export default playerSlice.reducer;
