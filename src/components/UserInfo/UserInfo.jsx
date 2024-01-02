import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';

export const UserInfo = () => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.user);
  const logout = () => dispatch({ type: 'RESET' });
  const userName = currentUser?.username || '';

  return (
    <S.Container>
      <p>{userName}</p>
      <S.Logout onClick={logout}>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </S.Logout>
    </S.Container>
  );
};
