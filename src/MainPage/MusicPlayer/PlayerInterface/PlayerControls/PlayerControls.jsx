import classes from './PlayerControls.module.css';
import sprite from 'img/icon/sprite.svg';
const PlayerControls = () => {
  return (
    <div className={classes.playerControls}>
      <div className={classes.previos}>
        <svg className={classes.previosSvg} alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </svg>
      </div>
      <div className={classes.play}>
        <svg className={classes.playSvg} alt="play">
          <use xlinkHref={`${sprite}#icon-play`}></use>
        </svg>
      </div>
      <div className={classes.next}>
        <svg className={classes.nextSvg} alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </svg>
      </div>
      <div className={classes.repeat}>
        <svg className={classes.repeatSvg} alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`}></use>
        </svg>
      </div>
      <div className={classes.shuffle}>
        <svg className={classes.shuffleSvg} alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`}></use>
        </svg>
      </div>
    </div>
  );
};

export default PlayerControls;
