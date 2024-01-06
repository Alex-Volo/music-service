import { AppRoutes } from 'routes';
import { GlobalStyle } from 'components';
import { useUser, useTheme } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromLS } from 'helpers/helpers';
import { setUser } from 'store/UserSlice';

function App() {
  const dispatch = useDispatch();

  // Такие пляски с бубном приходится устраивать потому, что при
  // RESETе redux store (методом, который рекомендует сам Дэн Абрамов на stackoverlow)
  // юзер сохраняется несмотря на очистку LS, видимо редакс запоминает INITIAL
  // где впервые берутся данные о юзере из LS и возвращает копию именно его, и
  // не обращается к LS, как должен бы. Пока не разобрался.
  let currentUser = useSelector((state) => state.user.user);
  if (!currentUser) {
    currentUser = getUserFromLS();
    if (currentUser) dispatch(setUser(currentUser));
  }
  if (!currentUser) currentUser = null;
  const { theme } = useTheme();

  const isAllowed = Boolean(currentUser);
  return (
    <>
      <GlobalStyle $theme={theme} />
      <AppRoutes isAllowed={isAllowed} />
    </>
  );
}

export default App;
