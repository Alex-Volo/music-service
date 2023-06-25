import classes from './PlayerInterface.module.css';
import PlayerControls from './PlayerControls/PlayerControls';
import PlayerTrack from './PlayerTrack/PlayerTrack';
const PlayerInterface = () => {
  return (
    <div className={classes.playerInterface}>
      <PlayerControls />
      <PlayerTrack />


      <div className="like-dislike">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>

      <div className="bar__volume-block volume">
        <div className="volume__content">
          <div className="volume__image">
            <svg className="volume__svg" alt="volume">
              <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
            </svg>
          </div>
          <div className="volume__progress _btn">
            <input
              className="volume__progress-line _btn"
              type="range"
              name="range"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInterface;
