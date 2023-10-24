import * as S from './styles';
import { Header, Nav, Sidebar, MusicPlayer, Search, UserInfo } from 'components';
import { MainPageRoutes } from './MainPageRoutes';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Nav />
      <Search />
      <UserInfo />
      {/* <Header /> */}
      <MainPageRoutes />
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
