// import './App.css';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/UISlice';
import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { useContext, useState } from 'react';
import { getUserFromLS, UserContext } from 'store/context';

function App() {
  const [currentUser, setCurrentUser] = useState(getUserFromLS());
  const dispatch = useDispatch();

  // dispatch(setToken(Boolean(Cookies.get('token'))));
  const isAllowed = Boolean(currentUser);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRoutes isAllowed={isAllowed} />
    </UserContext.Provider>
  );
}

export default App;
