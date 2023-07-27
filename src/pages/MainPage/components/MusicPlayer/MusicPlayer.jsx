import * as S from './styles';
import { MusicPlayer__ProgressBar } from '../MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__Interface/MusicPlayer__Interface';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

export const MusicPlayer = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const audioAPIRef = useRef(null);
  const audioAPI = audioAPIRef.current;
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible);

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible}>
      <MusicPlayer__ProgressBar audioAPI={audioAPI} />
      <MusicPlayer__Interface audioAPI={audioAPI} currentTrack={currentTrack} />
      <audio ref={audioAPIRef} src={currentTrack.track_file} />
    </S.MusicPlayer>
  );
};
