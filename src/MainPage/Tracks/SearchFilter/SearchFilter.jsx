import classes from './SearchFilter.module.css';
import FilterBtn from './FilterBtn/FilterBtn';

const SearchFilter = () => {
  return (
    <div className={classes.searchFilter}>
      <h2 className={classes.heading}>Искать по:</h2>
      <FilterBtn title="исполнителю" />
      <FilterBtn title="году выпуска" />
      <FilterBtn title="жанру" />
      {/* <TracksList /> */}
    </div>
  );
};

export default SearchFilter;
