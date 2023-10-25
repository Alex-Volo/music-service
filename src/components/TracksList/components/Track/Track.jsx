import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerVisible } from 'store/UISlice';
import { setCurrentTrack } from 'store/tracksSlice';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Track = ({ loadingClass, track }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const handelerTrackClick = (track) => {
    dispatch(setPlayerVisible());
    dispatch(setCurrentTrack(track));
  };
  
  // Реализовал вариант с библиотекой
  // Если закомитить блок с условием ниже, то будет использован скелетон
  // на CSS, именно поэтому проверка условия на loadingClass
  if (loadingClass) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444" height="50px" duration="3">
        <S.Track>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </S.Track>
      </SkeletonTheme>
    );
  }

  return (
    <S.Track onClick={() => handelerTrackClick(track)}>
      <S.TrackLogo className={loadingClass}>
        {currentTrack.id === track.id ? (
          <S.TrackLogo isAnimated="true" />
        ) : (
          <S.TrackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </S.TrackLogoSvg>
        )}
      </S.TrackLogo>
      <S.TrackName className={loadingClass}>{track.name}</S.TrackName>
      <S.TrackAuthor className={loadingClass}>{track.author}</S.TrackAuthor>
      <S.TrackAlbum className={loadingClass}>{track.album}</S.TrackAlbum>
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
