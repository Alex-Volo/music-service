import { setAccessToken, setRefreshToken } from 'store/UserSlice';
import { musicServiceAPI } from './API';

const authAPISlice = musicServiceAPI.injectEndpoints({
  endpoints: (builder) => ({
    // endpoint LOGIN
    login: builder.mutation({
      async queryFn({ email, password }, queryApi, _extraOptions, fetchWithBQ) {
        const response = await Promise.all([
          fetchWithBQ({
            url: 'user/login/',
            method: 'POST',
            body: { email, password },
          }),

          fetchWithBQ({
            url: 'user/token/',
            method: 'POST',
            body: { email, password },
          }),
        ]);

        if (response[0].error) return response[0];

        if (response[1].error) return response[1];

        const userAndTokens = [response[0].data, response[1].data];
        // Убираю токены в LS а также диспачу в store
        localStorage.setItem('refreshToken', userAndTokens[1].refresh);
        localStorage.setItem('accessToken', userAndTokens[1].access);
        queryApi.dispatch(setRefreshToken(userAndTokens[1].refresh));
        queryApi.dispatch(setAccessToken(userAndTokens[1].access));

        return { data: userAndTokens };
      },
      extraOptions: { withoutRefresh: true },
    }),

    // endpoint Signup
    signup: builder.mutation({
      query: ({ email, password }) => ({
        url: 'user/signup/',
        method: 'POST',
        body: { email, password, username: email },
      }),
      extraOptions: { withoutRefresh: true },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authAPISlice;
