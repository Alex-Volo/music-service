import { ProtectedRoute } from 'components';
import { EntryForm } from 'pages';
import { MainPage } from 'pages';
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
