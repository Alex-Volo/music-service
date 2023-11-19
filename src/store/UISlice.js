import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlayerVisible: false,
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
  },
});

export const { setPlayerVisible, setToken } = UISlice.actions;
export default UISlice.reducer;
