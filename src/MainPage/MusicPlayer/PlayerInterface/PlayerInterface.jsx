import classes from './PlayerInterface.module.css';
import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrack from './PlayerTrack/PlayerTrack';
import PlayerLikeDislikeGroup from './PlayerLikeDislikeGroup/PlayerLikeDislikeGroup';
import VolumeBlock from './VolumeBlock/VolumeBlock';

const PlayerInterface = () => {
  return (
    <div className={classes.playerInterface}>
      <div className={classes.leftBlock}>
        <PlayerControls />
        <PlayerTrack />
        <PlayerLikeDislikeGroup />
      </div>
      <VolumeBlock />
    </div>
  );
};

export default PlayerInterface;
