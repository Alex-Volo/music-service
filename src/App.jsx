import './App.css';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/UISlice';
import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { UserContext } from 'store/context';
import { useContext, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  dispatch(setToken(Boolean(Cookies.get('token'))));
  const isAllowed = Boolean(user);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRoutes isAllowed={isAllowed} />
    </UserContext.Provider>
  );
}

export default App;
