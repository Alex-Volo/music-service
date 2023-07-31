import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const EntryBtn = ({ value, $isColored, link, handler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <S.Btn
      $isColored={$isColored}
      disabled={isDisabled}
      onClick={(e) => {
        e.preventDefault();
        setIsDisabled(true);

        if (handler) {
          handler().then(() => {
            setIsDisabled(false);
          });
        } else {
          navigate(link, { replace: true });
        }
      }}
    >
      {value}
    </S.Btn>
  );
};

export default EntryBtn;
