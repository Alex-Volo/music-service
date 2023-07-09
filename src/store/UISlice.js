import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuVisible: false,
};
export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => ({ ...state, isMenuVisible: !state.isMenuVisible }),
  },
});

export const { toggleMenu } = UISlice.actions;
export default UISlice.reducer;
