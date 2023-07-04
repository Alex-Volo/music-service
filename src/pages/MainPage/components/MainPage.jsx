import classes from './MainPage.module.css';
import { Header } from './Header/Header';
import { MainNav } from './MainNav/MainNav';
import { Tracks } from './Tracks/Tracks';
import { Sidebar } from './Sidebar/Sidebar';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';

export const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <MainNav />
      <Tracks />
      <Sidebar />
      <MusicPlayer />
    </div>
  );
};
