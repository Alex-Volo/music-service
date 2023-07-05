import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg'

export const Header__Sidebar = () => {
  return (
    <S.Container>
      <p>Name</p>
      <S.Logout>
          <use xlinkHref={`${sprite}#icon-logout`} />
        </S.Logout>
    </S.Container>
  );
};

