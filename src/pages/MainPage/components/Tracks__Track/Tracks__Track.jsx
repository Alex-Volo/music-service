import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { formatTime } from 'helpers/helpers';

export const Tracks__Track = ({
  logo,
  name,
  author,
  album,
  duration,
  loadingClass,
}) => {
  return (
    <S.Track>
      <S.TrackLogo className={loadingClass}>
        {!logo && (
          <S.TrackLogoSvg>
            <use xlinkHref={`${sprite}#icon-note`} />
          </S.TrackLogoSvg>
        )}
      </S.TrackLogo>
      <S.TrackName className={loadingClass}>{name}</S.TrackName>
      <div className={loadingClass}>{author}</div>
      <div className={loadingClass}>{album}</div>
      <div className={loadingClass}>
        <S.TrackLikeSvg>
          <use xlinkHref={`${sprite}#icon-like`} />
        </S.TrackLikeSvg>
      </div>
      <S.TrackTime className={loadingClass}>{formatTime(duration)}</S.TrackTime>
    </S.Track>
  );
};
