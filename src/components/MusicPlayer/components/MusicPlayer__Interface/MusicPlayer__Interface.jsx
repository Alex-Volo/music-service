import * as S from './styles';
import { Controls } from 'components';
import { TrackInfo } from 'components';
import { LikeDislike } from 'components';
import { Volume } from 'components';

export const MusicPlayer__Interface = ({ currentTrack, audioAPI }) => {
  return (
    <S.PlayerInterface>
      <S.LeftBlock>
        <Controls audioAPI={audioAPI} />
        <TrackInfo audioAPI={audioAPI} currentTrack={currentTrack} />
        <LikeDislike />
      </S.LeftBlock>
      <Volume audioAPI={audioAPI} />
    </S.PlayerInterface>
  );
};
