import * as S from './styles';
import { ProgressBar, Interface } from 'components';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

export const MusicPlayer = ({loadingClass}) => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const audioAPIRef = useRef(null);
  const audioAPI = audioAPIRef.current;
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible);

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible}>
      <ProgressBar audioAPI={audioAPI} />
      <Interface loadingClass={loadingClass} audioAPI={audioAPI} currentTrack={currentTrack} />
      <audio ref={audioAPIRef} src={currentTrack.track_file} />
    </S.MusicPlayer>
  );
};
