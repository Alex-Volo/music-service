import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { fakeState } from 'helpers/fakeState';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Tracks__List = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  const [state, setState] = useState(fakeState);
  const getTracks = () => {
    axios
      .get('https://painassasin.online/catalog/track/all/')
      .then((response) => setState(response.data));
  };
  useEffect(() => getTracks(), []);

  const trackElements = state.map((track) => (
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
    <S.TracksList>
      <Tracks__ListHead />
      {trackElements}
    </S.TracksList>
  );
};
