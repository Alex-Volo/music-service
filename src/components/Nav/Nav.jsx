import * as S from './styles';
import { NavLink } from 'components';
import sprite from 'assets/img/icon/sprite.svg';
import logo from 'assets/img/logo.png';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store/UISlice';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.UI.isMenuVisible);

  const handleClickBurger = () => dispatch(toggleMenu());
  return (
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
          <S.NavList $isVisible={isMenuVisible}>
            <NavLink linkName={'Главное'} link="/" />
            <NavLink linkName={'Мой плейлист'} link="/favorites" />
            <NavLink linkName={'Выйти'} link="/login" logout={true} />
          </S.NavList>
        </S.NavListContainer>
    </S.MainNav>
  );
};
