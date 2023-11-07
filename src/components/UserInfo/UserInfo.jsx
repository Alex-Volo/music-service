import * as S from './styles';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { UserContext } from 'store/context';

export const UserInfo = () => {
  const sprite = 'assets/img/sprite.svg';

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const userName = currentUser.username;
  const handlerOnclick = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
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
