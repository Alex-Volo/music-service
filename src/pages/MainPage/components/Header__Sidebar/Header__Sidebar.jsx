import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/UISlice';
import { useContext } from 'react';
import { UserContext } from 'store/context';

export const Header__Sidebar = () => {
  const dispatch = useDispatch();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const userName = currentUser.username;
  const handlerOnclick = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    // dispatch(setToken(Boolean(Cookies.get('user'))));
  };
  return (
    <S.Container>
      <p>{userName}</p>
      <S.Logout onClick={handlerOnclick}>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </S.Logout>
    </S.Container>
  );
};
