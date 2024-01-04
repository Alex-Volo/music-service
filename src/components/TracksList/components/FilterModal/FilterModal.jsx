import * as S from './styles';
import { ModalItem } from '../ModalItem/ModalItem';

export const FilterModal = ({ sortList, id }) => {
  const sortListItems = sortList.map((el) => (
    <ModalItem id={id} key={el} value={el}/>
  ));
  return (
    <S.ModalWrapper>
      <S.ModalList> {sortListItems} </S.ModalList>
    </S.ModalWrapper>
  );
};
