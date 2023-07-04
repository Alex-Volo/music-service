import * as S from './styles';
import { MainNav__Link } from '../MainNav__Link/MainNav__Link';
import sprite from 'assets/img/icon/sprite.svg';
import { useState } from 'react';

export const MainNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClickBurger = () => setIsVisible(!isVisible);
  return (
    <S.MainNav>
      <S.BurgerSvg onClick={handleClickBurger}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </S.BurgerSvg>
      <S.NavListContainer>
        <S.NavList isVisible={isVisible}>
          <MainNav__Link linkName={'Главное'} />
          <MainNav__Link linkName={'Мой плейлист'} />
          <MainNav__Link linkName={'Выйти'} />
        </S.NavList>
      </S.NavListContainer>
    </S.MainNav>
  );
};
