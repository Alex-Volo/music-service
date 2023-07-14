import * as S from './styles';
import { Header } from './Header/Header';
import { MainNav } from './MainNav/MainNav';
import { Tracks } from './Tracks/Tracks';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Header />
      <MainNav />
      <Routes>
        <Route path="/" element={<Tracks />} />
        <Route
          path="/favorites"
          element={<Tracks heading="Избранное" playlist="favorites" />}
        />
        <Route
          path="/playlist/1"
          element={<Tracks heading="Плейлист дня" playlist="playlist1" />}
        />
        <Route
          path="/playlist/2"
          element={<Tracks heading="100 танцевальных хитов" playlist="playlist2" />}
        />
        <Route
          path="/playlist/3"
          element={<Tracks heading="Инди-заряд" playlist="playlist3" />}
        />
               <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
