import * as S from './styles';
import { NavLink } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';

export const Nav = () => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';

  const [isVisible, setIsVisible] = useState(false);
  const { theme, switchTheme } = useTheme();

  const logoImgURL =
    theme === 'black' ? '/assets/img/logo.png' : '/assets/img/logo_black.svg';

  const toggleBurger = () => setIsVisible(!isVisible);

  return (
    <S.NavContainer $isVisible={isVisible}>
      <S.MainNav>
        <S.LogoContainer>
          <Link to="/">
            <S.Logo src={process.env.PUBLIC_URL + logoImgURL} />
          </Link>
        </S.LogoContainer>

        <S.BurgerSvg onClick={toggleBurger}>
          <use xlinkHref={`${sprite}#icon-burger`} />
        </S.BurgerSvg>
        <S.NavListContainer>
          <S.NavList $isVisible={isVisible}>
            <NavLink linkName={'Главное'} link="/" />
            <NavLink linkName={'Мой плейлист'} link="/favorites" />
            <NavLink linkName={'Выйти'} link="/login" needsLogout={true} />
            <li>
              <svg style={{ cursor: 'pointer' }} onClick={switchTheme}>
                {theme === 'black' ? (
                  <use xlinkHref={`${sprite}#icon-black-theme`} />
                ) : (
                  <use xlinkHref={`${sprite}#icon-white-theme`} />
                )}
              </svg>
            </li>
          </S.NavList>
        </S.NavListContainer>
      </S.MainNav>
    </S.NavContainer>
  );
};
