import classes from './MusicPlayer.module.css';
import ProgressBar from './ProgressBar/ProgressBar';
import PlayerInterface from './PlayerInterface/PlayerInterface';
const MusicPlayer = () => {
  return (
    <div className={classes.musicPlayer}>
      <ProgressBar />
      <PlayerInterface />
    </div>
  );
};

export default MusicPlayer;
