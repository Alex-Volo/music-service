import { AppRoutes } from 'routes';
import { GlobalStyle } from 'components';
import { useUser } from 'hooks';

function App() {
  const { currentUser } = useUser();

  const isAllowed = Boolean(currentUser);
  return (
    <>
      <GlobalStyle />
      <AppRoutes isAllowed={isAllowed} />
    </>
  );
}

export default App;
