import * as S from './styles';
import { Tracks__FilterBtn } from '../Tracks__FilterBtn/Tracks__FilterBtn';
import { useState } from 'react';

export const Tracks__SearchFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const makeBtnActive = (id) => {
    setActiveButton(id);
  };
  return (
    <S.SearchFilter>
      <S.Heading>Искать по:</S.Heading>
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="1"
        isActive={activeButton === '1' && true}
        title="исполнителю"
      />
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="2"
        isActive={activeButton === '2' && true}
        title="году выпуска"
      />
      <Tracks__FilterBtn
        makeBtnActive={makeBtnActive}
        id="3"
        isActive={activeButton === '3' && true}
        title="жанру"
      />
    </S.SearchFilter>
  );
};
