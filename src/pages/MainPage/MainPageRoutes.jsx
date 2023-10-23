import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { Playlist } from 'pages/Playlist/Playlist';
import { Favorites } from 'pages/Favorites/Favorites';
import { AllTracs } from 'pages/AllTracs/AllTracs';

export const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllTracs />} />
      <Route
        path="/favorites"
        element={<Favorites />}
      />
      <Route
        path="/playlist/:id"
        element={<Playlist heading="Плейлист дня" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
