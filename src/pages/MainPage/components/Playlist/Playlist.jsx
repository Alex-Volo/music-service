import * as S from './styles';
import { Tracks__List } from '../Tracks__List/Tracks__List';
import { useParams } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';

export const Playlist = () => {
  const params = useParams();
  if (isNaN(Number(params.id))) {
    return <NotFound />;
  }
  const playlistTitles = [
    'Плейлист дня',
    '100 танцевальных хитов',
    'Инди-заряд',
  ];
  const playlistNumber = Number(params.id);
  const playlistString = `playlist${playlistNumber}`;

  return (
    <main>
      <S.Heading>{playlistTitles[playlistNumber - 1]}</S.Heading>
      <Tracks__List playlist={playlistString} />
    </main>
  );
};
