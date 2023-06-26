import classes from './Header__Sidebar.module.css';
import sprite from 'img/icon/sprite.svg'

const Header__Sidebar = () => {
  return (
    <div className={classes.sidebarPersonal__container}>
      <p>Name</p>
      <svg className={classes.logout}>
          <use xlinkHref={`${sprite}#icon-logout`} />
        </svg>
    </div>
  );
};

export default Header__Sidebar;
