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
  prepareHeaders: (headers, { getState }, extraOptions) => {
    console.log('это экстра опции', extraOptions);
    if (extraOptions?.doNotSendToken) {
      headers.set('content-type', 'application/json');
      return headers;
    }

    const accessToken = getState().user.accessToken;

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
      headers.set('content-type', 'application/json');
    }

    return headers;
  },
});

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  console.log('это в реаус', extraOptions);
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) return result;

  console.log('Отправляю refreshToken, обновляю accessToken');

  if (!api.getState().user?.refreshToken)
    console.log('Нет рефреш токена, нужен логаут');

  const responseFromRefresh = await baseQuery(
    {
      url: 'user/token/refresh/',
      method: 'POST',
      body: { refresh: localStorage.getItem('refreshToken') },
    },
    api,
    extraOptions
  );

  if (responseFromRefresh?.data) {
    api.dispatch(setAccessToken(responseFromRefresh.data.access));
    localStorage.setItem('accessToken', responseFromRefresh.data.access);

    result = await baseQuery(args, api, extraOptions);
    return result;
  }

  console.log('Рефреш не произошел, необходимо перезагрузить страницу');
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

    // endpoint В зависимости от переданного плейлиста загружает:
    // все треки, конкретный плейлист или избранное
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

    // endpoint LIKE
    likeTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),

      invalidatesTags: (result, error, { id }) => [{ type: 'Tracks', id }],
    }),

    // endpoint DISLIKE
    dislikeTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      extraOptions: {},

      invalidatesTags: (result, error, { id }) => [{ type: 'Tracks', id }],
    }),

    // LOGIN
    login: builder.mutation({
      async queryFn(
        { email, password },
        queryApi,
        extraOptions = { doNotSendToken: true },
        fetchWithBQ
      ) {
        console.log(extraOptions, 'Этов queryFn');
        const response = await Promise.all([
          fetchWithBQ(
            {
              url: 'user/login/',
              method: 'POST',
              body: { email, password },
            },
            queryApi,
            extraOptions
          ),

          fetchWithBQ(
            {
              url: 'user/token/',
              method: 'POST',
              body: { email, password },
            },
            queryApi,
            extraOptions
          ),
        ]);

        console.log('Это результат promiseAll', response);
        return response;
        // const randomResult = await fetchWithBQ('users/random')
        // if (randomResult.error) return { error: randomResult.error }
        // const user = randomResult.data
        // const result = await fetchWithBQ(`user/${user.id}/posts`)
        // return result.data ? { data: result.data } : { error: result.error }
      },
    }),
  }),
});

export const {
  useGetTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useLoginMutation,
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
