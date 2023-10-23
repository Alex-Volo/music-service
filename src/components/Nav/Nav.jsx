import * as S from './styles';
import { NavLink } from '../NavLink/NavLink';
import sprite from 'assets/img/icon/sprite.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'store/UISlice';

export const Nav = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.UI.isMenuVisible);

  const handleClickBurger = () => dispatch(toggleMenu());
  return (
    <S.MainNav>
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
