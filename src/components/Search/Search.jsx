import { useState } from 'react';
import * as S from './styles';
import { setIsSearching, setListOfFound } from 'store/tracksSlice';
import { useDispatch, useSelector } from 'react-redux';
export const Search = () => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const tracksList = useSelector((state) => state.tracks.list);

  const isIncludes = (str, value) => {
    const normValue = value.toLowerCase();
    return str.toLowerCase().includes(normValue);
  };

  if (searchValue) {
    dispatch(setIsSearching(true));
    const listOfFound = tracksList.filter(
      (track) =>
        isIncludes(track.name, searchValue) ||
        isIncludes(track.album, searchValue) ||
        isIncludes(track.author, searchValue)
    );
    dispatch(setListOfFound(listOfFound));
  } else dispatch(setIsSearching(false));

  return (
    <S.Search>
      <S.SearchSvg>
        <use xlinkHref={`${sprite}#icon-search`} />
      </S.SearchSvg>
      <S.SearchInput
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </S.Search>
  );
};
