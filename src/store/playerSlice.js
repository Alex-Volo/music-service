import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  audioAPI: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    setAudioAPI: (state, action) => {
      state.audioAPI = action.payload;
    },
  },
});
export const { setAudioAPI } = playerSlice.actions;

export default playerSlice.reducer;
