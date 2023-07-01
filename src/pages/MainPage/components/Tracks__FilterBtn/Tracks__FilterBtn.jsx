import classes from './Tracks__FilterBtn.module.css';
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
      <div
        onClick={handleOnClick}
        className={`${classes.filterBtn} ${isActive && classes.active}`}
      >
        {title}
        {isActive && <div className={classes.shortcut}>{sortList.length}</div>}
      </div>
      {isActive && <Tracks__FilterModal sortList={sortList} />}
    </div>
  );
};
