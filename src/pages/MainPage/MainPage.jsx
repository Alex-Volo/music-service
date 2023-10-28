import * as S from './styles';
import { Header, Nav, Sidebar, MusicPlayer, Search, UserInfo } from 'components';
import { MainPageRoutes } from 'routes';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  const [loadingClass, setLoadingClass] = useState('loading');

  return (
    <S.wrapper>
      <Nav />
      <Search />
      <UserInfo />
      <MainPageRoutes 
      setLoadingClass={setLoadingClass} 
      loadingClass={loadingClass}/>
      <Sidebar loadingClass={loadingClass} />
      <MusicPlayer loadingClass={loadingClass}/>
    </S.wrapper>
  );
};
