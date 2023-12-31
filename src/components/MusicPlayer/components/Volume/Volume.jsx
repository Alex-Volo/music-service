import { useEffect, useState } from 'react';
import * as S from './styles';

export const Volume = ({ audioAPI }) => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';

  const [volumeValue, setVolumeValue] = useState('0.1');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioAPI) audioAPI.muted = isMuted;
  }, [isMuted]);

  const handlerOnChangeVolume = (e) => {
    setVolumeValue(e.target.value);
  };

  if (audioAPI) audioAPI.volume = parseFloat(volumeValue);
  return (
    <S.volumeBlock>
      <S.iconWrapper onClick={() => setIsMuted(!isMuted)}>
        <S.iconSvg>
          {isMuted ? (
            <use xlinkHref={`${sprite}#icon-volume-off`}></use>
          ) : (
            <use xlinkHref={`${sprite}#icon-volume`}></use>
          )}
        </S.iconSvg>
      </S.iconWrapper>
      <div>
        <S.input
          onInput={handlerOnChangeVolume}
          type="range"
          id="volume"
          min="0"
          max="1"
          value={volumeValue}
          step="0.01"
        />
      </div>
    </S.volumeBlock>
  );
};
