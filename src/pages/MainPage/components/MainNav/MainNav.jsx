import classes from './MainNav.module.css';
import { MainNav__Link } from '../MainNav__Link/MainNav__Link';
import sprite from 'assets/img/icon/sprite.svg';
import { useState } from 'react';

export const MainNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClickBurger = () => setIsVisible(!isVisible);
  return (
    <nav className={classes.mainNav}>
      <svg onClick={handleClickBurger} className={classes.burgerSvg}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </svg>
      <div className={classes.navListContainer}>
        <ul className={`${classes.navList} ${isVisible && classes.active}`}>
          <MainNav__Link linkName={'Главное'} />
          <MainNav__Link linkName={'Мой плейлист'} />
          <MainNav__Link linkName={'Выйти'} />
        </ul>
      </div>
    </nav>
  );
};
