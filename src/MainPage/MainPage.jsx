import classes from './MainPage.module.css';
import Header from './Header/Header';
import MainNav from './MainNav/MainNav';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <MainNav />
      {/* <Tracs /> */}
    </div>
  );
};

export default MainPage;
