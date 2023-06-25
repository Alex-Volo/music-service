import classes from './SidebarItem.module.css';

const SidebarItem = ({ img, description }) => {
  return (
    <div className={classes.sidebar__item}>
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={img} alt={description} />
      </a>
    </div>
  );
};

export default SidebarItem;
