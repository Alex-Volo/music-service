import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const MusicPlayer__Track = ({ setAudioAPI }) => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const audioAPI = useRef(null);
  useEffect(() => {
    setAudioAPI(audioAPI.current);
  }, []);

  const hadlerPlayClick = () => {
    audioAPI.current.play();
    console.log(audioAPI.current);
  };
  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>
      <div onClick={() => hadlerPlayClick()}>
        <S.Text>{currentTrack.name}</S.Text>
        <S.Text>{currentTrack.author}</S.Text>
      </div>
      <audio ref={audioAPI} controls src={currentTrack.track_file} />
    </S.PlayerTrack>
  );
};
