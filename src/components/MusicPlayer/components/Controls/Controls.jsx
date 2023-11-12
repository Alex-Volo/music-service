import { useState } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPaused, toggleLoop } from 'store/playerSlice';

export const Controls = ({ audioAPI }) => {
  const sprite = '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.player.isPaused);
  const isLoop = useSelector((state) => state.player.isLoop);

  if (audioAPI) {
    audioAPI.loop = isLoop;
  }

  const playOrPause = () => {
    isPaused ? audioAPI.play() : audioAPI.pause();
    dispatch(setIsPaused(audioAPI.paused));
  };

  const onLoopClick = () => {
    dispatch(toggleLoop());
  }



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

      <S.Repeat $isActive={isLoop} onClick={onLoopClick}>
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
