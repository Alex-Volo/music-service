import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import EntryForm from 'pages/EntryForm/EntryForm';
import { MainPage } from 'pages/MainPage/components/MainPage';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = ({isAllowed}) => {
  return (
    <Routes>
      <Route path="/login" element={<EntryForm form="login" />} />
      <Route path="/registration" element={<EntryForm form="registration" />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
