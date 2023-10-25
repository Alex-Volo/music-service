import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';
export const Search = () => {
  return (
    <S.Search>
      <S.SearchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchInput type="search" placeholder="Поиск" name="search" />
    </S.Search>
  );
};
