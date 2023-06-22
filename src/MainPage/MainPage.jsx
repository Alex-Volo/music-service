import classes from './MainPage.module.css';
import logo from '../img/logo.png';
import sprite from '../img/icon/sprite.svg';
import Search from './Search/Search';
import SidebarPersonal from './SidebarPersonal/SidebarPersonal';
export { sprite };

const MainPage = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} />
      <Search />
      <SidebarPersonal />
    </header>
  );
};

export default MainPage;
