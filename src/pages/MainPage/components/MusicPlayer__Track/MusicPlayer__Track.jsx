import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { useSelector } from 'react-redux';

export const MusicPlayer__Track = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack) || [];
  console.log(currentTrack);
  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>
      <div>
        <S.Text>
          <a href="http://">{currentTrack.name}</a>
        </S.Text>
        <S.Text>
          <a className="track-play__album-link" href="http://">
            {currentTrack.author}
          </a>
        </S.Text>
      </div>
      <audio controls src={currentTrack.track_file} />
    </S.PlayerTrack>
  );
};
