import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { setAccessToken } from 'store/UserSlice';

const baseUrl = 'https://skypro-music-api.skyeng.tech/';
const subURLs = {
  all: 'catalog/track/all/',
  allPlaylists: 'catalog/selection/',
  favorites: 'catalog/track/favorite/all/',
};

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().user.accessToken;
    console.log('Старый токен', accessToken)

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
      headers.set('content-type', 'application/json');
    }

    return headers;
  },
});

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  console.log('Запустился baseQueryWthRefrsh')
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.status === 401) {
    console.log('Отправляю refreshToken, обновляю accessToken');

    if (!api.getState().user?.refreshToken) console.log('Нет рефреш токена, нужен логаут');

    const responseFromRefresh = await baseQuery({
      url: 'user/token/refresh/',
      method: 'POST',
      body: { refresh: localStorage.getItem('refreshToken') },
    }, api, extraOptions);
    console.log('Ответ на refresh: ', responseFromRefresh);

    if (responseFromRefresh?.data) {
      api.dispatch(setAccessToken(responseFromRefresh.data.access));
      console.log(api.getState().user.accessToken)
      localStorage.setItem('accessToken', responseFromRefresh.data.access);

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('Рефреш не произошел, необходимо перезагрузить страницу');
    }
  }

  return result;
};

export const musicServiceAPI = createApi({
  reducerPath: 'musicServiceAPI',

  baseQuery: baseQueryWithRefresh,

  tagTypes: ['Tracks'],

  endpoints: (builder) => ({
    // endpoint
    refresh: builder.mutation({
      query: () => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body: { refresh: localStorage.getItem('refreshToken') },
      }),
    }),

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
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access;
    });
};
