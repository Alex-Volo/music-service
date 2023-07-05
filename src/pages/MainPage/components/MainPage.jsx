import * as S from './styles';
import { Header } from './Header/Header';
import { MainNav } from './MainNav/MainNav';
import { Tracks } from './Tracks/Tracks';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Header />
      <MainNav />
      <Tracks />
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
