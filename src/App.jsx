// import './App.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { AppRoutes } from 'routes';
import { useState } from 'react';
import { getUserFromLS, UserContext } from 'store/context';

function App() {
  const [currentUser, setCurrentUser] = useState(getUserFromLS());

  const isAllowed = Boolean(currentUser);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRoutes isAllowed={isAllowed} />
    </UserContext.Provider>
  );
}

export default App;
