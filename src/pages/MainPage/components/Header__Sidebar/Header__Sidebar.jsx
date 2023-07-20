import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/UISlice';

export const Header__Sidebar = () => {
  const dispatch = useDispatch();
  const handlerOnclick = () => {
    Cookies.remove('token');
    dispatch(setToken(Boolean(Cookies.get('token'))));
  };
  return (
    <S.Container>
      <p>Name</p>
      <S.Logout onClick={handlerOnclick}>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </S.Logout>
    </S.Container>
  );
};
