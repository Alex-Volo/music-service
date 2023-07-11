import { Link } from 'react-router-dom';
import * as S from './styles';

const EntryBtn = ({ value, colored, link }) => {
  return (
    <S.Btn colored={colored}>
      <Link to={link}>{value}</Link>
    </S.Btn>
  );
};

export default EntryBtn;
