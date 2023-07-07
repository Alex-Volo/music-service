import * as S from './styles';
import logo from 'assets/img/logo.png';
import { Header__Search } from '../Header__Search/Header__Search';
import { Header__Sidebar } from '../Header__Sidebar/Header__Sidebar';
import { useSelector } from 'react-redux';

export const Header = () => {
  const a = useSelector((state) => state);
  console.log(a.tracks.list);
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Logo src={logo} />
      </S.LogoContainer>
      <Header__Search />
      <Header__Sidebar />
    </S.Header>
  );
};
