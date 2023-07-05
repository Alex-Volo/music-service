import * as S from './styles';

const EntryBtn = ({ value, colored }) => {
  return <S.Btn colored={colored}>{value}</S.Btn>;
};

export default EntryBtn;
