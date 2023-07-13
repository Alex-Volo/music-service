import { Link } from 'react-router-dom';
import * as S from './styles';

export const Sidebar__Item = ({ img, description, loadingClass, link }) => {
  return (
    <S.Sidebar__item className={loadingClass}>
      <Link to={link}>
        <img src={img} alt={description} />
      </Link>
    </S.Sidebar__item>
  );
};
