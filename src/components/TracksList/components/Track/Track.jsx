import * as S from './styles';
import { formatTime } from 'helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerVisible } from 'store/UISlice';
import { setIsPaused } from 'store/playerSlice';
import { setCurrentTrack } from 'store/tracksSlice';

import { Skeletons } from './Skeletons';

export const Track = ({ isLoading, track }) => {
  if (isLoading) {
    return (
      <S.Track>
        <Skeletons />
      </S.Track>
    );
  }

  const sprite = '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.tracks.currentTrack);

  const isAnimated = currentTrack.id === track.id ? true : false;
  const isPaused = useSelector((state) => state.player.isPaused) && isAnimated;

  const handlerTrackClick = (track) => {
    dispatch(setCurrentTrack(track));
    dispatch(setPlayerVisible());
    dispatch(isAnimated ? setIsPaused(!isPaused) : setIsPaused(false));
  };

  return (
    <S.Track $isAnimated={isAnimated} onClick={() => handlerTrackClick(track)}>
      <S.TrackLogo $isAnimated={isAnimated}>
        <S.TrackLogoSvg $isAnimated={isAnimated} $isPaused={isPaused}>
          {isPaused ? (
            <use xlinkHref={`${sprite}#icon-pause`} />
          ) : (
            <use xlinkHref={`${sprite}#icon-note`} />
          )}
        </S.TrackLogoSvg>
      </S.TrackLogo>

      <S.TrackName>{track.name}</S.TrackName>
      <S.TrackAuthor>{track.author}</S.TrackAuthor>
      <S.TrackAlbum>{track.album}</S.TrackAlbum>
      <S.LikeWrapper>
        <S.TrackLikeSvg>
          <use xlinkHref={`${sprite}#icon-like`} />
        </S.TrackLikeSvg>
      </S.LikeWrapper>
      <S.TrackTime>{formatTime(track.duration_in_seconds)}</S.TrackTime>
    </S.Track>
  );
};
