import * as S from './styles';
import { MusicPlayer__Controls } from '../MusicPlayer__Controls/MusicPlayer__Controls';
import { MusicPlayer__Track } from '../MusicPlayer__Track/MusicPlayer__Track';
import { MusicPlayer__LikeDislike } from '../MusicPlayer__LikeDislike/MusicPlayer__LikeDislike';
import { MusicPlayer__Volume } from '../MusicPlayer__Volume/MusicPlayer__Volume';

export const MusicPlayer__Interface = ({setAudioAPI, audioAPI}) => {
  return (
    <S.PlayerInterface>
      <S.LeftBlock>
        <MusicPlayer__Controls audioAPI={audioAPI} />
        <MusicPlayer__Track  setAudioAPI={setAudioAPI}/>
        <MusicPlayer__LikeDislike />
      </S.LeftBlock>
      <MusicPlayer__Volume />
    </S.PlayerInterface>
  );
};
