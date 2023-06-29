import classes from './MusicPlayer__LikeDislike.module.css';
import sprite from 'img/icon/sprite.svg';

const MusicPlayer__LikeDislike = () => {
  return (
    <div className={classes.playerLikeDislikeGroup}>
      <div className={classes.like}>
        <svg className={classes.likeSvg} alt="like">
          <use xlinkHref={`${sprite}#icon-like`}></use>
        </svg>
      </div>
      <div className={classes.dislike}>
        <svg className={classes.dislikeSvg} alt="dislike">
          <use xlinkHref={`${sprite}#icon-dislike`}></use>
        </svg>
      </div>
    </div>
  );
};

export default MusicPlayer__LikeDislike;
