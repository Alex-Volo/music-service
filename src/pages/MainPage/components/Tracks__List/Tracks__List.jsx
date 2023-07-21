import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { useSelector } from 'react-redux';

export const Tracks__List = ({ playlist, loadingClass }) => {
  let tracks = useSelector((state) => state.tracks[playlist]) || [];

  const trackElements = tracks.map((track) => (
    <Tracks__Track
      key={track.id}
      logo={track.logo}
      name={track.name}
      author={track.author}
      album={track.album}
      duration={track.duration_in_seconds}
      loadingClass={loadingClass}
    />
  ));

  return (
    <S.TracksList>
      <Tracks__ListHead />
      {trackElements}
    </S.TracksList>
  );
};
