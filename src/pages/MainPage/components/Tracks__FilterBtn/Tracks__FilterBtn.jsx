import * as S from './styles';
import { Tracks__FilterModal } from '../Tracks__FilterModal/Tracks__FilterModal';
import { fakeState } from 'helpers/fakeState';
import { getSortList } from 'helpers/helpers';

export const Tracks__FilterBtn = ({ id, isActive, title, makeBtnActive }) => {
  const handleOnClick = () => {
    isActive ? makeBtnActive(0) : makeBtnActive(id);
  };
  //Функция getSortList по тайтлу сопостовляет по какому свойству сформировать
  //массив из стейта, а затем возвращает массив полученных значений
  const sortList = getSortList(title, fakeState);
  return (
    <div>
      <S.FilterBtn onClick={handleOnClick} $isActive={isActive}>
        {title}
        {isActive && <S.Shortcut>{sortList.length}</S.Shortcut>}
      </S.FilterBtn>
      {isActive && <Tracks__FilterModal sortList={sortList} />}
    </div>
  );
};
