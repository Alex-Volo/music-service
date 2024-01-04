import { createSlice } from '@reduxjs/toolkit';
import { getShuffledIndices } from 'helpers/helpers';

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
    visibleList: fakeList,
    activeList: fakeList,
    isLoading: false,
    isSearching: false,
    listOfFound: [],
    shuffledOrder: [3, 2, 1, 0],
    currentTrack: { name: '', author: '', track_file: '' },
    filterAuthors: [],
    filterGenres: [],
    dateSortType: null,
  };
})();

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },

    setListOfFound: (state, action) => {
      state.listOfFound = action.payload;
    },

    setVisibleList: (state, action) => {
      state.visibleList = action.payload;
    },

    setActiveList: (state, action) => {
      state.activeList = action.payload;
    },

    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },

    setShuffledOrder: (state, action) => {
      const shuffledIndices = getShuffledIndices(action.payload);
      state.shuffledOrder = shuffledIndices;
    },

    addOrRemoveAuthor: (state, { payload }) => {
      if (state.filterAuthors.includes(payload))
        state.filterAuthors = state.filterAuthors.filter(
          (el) => el !== payload
        );
      else state.filterAuthors.push(payload);
    },

    addOrRemoveGenre: (state, { payload }) => {
      if (state.filterGenres.includes(payload))
        state.filterGenres = state.filterGenres.filter((el) => el !== payload);
      else state.filterGenres.push(payload);
    },

    setDateSortType: (state, { payload }) => {
      state.dateSortType = payload;
    },

    removeFilter: (state, { payload }) => {
      state[payload[0]] = payload[1];
    },
  },
});
export const {
  setIsLoading,
  setIsSearching,
  setListOfFound,
  setVisibleList,
  setActiveList,
  setCurrentTrack,
  setShuffledOrder,
  addOrRemoveAuthor,
  addOrRemoveGenre,
  setDateSortType,
  removeFilter,
} = tracksSlice.actions;

export default tracksSlice.reducer;
