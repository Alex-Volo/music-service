import * as S from './styles';
import { useState } from 'react';

export const Btn = ({ value, $isColored, handler }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <S.Btn
      $isColored={$isColored}
      disabled={isDisabled}
      onClick={(e) => {
        e.preventDefault();

        if (handler) {
          setIsDisabled(true);
          handler().then(() => {
            setIsDisabled(false);
          });
        }

        setIsDisabled(false);
      }}
    >
      {value}
    </S.Btn>
  );
};
