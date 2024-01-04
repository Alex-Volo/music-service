import { musicServiceAPI } from './API';

const subURLs = {
  all: 'catalog/track/all/',
  allPlaylists: 'catalog/selection/',
  favorites: 'catalog/track/favorite/all/',
};

const tracksAPISlice = musicServiceAPI.injectEndpoints({
  endpoints: (builder) => ({
    // endpoint В зависимости от переданного плейлиста загружает:
    // все треки, конкретный плейлист или избранное
    // знаю, что универсальные функции зло, но в данном случае
    // получаем одну и ту же сущность от сервера, потому так
    getTracks: builder.query({
      query: (playlist = 'all') => {
        let addURL = '';
        // Если полученный аргумент можно привести к числу
        if (!isNaN(Number(playlist))) addURL = `catalog/selection/${playlist}`;
        else addURL = subURLs[playlist];
        return addURL;
      },

      transformResponse: (data, meta) => {
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

      invalidatesTags: (result, error, { id }) => [{ type: 'Tracks', id }],
    }),
  }),
});

export const {
  useGetTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = tracksAPISlice;
