import './App.css';
import EntryForm from 'pages/EntryForm/EntryForm';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/UISlice';
import { AppRoutes } from 'components/AppRoutes/AppRoutes';

function App() {
  const dispatch = useDispatch();
  dispatch(setToken(Boolean(Cookies.get('token'))));
  const isAllowed = Boolean(useSelector((state) => state.UI.token));
  return <AppRoutes isAllowed={isAllowed} />;
}

export default App;
