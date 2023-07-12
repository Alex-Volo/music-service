import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuVisible: false,
  token: '',
};
export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => ({ ...state, isMenuVisible: !state.isMenuVisible }),
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { toggleMenu, setToken } = UISlice.actions;
export default UISlice.reducer;
