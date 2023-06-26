import classes from './Tracks__Track.module.css';
import sprite from 'img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';

const Tracks__Track = ({ logo, name, author, album, duration }) => {
  return (
    <div className={classes.track}>
      <div className={classes.trackLogo}>
        {!logo && (
          <svg className={classes.trackLogoSvg}>
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        )}
      </div>
      <div className={classes.trackName}>{name}</div>
      <div className={classes.trackAuthor}>{author}</div>
      <div className={classes.trackAlbum}>{album}</div>
      <div>
        <svg className={classes.trackLike}>
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
      </div>
      <div className={classes.trackTime}>{formatTime(duration)}</div>
    </div>
  );
};

export default Tracks__Track;
