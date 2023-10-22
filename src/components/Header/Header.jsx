import * as S from './styles';
import logo from 'assets/img/logo.png';
import { Search } from '..';
import { Header__Sidebar } from '..';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo src={logo} />
        </Link>
      </S.LogoContainer>
      <Search />
      <Header__Sidebar />
    </S.Header>
  );
};
