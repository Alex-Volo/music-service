import * as S from './styles';
import { Header } from 'components';
import { Nav } from 'components';
import { Sidebar } from 'components';
import { MusicPlayer } from 'components';
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
