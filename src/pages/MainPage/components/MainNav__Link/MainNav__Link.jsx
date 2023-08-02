import Cookies from 'js-cookie';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserContext } from 'store/context';
import { setToken } from 'store/UISlice';
import * as S from './styles';

export const MainNav__Link = ({ linkName, link, logout }) => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const dispatch = useDispatch();
  const handlerOnclick = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    // dispatch(setToken(Boolean(Cookies.get('token'))));
  };
  return (
    <S.NavLink onClick={logout && handlerOnclick}>
      <Link to={link} className="menu__link">
        {linkName}
      </Link>
    </S.NavLink>
  );
};
