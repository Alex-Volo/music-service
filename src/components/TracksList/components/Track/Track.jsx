import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerVisible } from 'store/UISlice';
import { setCurrentTrack } from 'store/tracksSlice';

import { Skeletons } from './Skeletons';

export const Track = ({ isLoading, track }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const handelerTrackClick = (track) => {
    dispatch(setPlayerVisible());
    dispatch(setCurrentTrack(track));
  };

  if (isLoading) {
    return (
      <S.Track>
        <Skeletons />
      </S.Track>
    );
  }

  return (
    <S.Track onClick={() => handelerTrackClick(track)}>
      <S.TrackLogo>
        {currentTrack.id === track.id ? (
          <S.TrackLogo isAnimated="true" />
        ) : (
          <S.TrackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </S.TrackLogoSvg>
        )}
      </S.TrackLogo>
      <S.TrackName>{track.name}</S.TrackName>
      <S.TrackAuthor>{track.author}</S.TrackAuthor>
      <S.TrackAlbum>{track.album}</S.TrackAlbum>
      <S.LikeWrapper>
        <S.TrackLikeSvg>
          <use xlinkHref={`${sprite}#icon-like`} />
        </S.TrackLikeSvg>
      </S.LikeWrapper>
      <S.TrackTime>
        {formatTime(track.duration_in_seconds)}
      </S.TrackTime>
    </S.Track>
  );
};
