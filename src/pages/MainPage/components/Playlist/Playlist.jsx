import * as S from './styles';
import { Tracks__List } from '../Tracks__List/Tracks__List';
import { useParams } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { fetchPlaylist } from 'helpers/DAL';
import { useDispatch } from 'react-redux';
import { setPlaylist } from 'store/tracksSlice';
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

  // Загружаю плейлист по динамической ссылке и диспатчу в store
  useEffect(() => {
    fetchPlaylist(playlistNumber).then((data) => {
      const id = playlistNumber;
      const tracksList = data.items;
      dispatch(setPlaylist({ id, tracksList }));
      console.log('Да, да именно здесь');
      console.log(data);
    });
  });
  if (isNaN(playlistNumber)) {
    return <NotFound />;
  }

  const playlistString = `playlist${playlistNumber}`;

  return (
    <main>
      <S.Heading>{playlistTitles[playlistNumber - 1]}</S.Heading>
      <Tracks__List playlist={playlistString} />
    </main>
  );
};
