import * as S from './styles';
import { Track, ListHead, Error } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTracksQuery } from 'services/tracksAPISlice';
import { setIsLoading, setVisibleList } from 'store/tracksSlice';
import { useEffect } from 'react';

export const TracksList = ({ playlist }) => {
  const dispatch = useDispatch();
  let visibleList = useSelector((state) => state.tracks.visibleList);

  const {
    data: tracks = visibleList,
    isLoading: isTracksLoading,
    isFetching,
    isError,
    error,
  } = useGetTracksQuery(playlist);

  useEffect(() => {
    dispatch(setVisibleList(tracks));
    // dispatch(setIsLoading(isTracksLoading || isFetching));
  }, [tracks]);

  // const isLoading = isTracksLoading || isFetching;

  const isLoading = isTracksLoading;

  const isSearching = useSelector((state) => state.tracks.isSearching);
  const listOfFound = useSelector((store) => store.tracks.listOfFound);
  const filterAuthors = useSelector((store) => store.tracks.filterAuthors);
  const filterGenres = useSelector((store) => store.tracks.filterGenres);
  const dateSortType = useSelector((store) => store.tracks.dateSortType);

  if (isSearching) visibleList = listOfFound;
  if (filterAuthors.length > 0) {
    visibleList = visibleList.filter((track) =>
      filterAuthors.includes(track.author)
    );
  }
  if (filterGenres.length > 0) {
    visibleList = visibleList.filter((track) =>
      filterGenres.includes(track.genre)
    );
  }
  if (dateSortType) {
    visibleList =
      dateSortType === 1
        ? [...visibleList].sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          )
        : [...visibleList].sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
  }

  const trackElements = visibleList.map((track) => (
    <Track
      key={track.id}
      isLoading={isLoading}
      track={track}
      playlist={playlist}
    />
  ));

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
