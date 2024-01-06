import * as S from './styles';
import { FilterModal } from 'components';
import { fakeState } from 'helpers/fakeState';
import { getSortList } from 'helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilter } from 'store/tracksSlice';

export const FilterBtn = ({ id, isActive, title, makeBtnActive }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    isActive ? makeBtnActive(0) : makeBtnActive(id);
  };
  let currentFilterArray = [];
  switch (id) {
    case '1':
      currentFilterArray = useSelector((state) => state.tracks.filterAuthors);
      break;
    case '2':
      currentFilterArray = useSelector((state) => state.tracks.dateSortType)
        ? [1]
        : [];
      break;
    case '3':
      currentFilterArray = useSelector((state) => state.tracks.filterGenres);
      break;
  }

  const shortcutHandler = (e) => {
    e.stopPropagation();
    console.log('обработчик на ярлыке');
    let currentFilterName = ['', []];
    switch (id) {
      case '1':
        currentFilterName = ['filterAuthors', []];
        break;
      case '2':
        currentFilterName = ['dateSortType', null];

        break;
      case '3':
        currentFilterName = ['filterGenres', []];
        break;
    }
    dispatch(removeFilter(currentFilterName));
  };
  //Функция getSortList по тайтлу сопостовляет по какому свойству сформировать
  //массив из стейта, а затем возвращает массив полученных значений
  const sortList = getSortList(title, fakeState);
  return (
    <div>
      <S.FilterBtn onClick={handleOnClick} $isActive={isActive}>
        {title}
        {currentFilterArray.length > 0 && (
          <S.Shortcut onClick={shortcutHandler}>
            {currentFilterArray.length}
          </S.Shortcut>
        )}
      </S.FilterBtn>
      {isActive && <FilterModal id={id} sortList={sortList} />}
    </div>
  );
};
