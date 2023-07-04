import * as S from './styles';
import { Tracks__SearchFilter } from '../Tracks__SearchFilter/Tracks__SearchFilter';
import { Tracks__List } from '../Tracks__List/Tracks__List';

export const Tracks = ({ heading = 'Треки' }) => {
  return (
    <main>
      <S.Heading>{heading}</S.Heading>
      <Tracks__SearchFilter />
      <Tracks__List />
    </main>
  );
};
