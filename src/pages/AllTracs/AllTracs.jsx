import * as S from './styles';
import { SearchFilter, TracksList } from 'components';

export const AllTracs = () => {
  return (
    <S.Main>
      <S.Heading>Треки</S.Heading>
      <SearchFilter />
      <TracksList playlist="list" />
    </S.Main>
  );
};
