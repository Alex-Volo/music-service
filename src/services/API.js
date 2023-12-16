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

      if (accessToken) headers.set('authorization', `Bearer ${accessToken}`);

      return headers;
    },
  }),

  tagTypes: ['Tracks'],

  endpoints: (builder) => ({
    // endpoint
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

      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Tracks', id: 'LIST' }],
    }),

    // endpoint
    likeTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),

      invalidatesTags: (result, error, { id }) => [{ type: 'Tracks', id }],
    }),

    // endpoint
    dislikeTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      extraOptions: {},

      invalidatesTags: (result, error, { id }) => [{ type: 'Tracks', id }],
    }),
  }),
});

export const {
  useGetTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = musicServiceAPI;

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

// Логин и получение токенов одновременно, здесь же кладу refresh and
// access Tokens в localStorage
export const queryLogin = (email, password) => {
  return Promise.all([
    axios
      .post(baseUrl + 'user/login/', {
        email,
        password,

        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => response.data),

    axios
      .post(baseUrl + 'user/token/', {
        email: email,
        password: password,

        headers: {
          'content-type': 'application/json',
        },
      })
      .then(({ data }) => {
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('accessToken', data.access);
        return data;
      }),
  ]);
};

export const refreshToken = (
  refresh = localStorage.getItem('refreshToken')
) => {
  return axios
    .post(baseUrl + 'user/token/refresh/', {
      refresh,

      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => {
      localStorage.setItem('accessToken', response.data.access)
     return response.data.access
    });
};
