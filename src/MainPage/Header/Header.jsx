import classes from './Header.module.css';
import logo from 'img/logo.png';

import Search from './Search/Search';
import SidebarPersonal from './SidebarPersonal/SidebarPersonal';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>
      <Search />
      <SidebarPersonal />
    </header>
  );
};

export default Header;
