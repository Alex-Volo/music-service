import { Route, Routes } from 'react-router-dom';
import { NotFound, Playlist, Favorites, AllTracs } from 'pages';

export const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllTracs />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/playlist/:id" element={<Playlist />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
