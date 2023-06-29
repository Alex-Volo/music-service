import classes from './Tracks__List.module.css';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { fakeState } from 'helpers/fakeState';
import { useEffect, useState } from 'react';

export const Tracks__List = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  const trackElements = fakeState.map((track) => (
    <Tracks__Track
      key={track.id}
      logo={track.logo}
      name={track.name}
      author={track.author}
      album={track.album}
      duration={track.duration_in_seconds}
      loadingClass={loadingClass}
    />
  ));

  return (
    <div className={classes.trackList}>
      <Tracks__ListHead />
      {trackElements}
    </div>
  );
};
