import * as S from './styles';
import { Tracks__Track } from '../Tracks__Track/Tracks__Track';
import { Tracks__ListHead } from '../Tracks__ListHead/Tracks__ListHead';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerVisible } from 'store/UISlice';
import { setCurrentTrack } from 'store/tracksSlice';

export const Tracks__List = ({ playlist, loadingClass }) => {
  let tracks = useSelector((state) => state.tracks[playlist]) || [];
  const dispatch = useDispatch();
  // const handelerTrackClick = (track) => {
  //   dispatch(setPlayerVisible());
  //   dispatch(setCurrentTrack(track));
  // };
  const trackElements = tracks.map((track) => (
    <Tracks__Track
      key={track.id}
      loadingClass={loadingClass}
      track={track}
    />
  ));

  return (
    <S.TracksList>
      <Tracks__ListHead />
      {trackElements}
    </S.TracksList>
  );
};
