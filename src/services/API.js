import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { setShuffledOrder } from 'store/tracksSlice';


export const musicServiceAPI = createApi({
  reducerPath: 'musicServiceAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  tagTypes: ['Tracks'],
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: (playlist = 'all') => {
        let addURL = '';
        // Если полученный аргумент можно привести к числу
        if (!isNaN(Number(playlist))) addURL = `catalog/selection/${playlist}`;
        else addURL = 'catalog/track/all/';
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

const baseURL = 'https://skypro-music-api.skyeng.tech/';
const subURLs = {
  all: 'catalog/track/all/',
  allPlaylists: 'catalog/selection/',
};

export const fetchTracks = (playlist) => {
  let addURL = '';
  // Если полученный аргумент можно привести к числу
  if (!isNaN(Number(playlist))) addURL = `catalog/selection/${playlist}`;
  else addURL = subURLs[playlist];

  return axios.get(baseURL + addURL).then((response) => response.data);
};

export const regNewUser = (email, pass, userName) => {
  return axios
    .post(baseURL + 'user/signup/', {
      email: email,
      password: pass,
      username: userName,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => response.data);
};

export const fetchLogin = (email, pass) => {
  return axios
    .post(baseURL + 'user/login/', {
      email: email,
      password: pass,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => response.data);
};
