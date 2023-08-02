import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Cookies from 'js-cookie';
import { setToken } from 'store/UISlice';
import { useState } from 'react';

const RegBtn = ({ value, $isColored, link, isNeedAction, handler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleBtnClick = (e) => {
    e.preventDefault();
    if (isNeedAction) {
      Cookies.set('token', '1');
      dispatch(setToken(Boolean(Cookies.get('token'))));
    }
    navigate(link, { replace: true });
  };
  return (
    <S.Btn
      $isColored={$isColored}
      disabled={isDisabled}
      onClick={(e) => {
        setIsDisabled(true);

        e.preventDefault();
        handler().then(() => {
          setIsDisabled(false);
        });
      }}
    >
      {value}
    </S.Btn>
  );
};

export default RegBtn;
