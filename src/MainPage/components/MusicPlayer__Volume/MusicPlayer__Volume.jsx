import classes from './MusicPlayer__Volume.module.css';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__Volume = () => {
  return (
    <div className={classes.volumeBlock}>
      <div className={classes.icon}>
        <svg className={classes.iconSvg}>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
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
  );
};
