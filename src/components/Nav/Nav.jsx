import * as S from './styles';
import { NavLink } from 'components';
import sprite from 'assets/img/icon/sprite.svg';
import logo from 'assets/img/logo.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickBurger = () => setIsVisible(!isVisible);
  return (
    <S.NavContainer $isVisible={isVisible}>
      <S.MainNav>
        <S.LogoContainer>
          <Link to="/">
            <S.Logo src={logo} />
          </Link>
        </S.LogoContainer>

        <S.BurgerSvg onClick={handleClickBurger}>
          <use xlinkHref={`${sprite}#icon-burger`} />
        </S.BurgerSvg>
        <S.NavListContainer>
          <S.NavList $isVisible={isVisible}>
            <NavLink linkName={'Главное'} link="/" />
            <NavLink linkName={'Мой плейлист'} link="/favorites" />
            <NavLink linkName={'Выйти'} link="/login" logout={true} />
          </S.NavList>
        </S.NavListContainer>
      </S.MainNav>
    </S.NavContainer>
  );
};
