import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/UISlice';

const EntryBtn = ({ value, $isColored, link, handler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <S.Btn
      $isColored={$isColored}
      onClick={(e) => {
        e.preventDefault();

        if (handler) {
          handler().then((response) => {
            

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
