import classes from './Tracks__List.module.css';
import Tracks__ListHead from '../Tracks__ListHead/Tracks__ListHead';
import Tracks__Track from '../Tracks__Track/Tracks__Track';
import { fakeState } from 'helpers/fakeState';
const Tracks__List = ({ heading = 'Треки' }) => {
  const trackElements = fakeState.map((track) => (
    <Tracks__Track
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
      <Tracks__ListHead />
      {trackElements}
    </div>
  );
};

export default Tracks__List;
