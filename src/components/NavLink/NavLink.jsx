import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from 'store/context';
import * as S from './styles';

export const NavLink = ({ linkName, link, logout }) => {
  const { setCurrentUser } = useContext(UserContext);

  const handlerOnclick = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <S.NavLink onClick={logout && handlerOnclick}>
      <Link to={link} className="menu__link">
        {linkName}
      </Link>
    </S.NavLink>
  );
};
