import { Link } from 'react-router-dom';
import * as S from './styles';
import { useUser } from 'hooks';

export const NavLink = ({ linkName, link, needsLogout }) => {
  const { logout } = useUser();

  const handlerOnclick = () => {
    logout();
  };

  return (
    <S.NavLink onClick={needsLogout && handlerOnclick}>
      <Link to={link} className="menu__link">
        {linkName}
      </Link>
    </S.NavLink>
  );
};
