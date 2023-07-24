import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';
import { useDispatch } from 'react-redux';
import { setPlayerVisible } from 'store/UISlice';
import { setCurrentTrack } from 'store/tracksSlice';

export const Tracks__Track = ({
  loadingClass,
  track,
}) => {
  const dispatch = useDispatch();
  const handelerTrackClick = (track) => {
    dispatch(setPlayerVisible());
    dispatch(setCurrentTrack(track));
  };

  return (
    <S.Track onClick={() => handelerTrackClick(track)}>
      <S.TrackLogo className={loadingClass}>
        {!track.logo && (
          <S.TrackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </S.TrackLogoSvg>
        )}
      </S.TrackLogo>
      <S.TrackName className={loadingClass}>{track.name}</S.TrackName>
      <div className={loadingClass}>{track.author}</div>
      <div className={loadingClass}>{track.album}</div>
      <div className={loadingClass}>
        <S.TrackLikeSvg>
          <use xlinkHref={`${sprite}#icon-like`} />
        </S.TrackLikeSvg>
      </div>
      <S.TrackTime className={loadingClass}>
        {formatTime(track.duration_in_seconds)}
      </S.TrackTime>
    </S.Track>
  );
};
