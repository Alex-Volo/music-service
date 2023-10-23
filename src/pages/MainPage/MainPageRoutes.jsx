import { Tracks } from 'pages/Tracks/Tracks';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { Playlist } from 'pages/Playlist/Playlist';
import { Favorites } from 'pages/Favorites/Favorites';

export const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Tracks playlist="list" />} />
      <Route
        path="/favorites"
        // element={<Tracks heading="Избранное" playlist="favorites" />}
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
