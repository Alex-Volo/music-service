import classes from './MusicPlayer__Track.module.css';
import sprite from 'img/icon/sprite.svg';

const MusicPlayer__Track = () => {
  return (
    <div className={classes.playerTrack}>
      <div className={classes.trackLogo}>
        <svg className={classes.trackLogoSvg}>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </svg>
      </div>
      <div>
        <p className={classes.text}>
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        </p>
        <p className={classes.text}>
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </p>
      </div>
    </div>
  );
};

export default MusicPlayer__Track;
