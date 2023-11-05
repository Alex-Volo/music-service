import * as S from './styles';
import { Track, ListHead } from 'components';
import { useSelector } from 'react-redux';

export const TracksList = ({ playlist }) => {
  const isLoading = useSelector((state) => state.UI.isLoading);

  let tracks = useSelector((state) => state.tracks[playlist]) || [];

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
