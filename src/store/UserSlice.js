import { createSlice } from '@reduxjs/toolkit';
import { getUserFromLS } from 'helpers/helpers';

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  user: getUserFromLS(),
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

    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    // Дополнительные редьюсеры
    // Почему-то не выполняются
    builder.addCase(setUser, (state, action) => {
      console.log('Выполняется экстра редюсер');
    });
  },
});

export const { setAccessToken, setRefreshToken, setUser } = UserSlice.actions;
export default UserSlice.reducer;
