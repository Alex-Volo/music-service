import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuVisible: false,
  isPlayerVisible: false,
  isLoading: false,
  token: '',
};

export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => ({ ...state, isMenuVisible: !state.isMenuVisible }),

    setPlayerVisible: (state) => ({
      ...state,
      isPlayerVisible: true,
    }),

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleMenu, setPlayerVisible, setToken, setIsLoading } = UISlice.actions;
export default UISlice.reducer;
