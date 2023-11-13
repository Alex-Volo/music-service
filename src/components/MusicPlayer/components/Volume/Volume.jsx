import { useState } from 'react';
import * as S from './styles';

export const Volume = ({ audioAPI }) => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';

  const [volumeValue, setVolumeValue] = useState('0.2');
  const handlerOnChangeVolume = (e) => {
    setVolumeValue(e.target.value);
  };

  if (audioAPI) audioAPI.volume = parseFloat(volumeValue);
  return (
    <S.volumeBlock>
      <div>
        <S.iconSvg>
          <use xlinkHref={`${sprite}#icon-volume`}></use>
        </S.iconSvg>
      </div>
      <div>
        <input
          onInput={(e) => handlerOnChangeVolume(e)}
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
