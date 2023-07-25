import * as S from './styles';
import { useState } from "react";
import { styled } from "styled-components";
export const MusicPlayer__ProgressBar = () => {
  return <S.ProgressBar />;
};




export const ProgressBar = () => {
  const [currentTime, setCurrentTime] = useState(70);
  const duration = 230;

  return (
    <S.ProgressBar
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => setCurrentTime(event.target.value)}
      $color="#ff0000"
    />
  );
}