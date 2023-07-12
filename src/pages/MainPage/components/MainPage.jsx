import * as S from './styles';
import { Header } from './Header/Header';
import { MainNav } from './MainNav/MainNav';
import { Tracks } from './Tracks/Tracks';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';
import { Route, Routes } from 'react-router-dom';

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
          path="/playlist/:id"
          element={<Tracks heading="Избранное" playlist="favorites" />}
        />
      </Routes>
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
