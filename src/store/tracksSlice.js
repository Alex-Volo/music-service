import { createSlice } from '@reduxjs/toolkit';

const initialState = (() => {
  const fakeList = [];
  for (let i = 0; i < 19; i++) {
    fakeList.push({
      id: i + 0.1,
      name: 'Chase',
      author: 'Alexander Nakarada',
      release_date: '2005-06-11',
      genre: 'Классическая музыка',
      duration_in_seconds: 205,
      album: 'Chase',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
    });
  }
  return { list: fakeList };
})();

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: initialState,
  reducers: {
    setTracks: (state, action) => {
      state.list = action.payload;
    },
    setCurrentSet: (state, action) => {
      state.currentSet = action.payload;
    },
  },
});
export const { setTracks, setCurrentSet } = tracksSlice.actions;

export default tracksSlice.reducer;
