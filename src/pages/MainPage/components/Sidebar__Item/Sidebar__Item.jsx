import classes from './Sidebar__Item.module.css';

export const Sidebar__Item = ({ img, description, loadingClass }) => {
  return (
    <div className={classes.sidebar__item + ` ${loadingClass}`}>
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={img} alt={description} />
      </a>
    </div>
  );
};
