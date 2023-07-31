import './App.css';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/UISlice';
import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { UserContext } from 'store/context';
import { useContext } from 'react';

function App() {
  const dispatch = useDispatch();
  dispatch(setToken(Boolean(Cookies.get('token'))));
  const user = Cookies.get('user');
  const isAllowed = Boolean(user);
  return (
    <UserContext.Provider value={{}}>
      <AppRoutes isAllowed={isAllowed} />
    </UserContext.Provider>
  );
}

export default App;
