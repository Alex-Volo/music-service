import * as S from './styles';
import { Header } from './Header/Header';
import { MainNav } from './MainNav/MainNav';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';
import { MainPageRoutes } from './MainPageRoutes';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Header />
      <MainNav />
      <MainPageRoutes />
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
