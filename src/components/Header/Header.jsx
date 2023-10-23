import * as S from './styles';
import logo from 'assets/img/logo.png';
import { Search } from 'components';
import { UserInfo } from 'components';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo src={logo} />
        </Link>
      </S.LogoContainer>
      <Search />
      <UserInfo />
    </S.Header>
  );
};
