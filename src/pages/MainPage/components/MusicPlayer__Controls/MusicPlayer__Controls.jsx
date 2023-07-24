import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const MusicPlayer__Controls = ({ audioAPI }) => {
  const handlerOnPlay = () => {
    audioAPI.play();
  };
  const isPaused = false;
  return (
    <S.PlayerControls>
      <S.Previos>
        <S.PreviosSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </S.PreviosSvg>
      </S.Previos>

      {isPaused ? (
        <S.Play onClick={() => handlerOnPlay()}>
          <S.PlaySvg alt="play">
            <use xlinkHref={`${sprite}#icon-play`}></use>
          </S.PlaySvg>
        </S.Play>
      ) : (
        <S.Pause onClick={() => handlerOnPlay()}>
          <S.PlaySvg alt="play">
            <use xlinkHref={`${sprite}#icon-search`}></use>
          </S.PlaySvg>
        </S.Pause>
      )}

      <S.Next>
        <S.NextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </S.NextSvg>
      </S.Next>
      <S.Repeat>
        <S.RepeatSvg alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`}></use>
        </S.RepeatSvg>
      </S.Repeat>
      <S.Shuffle>
        <S.ShuffleSvg alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`}></use>
        </S.ShuffleSvg>
      </S.Shuffle>
    </S.PlayerControls>
  );
};
