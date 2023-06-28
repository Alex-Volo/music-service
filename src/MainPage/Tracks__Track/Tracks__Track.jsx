import classes from './Tracks__Track.module.css';
import sprite from 'img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';

const Tracks__Track = ({ logo, name, author, album, duration, loadingClass }) => {
  return (
    <div className={classes.track}>
      <div className={classes.trackLogo + ` ${loadingClass}`}>
        {!logo && (
          <svg className={classes.trackLogoSvg}>
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        )}
      </div>
      <div className={classes.trackName + ` ${loadingClass}`}>{name}</div>
      <div className={classes.trackAuthor + ` ${loadingClass}`}>{author}</div>
      <div className={classes.trackAlbum + ` ${loadingClass}`}>{album}</div>
      <div className={loadingClass}>
        <svg className={classes.trackLike}>
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
      </div>
      <div className={classes.trackTime + ` ${loadingClass}`}>
        {formatTime(duration)}
      </div>
    </div>
  );
};

export default Tracks__Track;
