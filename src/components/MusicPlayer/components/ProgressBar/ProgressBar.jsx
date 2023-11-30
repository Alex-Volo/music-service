import { formatTime } from 'helpers/helpers';
import * as S from './styles';
import { useEffect, useState } from 'react';

export const ProgressBar = ({ audioAPI }) => {
  const [currentTime, setCurrentTime] = useState(0);
  let duration = 0;
  // Чтобы не отображалось NaN до загрузки трэка
  if (audioAPI) duration = audioAPI.duration || 0;

  const timeUpdate = () => setCurrentTime(audioAPI.currentTime);

  useEffect(() => {
    if (audioAPI) {
      audioAPI.addEventListener('timeupdate', timeUpdate);
      // willUnmount и при существующем audioAPI иначе возникает ошибка при перезагрузке страницы
      return () => {
        audioAPI.removeEventListener('timeupdate', timeUpdate);
      };
    }
  });

  return (
    <>
      <S.ProgressBar
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(e) => (audioAPI.currentTime = e.target.value)}
      />

      <S.Duration>
        {formatTime(Math.floor(currentTime))}/{formatTime(Math.floor(duration))}
      </S.Duration>
    </>
  );
};
