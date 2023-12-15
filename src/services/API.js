import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseUrl = 'https://skypro-music-api.skyeng.tech/';
const subURLs = {
  all: 'catalog/track/all/',
  allPlaylists: 'catalog/selection/',
  favorites: 'catalog/track/favorite/all/',
};

export const musicServiceAPI = createApi({
  reducerPath: 'musicServiceAPI',

  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().user.accessToken;
      console.log(accessToken)
      if (accessToken) headers.set('authorization', `Bearer ${accessToken}`);

      return headers
    },
  }),
  tagTypes: ['Tracks'],
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: (playlist = 'all') => {
        let addURL = '';
        // Если полученный аргумент можно привести к числу
        if (!isNaN(Number(playlist))) addURL = `catalog/selection/${playlist}`;
        else addURL = subURLs[playlist];
        return addURL;
      },

      transformResponse: (data) => {
        let tracks = data;
        if (!Array.isArray(data)) tracks = data.items;
        return tracks;
      },
      providesTags: ['Tracks'],
    }),
  }),
});

export const { useGetTracksQuery } = musicServiceAPI;

export const regNewUser = (email, pass) => {
  return axios
    .post(baseUrl + 'user/signup/', {
      email: email,
      password: pass,
      username: email,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => response.data);
};

export const getTokens = (email, pass) => {
  return axios
    .post(baseUrl + 'user/token/', {
      email: email,
      password: pass,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then(({data}) => {
      localStorage.setItem('refreshToken', data.refresh);
      localStorage.setItem('accessToken', data.access);
      return data;
    });
};

export const queryLogin = (email, pass) => {
  return axios
    .post(baseUrl + 'user/login/', {
      email: email,
      password: pass,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => response.data);
};
