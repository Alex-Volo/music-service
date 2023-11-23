import { createSlice } from '@reduxjs/toolkit';
import { getShuffledIndices } from 'helpers/helpers';
import { musicServiceAPI } from 'services/API';

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
        'https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3',
    });
  }
  return {
    list: fakeList,
    isLoading: false,
    shuffledOrder: [3, 2, 1, 0],
    favorites: fakeList,
    playlist1: fakeList,
    playlist2: fakeList,
    playlist3: fakeList,
    currentTrack: { name: '', author: '', track_file: '' },
  };
})();

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setTracks: (state, action) => {
      state.list = action.payload;
    },

    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },

    setShuffledOrder: (state, action) => {
      state.shuffledOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      musicServiceAPI.endpoints.getTracks.matchFulfilled,
      (state, { payload }) => {
        let tracks = payload;
        // Если пришел не массив, то вытаскиваем массив
        if (!Array.isArray(payload)) tracks = payload.items
        state.list = tracks;
        const shuffledIndices = getShuffledIndices(tracks);
        state.shuffledOrder = shuffledIndices;
      }
    );
  },
});
export const { setIsLoading, setTracks, setCurrentTrack, setShuffledOrder } =
  tracksSlice.actions;

export default tracksSlice.reducer;
