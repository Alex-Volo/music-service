import classes from './Track.module.css';
import sprite from 'img/icon/sprite.svg';
const Track = ({ heading = 'Треки' }) => {
  const trackSample = {
    id: 8,
    name: 'Chase',
    author: 'Alexander Nakarada',
    release_date: '2005-06-11',
    genre: 'Классическая музыка',
    duration_in_seconds: 205,
    album: 'Chase',
    logo: null,
    track_file:
      'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
    stared_user: [],
  };
  return (
    <div className={classes.track}>
      <div className={classes.trackLogo}>
        {!trackSample.logo && (
          <svg className={classes.trackLogoSvg}>
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        )}
      </div>
      <div className={classes.trackName}>{trackSample.name}</div>
      <div className={classes.trackAuthor}>{trackSample.author}</div>
    </div>
  );
};

export default Track;
