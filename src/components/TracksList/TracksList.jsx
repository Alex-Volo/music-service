import * as S from './styles';
import { Track, ListHead } from 'components';
import { useSelector } from 'react-redux';

export const TracksList = () => {
  const isLoading = useSelector((state) => state.tracks.isLoading);

  const tracks = useSelector((state) => state.tracks.list) || [];

  if (!Array.isArray(tracks)) return <div>Ошибка: {tracks}</div>;
  const trackElements = tracks.map((track) => (
    <Track key={track.id} isLoading={isLoading} track={track} />
  ));

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
