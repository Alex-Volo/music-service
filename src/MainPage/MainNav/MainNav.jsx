import classes from './MainNav.module.css';
import MainNav__Link from '../MainNav__Link/MainNav__Link';
import sprite from 'img/icon/sprite.svg';

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <svg className={classes.burgerSvg}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </svg>
      <ul className={classes.navList}>
        <MainNav__Link linkName={'Главное'} />
        <MainNav__Link linkName={'Мой плейлист'} />
        <MainNav__Link linkName={'Выйти'} />
      </ul>
    </nav>
  );
};

export default MainNav;
