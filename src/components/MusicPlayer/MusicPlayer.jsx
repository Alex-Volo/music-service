import * as S from './styles';
import { ProgressBar, Interface } from 'components';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

export const MusicPlayer = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const audioAPIRef = useRef(null);
  const audioAPI = audioAPIRef.current;
  const isPlayerVisible = useSelector((state) => state.player.isPlayerVisible);

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible}>
      <ProgressBar audioAPI={audioAPI} />
      <Interface audioAPI={audioAPI} currentTrack={currentTrack} />
      <audio ref={audioAPIRef} src={currentTrack.track_file} />
    </S.MusicPlayer>
  );
};
