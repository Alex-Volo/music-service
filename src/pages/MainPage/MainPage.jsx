import * as S from './styles';
import { Nav, Sidebar, MusicPlayer, Search, UserInfo } from 'components';
import { Outlet } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';

export const MainPage = () => {
  return (
    <S.wrapper>
      <Nav />
      <Search />
      <UserInfo />
      <Outlet />
      <Sidebar />
      <MusicPlayer />
    </S.wrapper>
  );
};
