import * as S from './styles';
import { TracksList } from 'components';
import { useParams } from 'react-router-dom';
import { NotFound } from 'pages';
import { fetchPlaylist, fetchTracks } from 'helpers/DAL';
import { useDispatch } from 'react-redux';
import { setPlaylist } from 'store/tracksSlice';
import { useEffect, useState } from 'react';

export const Playlist = ({loadingClass, setLoadingClass}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const playlistNumber = Number(params.id);
  const playlistTitles = [
    'Плейлист дня',
    '100 танцевальных хитов',
    'Инди-заряд',
  ];

  // Загружаю плейлист по динамической ссылке и диспатчу в store
  useEffect(() => {
    console.log('Запущент юзЭффект и класс ставится лоадинг')
    setLoadingClass('loading');
    fetchTracks(playlistNumber)
      .then((data) => {
        const id = playlistNumber;
        const tracksList = data.items;
        dispatch(setPlaylist({ id, tracksList }));
        setLoadingClass('');
      })
      .catch((error) => {
        const id = playlistNumber;
        const errorMessage = error.message;
        dispatch(setPlaylist({ id, tracksList: errorMessage }));
      });
  }, [playlistNumber]);
  if (isNaN(playlistNumber)) {
    return <NotFound />;
  }

  const playlistString = `playlist${playlistNumber}`;

  return (
    <S.Main>
      <S.Heading>{playlistTitles[playlistNumber - 1]}</S.Heading>
      <TracksList playlist={playlistString} loadingClass={loadingClass} />
    </S.Main>
  );
};
