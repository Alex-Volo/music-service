import * as S from './styles';
import { Track, ListHead } from 'components';
import { useDispatch, useSelector } from 'react-redux';

export const TracksList = ({ playlist, loadingClass }) => {
  let tracks = useSelector((state) => state.tracks[playlist]) || [];

  if (!Array.isArray(tracks)) return <div>Ошибка: {tracks}</div>;
  const trackElements = tracks.map((track) => (
    <Track key={track.id} loadingClass={loadingClass} track={track} />
  ));

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
