import * as S from './styles';
import { useUser } from 'hooks';

export const UserInfo = () => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';

  const { currentUser, logout } = useUser();
  const userName = currentUser.username;

  return (
    <S.Container>
      <p>{userName}</p>
      <S.Logout onClick={logout}>
        <use xlinkHref={`${sprite}#icon-logout`} />
      </S.Logout>
    </S.Container>
  );
};
