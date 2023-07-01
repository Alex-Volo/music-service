import classes from './MusicPlayer.module.css';
import { MusicPlayer__ProgressBar } from '../MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__Interface/MusicPlayer__Interface';

export const MusicPlayer = () => {
  return (
    <div className={classes.musicPlayer}>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </div>
  );
};
