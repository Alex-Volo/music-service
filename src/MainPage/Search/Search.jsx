import classes from './Search.module.css';
import sprite from '../../img/icon/sprite.svg';
const Search = () => {
  return (
    <div className="search">
      <svg className={classes.searchSvg}>
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export default Search;
