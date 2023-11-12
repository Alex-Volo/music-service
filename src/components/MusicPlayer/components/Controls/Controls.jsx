import { useState, useEffect } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPaused } from 'store/playerSlice';

export const Controls = ({ audioAPI }) => {
  const sprite = '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.player.isPaused);

  const [playerState, setPlayerState] = useState({
    isPaused: false,
    isLoop: false,
  });

  if (audioAPI) {
    audioAPI.loop = playerState.isLoop;
  }

  const playOrPause = () => {
    isPaused ? audioAPI.play() : audioAPI.pause();
    dispatch(setIsPaused(audioAPI.paused));
  };

  const handlerOnLoop = () => {
    setPlayerState({ ...playerState, isLoop: !playerState.isLoop });
  };

  return (
    <S.PlayerControls>
      <S.Previos>
        <S.PreviosSvg alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`}></use>
        </S.PreviosSvg>
      </S.Previos>

      <S.Play onClick={() => playOrPause()}>
        <S.PlaySvg alt="play/pause">
          {isPaused ? (
            <use xlinkHref={`${sprite}#icon-play`}></use>
          ) : (
            <use xlinkHref={`${sprite}#icon-pause`}></use>
          )}
        </S.PlaySvg>
      </S.Play>

      <S.Next>
        <S.NextSvg alt="next">
          <use xlinkHref={`${sprite}#icon-next`}></use>
        </S.NextSvg>
      </S.Next>
      <S.Repeat $isActive={playerState.isLoop} onClick={() => handlerOnLoop()}>
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
