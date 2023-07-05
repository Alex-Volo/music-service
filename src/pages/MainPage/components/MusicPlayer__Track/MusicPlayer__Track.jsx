import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__Track = () => {
  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>
      <div>
        <S.Text>
          <a href="http://">
            Ты та...
          </a>
        </S.Text>
        <S.Text>
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </S.Text>
      </div>
    </S.PlayerTrack>
  );
};
