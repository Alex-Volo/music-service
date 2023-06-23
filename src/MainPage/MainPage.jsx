import classes from './MainPage.module.css';
import Header from './Header/Header';
import MainNav from './MainNav/MainNav';
import Tracks from './Tracks/Tracks';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <MainNav />
      <Tracks />
    </div>
  );
};

export default MainPage;
