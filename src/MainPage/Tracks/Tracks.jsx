import classes from './Tracks.module.css';
import Tracks__SearchFilter from '../Tracks__SearchFilter/Tracks__SearchFilter';
import Tracks__List from '../Tracks__List/Tracks__List';

const Tracks = ({ heading = 'Треки' }) => {
  return (
    <main className="TracksContainer">
      <h1 className={classes.heading}>{heading}</h1>
      <Tracks__SearchFilter />
      <Tracks__List />
    </main>
  );
};

export default Tracks;
