import * as S from './styles';
import { MusicPlayer__ProgressBar } from '../MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__Interface/MusicPlayer__Interface';
import { useSelector } from 'react-redux';

export const MusicPlayer = () => {
  const isPlayerVisible = useSelector((state) => state.UI.isPlayerVisible);

  return (
    <S.MusicPlayer $isPlayerVisible={isPlayerVisible} >
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </S.MusicPlayer>
  );
};
