import * as S from './styles';

export const LikeDislike = () => {
  const sprite = 'assets/img/sprite.svg';

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
