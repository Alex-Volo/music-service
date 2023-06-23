import classes from './ListHead.module.css';
import sprite from 'img/icon/sprite.svg';
const ListHead = ({ heading = 'Треки' }) => {
  return (
    <div className={classes.listHead}>
      <div>Трек</div>
      <div>Исполнитель</div>
      <div>Альбом</div>
      <div></div>
      <div>
        <svg className={classes.watchSvg}>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </svg>
      </div>
    </div>
  );
};

export default ListHead;
