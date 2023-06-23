import classes from './Tracks.module.css';
import SearchFilter from './SearchFilter/SearchFilter';

const Tracks = ({ heading = 'Треки' }) => {
  return (
    <main className="TracksContainer">
      <h1 className={classes.heading}>{heading}</h1>
      <SearchFilter />
    </main>
  );
};

export default Tracks;
