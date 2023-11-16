import * as S from './styles';
import { SearchFilter, TracksList, Error } from 'components';
import { useEffect, useState } from 'react';
import { setShuffledOrder, setTracks } from 'store/tracksSlice';
import { setIsLoading } from 'store/UISlice';
import { fetchTracks } from 'services/API';
import { useDispatch, useSelector } from 'react-redux';
import { getShuffledIndices } from 'helpers/helpers';

export const AllTracs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.UI.isLoading);
  const [errorMessage, setErrorMessage] = useState(null);

  // Загружаю все треки
  useEffect(() => {
    dispatch(setIsLoading(true));

    fetchTracks('all')
      .then((data) => {
        dispatch(setTracks(data));
        const shuffledIndices = getShuffledIndices(data);
        dispatch(setShuffledOrder(shuffledIndices));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.warn(error.message);
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <S.Main>
      <S.Heading>Треки</S.Heading>
      {errorMessage ? (
        <Error value={errorMessage} />
      ) : (
        <>
          <SearchFilter />
          <TracksList playlist="list" isLoading={isLoading} />
        </>
      )}
    </S.Main>
  );
};
