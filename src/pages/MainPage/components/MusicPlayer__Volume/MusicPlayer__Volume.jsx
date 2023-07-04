import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__Volume = () => {
  return (
    <S.volumeBlock>
      <div>
        <S.iconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </S.iconSvg>
      </div>
      <div>
        <input type="range" name="range" />
      </div>
    </S.volumeBlock>
  );
};
