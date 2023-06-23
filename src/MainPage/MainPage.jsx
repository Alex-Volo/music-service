import classes from './MainPage.module.css';
import logo from 'img/logo.png';

import Search from './Search/Search';
import SidebarPersonal from './SidebarPersonal/SidebarPersonal';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} />
        </div>
        <Search />
        <SidebarPersonal />
      </header>
    </div>
  );
};

export default MainPage;
