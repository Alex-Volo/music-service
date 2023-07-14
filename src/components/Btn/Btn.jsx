import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Cookies from 'js-cookie';
import { setToken } from 'store/UISlice';

const Btn = ({ value, $isColored, link, isNeedAction }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBtnClick = (e) => {
    e.preventDefault();
    if (isNeedAction) {
      Cookies.set('token', '1');
      dispatch(setToken(Boolean(Cookies.get('token'))));
    }
    navigate(link, { replace: true });
  };
  return (
    <S.Btn $isColored={$isColored} onClick={handleBtnClick}>
      {value}
    </S.Btn>
  );
};

export default Btn;
