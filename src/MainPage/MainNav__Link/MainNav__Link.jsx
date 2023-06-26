import classes from './MainNav__Link.module.css';

const MainNav__Link = ({ linkName }) => {
  return (
    <li className={classes.navLink}>
      <a href="http://" className="menu__link">
        {linkName}
      </a>
    </li>
  );
};

export default MainNav__Link;
