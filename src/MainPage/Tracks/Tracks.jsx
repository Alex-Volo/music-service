import classes from './Tracks.module.css';
import SearchFilter from './SearchFilter/SearchFilter';
import TracksList from './TracksList/TracksList';

const Tracks = ({ heading = 'Треки' }) => {
  return (
    <main className="TracksContainer">
      <h1 className={classes.heading}>{heading}</h1>
      <SearchFilter />
      <TracksList />
    </main>
  );
};

export default Tracks;
