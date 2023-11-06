import { Link } from 'react-router-dom';
import * as S from './styles';

export const SidebarItem = ({ img, description, link }) => {
  return (
    <S.Sidebar__item>
      <Link to={link}>
        <img src={img} alt={description} />
      </Link>
    </S.Sidebar__item>
  );
};
