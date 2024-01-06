import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken } from 'store/UserSlice';

const baseUrl = 'https://skypro-music-api.skyeng.tech/';

// Базовый запрос, готовлю заголовки
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set('content-type', 'application/json');

    // Если происходит логин или регистрация нового пользователя
    // accessToken не отправляется в заголовках
    if (endpoint === 'login' || endpoint === 'signup') return headers;

    const accessToken = getState().user.accessToken;
    if (accessToken) headers.set('authorization', `Bearer ${accessToken}`);

    return headers;
  },
});

// Обертка базового запроса: делает повторную авторизацию by JWT
const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (extraOptions?.withoutRefresh) return result;

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

  localStorage.clear();
  api.dispatch({ type: 'RESET' });
  console.log('Рефреш не произошел, необходимо перезагрузить страницу');
};

// Все эндпоинты лежат в своих слайсах
export const musicServiceAPI = createApi({
  reducerPath: 'musicServiceAPI',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Tracks'],
  endpoints: (builder) => ({}),
});
