import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlayerVisible: false,
  isLoading: false,
  token: '',
};

export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
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

export const { setPlayerVisible, setToken, setIsLoading } = UISlice.actions;
export default UISlice.reducer;
