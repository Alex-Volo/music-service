import * as S from './styles';
import { TracksList } from 'components';
import { useParams } from 'react-router-dom';
import { NotFound } from 'pages';
import { fetchTracks } from 'services/fetchAPI';
import { useDispatch } from 'react-redux';
import { setPlaylist } from 'store/tracksSlice';
import { setIsLoading } from 'store/UISlice';
import { useEffect } from 'react';

export const Playlist = () => {
  const params = useParams();
  const dispatch = useDispatch();
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
        const id = playlistNumber;
        const tracksList = data.items;

        dispatch(setPlaylist({ id, tracksList }));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        const id = playlistNumber;
        const errorMessage = error.message;
        dispatch(setPlaylist({ id, tracksList: errorMessage }));
      });
  }, [playlistNumber]);

  const playlistString = `playlist${playlistNumber}`;

  return (
    <S.Main>
      <S.Heading>{playlistTitles[playlistNumber - 1]}</S.Heading>
      <TracksList playlist={playlistString} />
    </S.Main>
  );
};
