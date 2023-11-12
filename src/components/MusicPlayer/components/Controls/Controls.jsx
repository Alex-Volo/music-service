import { useEffect } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPaused, toggleLoop } from 'store/playerSlice';

export const Controls = ({ audioAPI }) => {
  const sprite = '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const isPaused = useSelector((state) => state.player.isPaused);
  const isLoop = useSelector((state) => state.player.isLoop);

  // \music-service\src\components\MusicPlayer\components\Controls\Controls.jsx
  // В общем спорное и очень непонятное для меня самого решение.
  // Строка 28 позволяет при нажатии на трек запускать и останавливать воспроизведение
  // В компоненте - \src\components\TracksList\components\Track\Track.jsx
  // можно посмотреть обработчик handlerTrackClick, который диспатчит в стор
  // Если вытащить из useEffect строку 28, то При первом нажатии на трек 
  // возникает ошибка: The element has no supported sources. 
  // после перезагрузки страницы. Оператор опциональной последовательности
  // оставил намеренно, чтоб удобней было проверять.
  // Не понимаю почему оно работает
  // А еще хотелось бы понять, как сделать правильно

  useEffect(() => {
    if (audioAPI) {
      audioAPI.autoplay = true;
      audioAPI.loop = isLoop;
      isPaused ? audioAPI?.pause() : audioAPI?.play();
    }
  })

  const playOrPause = () => {
    isPaused ? audioAPI?.play() : audioAPI?.pause();
    dispatch(setIsPaused(audioAPI.paused));
  };

  const onLoopClick = () => {
    dispatch(toggleLoop());
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
