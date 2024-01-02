import { AppRoutes } from 'routes';
import { GlobalStyle } from 'components';
import { useUser, useTheme } from 'hooks';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.user.user);
  const {theme} = useTheme();

  const isAllowed = Boolean(currentUser);
  return (
    <>
      <GlobalStyle $theme={theme}/>
      <AppRoutes isAllowed={isAllowed} />
    </>
  );
}

export default App;
