import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from 'store/tracksSlice';
import { fetchAllTracks } from 'helpers/DAL';

export const Tracks__List = ({ playlist }) => {
  const dispatch = useDispatch();

  let tracks = [];
  // Вешает класс loading на время загрузки треков
  const [loadingClass, setLoadingClass] = useState('loading');

  // Через свитч выбираю какой плейлист показывать
  switch (playlist) {
    case 'favorites':
      tracks = useSelector((state) => state.tracks.favorites);
      break;
    case 'playlist1':
      tracks = useSelector((state) => state.tracks.playlist1);
      break;
    case 'playlist2':
      tracks = useSelector((state) => state.tracks.playlist2);
      break;
    case 'playlist3':
      tracks = useSelector((state) => state.tracks.playlist3);
      break;
    default:
      tracks = useSelector((state) => state.tracks.list);
  }

  // Загружаю все треки
  useEffect(() => {
    fetchAllTracks().then((data) => {
      dispatch(setTracks(data));
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
