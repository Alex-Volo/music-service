import * as S from './styles';
import { SearchFilter, TracksList } from 'components';
import { useEffect, useState } from 'react';
import { setTracks } from 'store/tracksSlice';
import { fetchTracks } from 'helpers/DAL';
import { useDispatch } from 'react-redux';

export const AllTracs = ({loadingClass, setLoadingClass}) => {
  const dispatch = useDispatch();
  // Загружаю все треки
  useEffect(() => {
    fetchTracks('all')
      .then((data) => {
        dispatch(setTracks(data));
        setLoadingClass('');
      })
      .catch((error) => {
        console.warn(error.message);
        dispatch(setTracks(error.message));
      });
  }, []);

  return (
    <S.Main>
      <S.Heading>Треки</S.Heading>
      <SearchFilter />
      <TracksList playlist='list' loadingClass={loadingClass} />
    </S.Main>
  );
};
