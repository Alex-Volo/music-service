// import './App.css';
import { AppRoutes } from 'routes';
import { useState } from 'react';
import { getUserFromLS, UserContext } from 'store/context';
import { GlobalStyle } from 'components';

function App() {
  const [currentUser, setCurrentUser] = useState(getUserFromLS());

  const isAllowed = Boolean(currentUser);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <GlobalStyle />
      <AppRoutes isAllowed={isAllowed} />
    </UserContext.Provider>
  );
}

export default App;
