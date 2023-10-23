import { Tracks } from '../../Tracks/Tracks';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { Playlist } from '../../Playlist/Playlist';

export const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Tracks playlist="list" />} />
      <Route
        path="/favorites"
        element={<Tracks heading="Избранное" playlist="favorites" />}
      />
      <Route
        path="/playlist/:id"
        element={<Playlist heading="Плейлист дня" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
