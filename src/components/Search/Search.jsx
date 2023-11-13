import * as S from './styles';
export const Search = () => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';

  return (
    <S.Search>
      <S.SearchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchInput type="search" placeholder="Поиск" name="search" />
    </S.Search>
  );
};
