import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const TrackInfo = ({ audioAPI, currentTrack }) => {
  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>
      <div>
        <S.Text>{currentTrack.name}</S.Text>
        <S.Text>{currentTrack.author}</S.Text>
      </div>
    </S.PlayerTrack>
  );
};
