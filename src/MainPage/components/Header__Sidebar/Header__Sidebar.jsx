import classes from './Header__Sidebar.module.css';
import sprite from 'assets/img/icon/sprite.svg'

export const Header__Sidebar = () => {
  return (
    <div className={classes.sidebarPersonal__container}>
      <p>Name</p>
      <svg className={classes.logout}>
          <use xlinkHref={`${sprite}#icon-logout`} />
        </svg>
    </div>
  );
};

