import * as S from './styles';
import { Header } from '../../../components';
import { Nav } from '../../../components/Nav/Nav';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from '../../../components/MusicPlayer/MusicPlayer';
import { MainPageRoutes } from './MainPageRoutes';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Header />
      <Nav />
      <MainPageRoutes />
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
