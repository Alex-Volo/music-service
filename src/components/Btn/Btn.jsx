import * as S from './styles';
import { useState } from 'react';

export const Btn = ({ value, $isColored, handler }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <S.Btn
      $isColored={$isColored}
      disabled={isDisabled}
      onClick={async (e) => {
        e.preventDefault();
        if (!handler) return;

        setIsDisabled(true);
        await handler();
        setIsDisabled(false);
      }}
    >
      {value}
    </S.Btn>
  );
};
