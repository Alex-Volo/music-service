import { useState } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDateSortType,
  addOrRemoveAuthor,
  addOrRemoveGenre,
} from 'store/tracksSlice';

export const ModalItem = ({ value, id }) => {
  const dispatch = useDispatch();
  //   const [isActive, setIsActive] = useState(false);
  let isActive = false;
  let clickHandler = () => {};
  switch (id) {
    case '1':
      isActive = useSelector((state) => state.tracks.filterAuthors).includes(
        value
      );
      clickHandler = () => dispatch(addOrRemoveAuthor(value));
      break;

    case '2':
      const type =
        value === '<по умолчанию>' ? null : value === 'Сначала старые' ? 1 : 2;
      isActive = useSelector((state) => state.tracks.dateSortType) === type;
      clickHandler = () => {
        dispatch(setDateSortType(type));
      };
      break;

    case '3':
      isActive = useSelector((state) => state.tracks.filterGenres).includes(
        value
      );
      clickHandler = () => dispatch(addOrRemoveGenre(value));
      break;

    default:
  }

  return (
    <S.ModalLI
      $isActive={isActive}
      onClick={() => {
        clickHandler();
      }}
    >
      {value}
    </S.ModalLI>
  );
};
