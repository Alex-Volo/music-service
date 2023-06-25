import classes from './SidebarPersonal.module.css';
import sprite from 'img/icon/sprite.svg'

const SidebarPersonal = () => {
  return (
    <div className={classes.sidebarPersonal__container}>
      <p>Name</p>
      <svg className={classes.logout}>
          <use xlinkHref={`${sprite}#icon-logout`} />
        </svg>
    </div>
  );
};

export default SidebarPersonal;
