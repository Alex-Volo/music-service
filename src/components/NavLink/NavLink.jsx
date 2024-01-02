import { Link } from 'react-router-dom';
import * as S from './styles';
import { useDispatch } from 'react-redux';

export const NavLink = ({ linkName, link, needsLogout }) => {
  const dispatch = useDispatch();
  const logout = () => dispatch({ type: 'RESET' });

  return (
    <S.NavLink onClick={needsLogout && logout}>
      <Link to={link} className="menu__link">
        {linkName}
      </Link>
    </S.NavLink>
  );
};
