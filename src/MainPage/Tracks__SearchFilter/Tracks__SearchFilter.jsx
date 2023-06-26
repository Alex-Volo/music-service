import classes from './Tracks__SearchFilter.module.css';
import Tracks__FilterBtn from '../Tracks__FilterBtn/Tracks__FilterBtn';

const Tracks__SearchFilter = () => {
  return (
    <div className={classes.searchFilter}>
      <h2 className={classes.heading}>Искать по:</h2>
      <Tracks__FilterBtn title="исполнителю" />
      <Tracks__FilterBtn title="году выпуска" />
      <Tracks__FilterBtn title="жанру" />
      {/* <TracksList /> */}
    </div>
  );
};

export default Tracks__SearchFilter;
