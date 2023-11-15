import { useEffect } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPaused, toggleLoop } from 'store/playerSlice';
import { setCurrentTrack } from 'store/tracksSlice';

export const Controls = ({ audioAPI }) => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.player.isPaused);
  const isLoop = useSelector((state) => state.player.isLoop);

  useEffect(() => {
    if (audioAPI) {
      audioAPI.autoplay = true;
      audioAPI.loop = isLoop;
      isPaused ? audioAPI?.pause() : audioAPI?.play();
    }
  },[audioAPI?.paused]);

  const playOrPause = () => {
    isPaused ? audioAPI?.play() : audioAPI?.pause();
    dispatch(setIsPaused(audioAPI.paused));
  };

  const onLoopClick = () => {
    dispatch(toggleLoop());
  };
  
  // Определяю текущий список треков, текущий трек и индекс текущего трека
  const currentTrackList = useSelector((store) => store.tracks.list);
  const currentTrack = useSelector((store) => store.tracks.currentTrack);
  const currentTrackIndex = currentTrackList.findIndex(
    ({ id }) => currentTrack.id === id
  );

  const onNextClick = () => {
    const nextTrack = (currentTrackIndex + 1) % currentTrackList.length;
    dispatch(setCurrentTrack(currentTrackList[nextTrack]));
  };

  const onPreviousClick = () => {
    const previousTrack = (currentTrackList.length + currentTrackIndex - 1) % currentTrackList.length;
    dispatch(setCurrentTrack(currentTrackList[previousTrack]));
  }

  return (
    <S.PlayerControls>
      <S.Previos onClick={onPreviousClick}>
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

      <S.Next onClick={onNextClick}>
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
