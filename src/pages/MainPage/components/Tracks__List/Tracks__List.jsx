import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList, setTracks } from 'store/appSlice';
import { fetchAllTracks } from 'helpers/DAL';

export const Tracks__List = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.list);
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });
  // useEffect(() => fetchAllTracks().then((data) => dispatch(setTracks(data))) )
    
  // const [state, setState] = useState(fakeState);
  // const getTracks = () => {
  //   axios
  //     .get('https://painassasin.online/catalog/track/all/')
  //     .then((response) => setState(response.data));
  // };

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
      <button
        onClick={() => {
          dispatch(deleteList());
        }}
      >
        Обнулить
      </button>
      <Tracks__ListHead />
      {trackElements}
    </S.TracksList>
  );
};
