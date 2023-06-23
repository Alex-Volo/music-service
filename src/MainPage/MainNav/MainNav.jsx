import classes from './MainNav.module.css';
import NavLink from './NavLink/NavLink';
import sprite from 'img/icon/sprite.svg';

const MainNav = () => {
  return (
    <nav className={classes.mainNav}>
      <svg className={classes.burgerSvg}>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </svg>
      <ul className={classes.navList}>
        <NavLink linkName={'Главное'} />
        <NavLink linkName={'Мой плейлист'} />
        <NavLink linkName={'Выйти'} />
      </ul>
    </nav>
  );
};

export default MainNav;
