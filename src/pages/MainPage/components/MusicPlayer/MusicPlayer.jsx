import * as S from './styles';
import { MusicPlayer__ProgressBar } from '../MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__Interface/MusicPlayer__Interface';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const MusicPlayer = () => {
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible);
  const [audioAPI, setAudioAPI] = useState(null);
  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible} >
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface audioAPI={audioAPI} setAudioAPI={setAudioAPI}/>
    </S.MusicPlayer>
  );
};
