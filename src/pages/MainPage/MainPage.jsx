import * as S from './styles';
import { Header, Nav, Sidebar, MusicPlayer } from 'components';
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
