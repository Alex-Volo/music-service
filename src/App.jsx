import './App.css';
import EntryForm from 'pages/EntryForm/EntryForm';
import { MainPage } from 'pages/MainPage/components/MainPage';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'store/UISlice';

function App() {
  const dispatch = useDispatch();
  dispatch(setToken(Boolean(Cookies.get('token'))));
  const isAllowed = Boolean(useSelector((state) => state.UI.token));
  return (
    <Routes>
      <Route path="/login" element={<EntryForm form="login" />} />
      <Route path="/registration" element={<EntryForm form="registration" />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/*" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
