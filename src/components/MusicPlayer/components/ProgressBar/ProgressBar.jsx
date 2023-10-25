import { formatTime } from 'helpers/helpers';
import * as S from './styles';
import { useEffect, useState } from 'react';

export const ProgressBar = ({ audioAPI }) => {
  const [currentTime, setCurrentTime] = useState(0);
  let duration = 0;
  if (audioAPI?.duration) {
    duration = audioAPI.duration;
  }

  useEffect(() => {
    if (audioAPI) {
      audioAPI.autoplay = true;
      audioAPI.addEventListener('timeupdate', () => {
        setCurrentTime(audioAPI.currentTime);
        return () => {
          audioAPI.removeEventListener('timeupdate', () => {
            setCurrentTime(audioAPI.currentTime);
          });
        };
      });
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
        onChange={(event) => (audioAPI.currentTime = event.target.value)}
        // $color="#ff0000"
      />
      <S.Duration>
        {formatTime(Math.floor(currentTime))}/{formatTime(Math.floor(duration))}
      </S.Duration>
    </>
  );
};
