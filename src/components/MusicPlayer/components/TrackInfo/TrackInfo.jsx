import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Skeletons } from './Skeletons';

export const TrackInfo = ({ loadingClass, currentTrack }) => {
  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>
      
      <div>
        {loadingClass ? <Skeletons /> : 
          <>
            <S.Text>{currentTrack.name}</S.Text>
            <S.Text>{currentTrack.author}</S.Text>
          </>
        }
      </div>
    </S.PlayerTrack>
  );
};
