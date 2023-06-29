import classes from './MusicPlayer__Interface.module.css';
import MusicPlayer__Controls from '../MusicPlayer__Controls/MusicPlayer__Controls';
import MusicPlayer__Track from '../MusicPlayer__Track/MusicPlayer__Track';
import MusicPlayer__LikeDislike from '../MusicPlayer__LikeDislike/MusicPlayer__LikeDislike';
import MusicPlayer__Volume from '../MusicPlayer__Volume/MusicPlayer__Volume';

const MusicPlayer__Interface = () => {
  return (
    <div className={classes.playerInterface}>
      <div className={classes.leftBlock}>
        <MusicPlayer__Controls />
        <MusicPlayer__Track />
        <MusicPlayer__LikeDislike />
      </div>
      <MusicPlayer__Volume />
    </div>
  );
};

export default MusicPlayer__Interface;
