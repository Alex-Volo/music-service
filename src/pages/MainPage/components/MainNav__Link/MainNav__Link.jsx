import * as S from './styles';

export const MainNav__Link = ({ linkName }) => {
  return (
    <S.NavLink>
      <a href="http://" className="menu__link">
        {linkName}
      </a>
    </S.NavLink>
  );
};

