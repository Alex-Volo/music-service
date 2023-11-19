import * as S from './styles';
import { Error, TracksList } from 'components';
import { useParams } from 'react-router-dom';
import { NotFound } from 'pages';
import { fetchTracks } from 'services/API';
import { useDispatch } from 'react-redux';
import { setShuffledOrder, setTracks } from 'store/tracksSlice';
import { setIsLoading } from 'store/tracksSlice';
import { useEffect, useState } from 'react';
import { getShuffledIndices } from 'helpers/helpers';

export const Playlist = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const playlistNumber = Number(params.id);
  const playlistTitles = [
    'Плейлист дня',
    '100 танцевальных хитов',
    'Инди-заряд',
  ];

  if (isNaN(playlistNumber)) {
    return <NotFound />;
  }

  // Загружаю плейлист по динамической ссылке и диспатчу в store
  useEffect(() => {
    dispatch(setIsLoading(true));

    fetchTracks(playlistNumber)
      .then((data) => {
        const tracksList = data.items;
        dispatch(setTracks(tracksList));
        const shuffledIndices = getShuffledIndices(data.items);
        dispatch(setShuffledOrder(shuffledIndices));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }, [playlistNumber]);

  return (
    <S.Main>
      <S.Heading>{playlistTitles[playlistNumber - 1]}</S.Heading>

      {errorMessage ? (
        <Error value={errorMessage} />
      ) : (
        <>
          <TracksList />
        </>
      )}
    </S.Main>
  );
};
