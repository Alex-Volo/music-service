import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },

    setRefreshToken: (state, { payload }) => {
      state.refreshToken = payload;
    },
  },
});

export const { setAccessToken, setRefreshToken } = UserSlice.actions;
export default UserSlice.reducer;
