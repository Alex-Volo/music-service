import * as S from './styles';
import { MusicPlayer__ProgressBar } from '../MusicPlayer__ProgressBar/MusicPlayer__ProgressBar';
import { MusicPlayer__Interface } from '../MusicPlayer__Interface/MusicPlayer__Interface';

export const MusicPlayer = () => {
  return (
    <S.MusicPlayer>
      <MusicPlayer__ProgressBar />
      <MusicPlayer__Interface />
    </S.MusicPlayer>
  );
};
