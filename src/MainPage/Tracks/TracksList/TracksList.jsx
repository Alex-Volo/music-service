import classes from './TracksList.module.css';
import ListHead from './ListHead/ListHead';
import Track from './Track/Track';
import { fakeState } from 'helpers/fakeState';
const TracksList = ({ heading = 'Треки' }) => {
  const trackElements = fakeState.map((track) => (
    <Track
      key={track.id}
      logo={track.logo}
      name={track.name}
      author={track.author}
      album={track.album}
      duration={track.duration_in_seconds}
    />
  ));

  return (
    <div className={classes.trackList}>
      <ListHead />
      {trackElements}
    </div>
  );
};

export default TracksList;
