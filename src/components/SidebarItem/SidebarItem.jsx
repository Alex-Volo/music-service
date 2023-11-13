import { Link } from 'react-router-dom';
import * as S from './styles';

export const SidebarItem = ({ img, description, link }) => {
  return (
    <S.Sidebar__item>
      <Link to={link}>
        <img src={process.env.PUBLIC_URL + img} alt={description} />
      </Link>
    </S.Sidebar__item>
  );
};
