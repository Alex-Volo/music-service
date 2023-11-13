import { ProtectedRoute } from 'routes';
import { AllTracs, Favorites, Login, MainPage, NotFound, Playlist, SignUp } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = ({ isAllowed }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<SignUp />} />

      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>

        <Route path="/*" element={<MainPage />}>
          <Route index element={<AllTracs />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Route>
    </Routes>
  );
};
