import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks, setCurrentSet } from 'store/tracksSlice';
import { fetchAllTracks } from 'helpers/DAL';

export const Tracks__List = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.list);
  // Вешает класс loading на время загрузки треков
  const [loadingClass, setLoadingClass] = useState('loading');

  // Загружаю данные в store убираю класс loading
  useEffect(() => {
    fetchAllTracks().then((data) => {
      dispatch(setTracks(data));
      dispatch(setCurrentSet(data));      
      setLoadingClass('');
    });
  }, []);

  const trackElements = tracks.map((track) => (
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
