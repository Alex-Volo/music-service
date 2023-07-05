import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__LikeDislike = () => {
  return (
    <S.PlayerLikeDislikeGroup>
      <S.LikeSvg alt="like">
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </S.LikeSvg>

      <S.DislikeSvg alt="dislike">
        <use xlinkHref={`${sprite}#icon-dislike`}></use>
      </S.DislikeSvg>
    </S.PlayerLikeDislikeGroup>
  );
};
