import { AppRoutes } from 'routes';
import { GlobalStyle } from 'components';
import { useUser, useTheme } from 'hooks';

function App() {
  const { currentUser } = useUser();
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
