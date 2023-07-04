import * as S from './styles';

export const Tracks__FilterModal = ({ sortList }) => {
  const sortListElements = sortList.map((e) => (
    <li key={e}>
      <a href="#">{e}</a>
    </li>
  ));
  return (
    <S.ModalWrapper>
      <S.ModalList> {sortListElements} </S.ModalList>
    </S.ModalWrapper>
  );
};
