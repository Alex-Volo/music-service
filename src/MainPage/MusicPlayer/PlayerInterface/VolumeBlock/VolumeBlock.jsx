import classes from './VolumeBlock.module.css';
import sprite from 'img/icon/sprite.svg';

const VolumeBlock = () => {
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

export default VolumeBlock;
