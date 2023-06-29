import classes from './Header__Search.module.css';
import sprite from 'assets/img/icon/sprite.svg';
export const Header__Search = () => {
  return (
    <div className={classes.search}>
      <svg className={classes.searchSvg}>
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
      <input
        className={classes.search__input}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

