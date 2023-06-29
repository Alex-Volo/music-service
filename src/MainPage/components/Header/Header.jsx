import classes from './Header.module.css';
import logo from 'assets/img/logo.png';

import { Header__Search } from '../Header__Search/Header__Search';
import { Header__Sidebar } from '../Header__Sidebar/Header__Sidebar';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>
      <Header__Search />
      <Header__Sidebar />
    </header>
  );
};
