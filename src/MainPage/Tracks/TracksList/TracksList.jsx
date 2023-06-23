import classes from './TracksList.module.css';
import ListHead from './ListHead/ListHead';
import Track from './Track/Track';
const TracksList = ({ heading = 'Треки' }) => {
  return (
    <div className={classes.trackList}>
      <ListHead />
      <Track />
    </div>
  );
};

export default TracksList;
