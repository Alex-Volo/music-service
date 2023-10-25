import * as S from './styles';
import { FilterBtn } from 'components';
import { useState } from 'react';

export const SearchFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  const makeBtnActive = (id) => {
    setActiveButton(id);
  };
  return (
    <S.SearchFilter>
      <S.Heading>Искать по:</S.Heading>
      <FilterBtn
        makeBtnActive={makeBtnActive}
        id="1"
        isActive={activeButton === '1'}
        title="исполнителю"
      />
      <FilterBtn
        makeBtnActive={makeBtnActive}
        id="2"
        isActive={activeButton === '2'}
        title="году выпуска"
      />
      <FilterBtn
        makeBtnActive={makeBtnActive}
        id="3"
        isActive={activeButton === '3'}
        title="жанру"
      />
    </S.SearchFilter>
  );
};
