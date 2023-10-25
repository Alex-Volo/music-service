import * as S from './styles';
import { Controls } from 'components';
import { TrackInfo } from 'components';
import { LikeDislike } from 'components';
import { Volume } from 'components';

export const Interface = ({loadingClass, currentTrack, audioAPI }) => {
  return (
    <S.PlayerInterface>
      <S.LeftBlock>
        <Controls audioAPI={audioAPI} />
        <TrackInfo 
        audioAPI={audioAPI} 
        currentTrack={currentTrack}
        loadingClass={loadingClass}
        />
        <LikeDislike />
      </S.LeftBlock>
      <Volume audioAPI={audioAPI} />
    </S.PlayerInterface>
  );
};
