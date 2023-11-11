import * as S from './styles';
import { SearchFilter, TracksList } from 'components';
import { useEffect } from 'react';
import { setTracks } from 'store/tracksSlice';
import { setIsLoading } from 'store/UISlice';
import { fetchTracks } from 'services/fetchAPI';
import { useDispatch, useSelector } from 'react-redux';

export const AllTracs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.UI.isLoading);

  // Загружаю все треки
  useEffect(() => {
    dispatch(setIsLoading(true));

    fetchTracks('all')
      .then((data) => {
        dispatch(setTracks(data));
        dispatch(setIsLoading(false));
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
      <TracksList playlist="list" isLoading={isLoading} />
    </S.Main>
  );
};
