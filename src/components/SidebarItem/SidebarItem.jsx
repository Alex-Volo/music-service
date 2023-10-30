import { Link } from 'react-router-dom';
import * as S from './styles';

export const SidebarItem = ({ img, description, loadingClass, link, chidren }) => {
  return (
    <S.Sidebar__item className={loadingClass}>
      <Link to={link}>
        <img src={img} alt={description} />
        {chidren}
      </Link>
    </S.Sidebar__item>
  );
};
