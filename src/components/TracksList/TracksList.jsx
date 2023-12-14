import * as S from './styles';
import { Track, ListHead, Error } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTracksQuery } from 'services/API';
import { setIsLoading, setShuffledOrder, setTracks } from 'store/tracksSlice';
import { useEffect } from 'react';

export const TracksList = ({ playlist }) => {
  const dispatch = useDispatch();
  const tracksList = useSelector((state) => state.tracks.list);

  let {
    data: tracks = tracksList,
    isLoading: isTracksLoading,
    isFetching,
    isError,
    error,
  } = useGetTracksQuery(playlist);

  useEffect(() => {
    dispatch(setTracks(tracks));
    dispatch(setShuffledOrder(tracks));
    dispatch(setIsLoading(isTracksLoading || isFetching));
  }, [tracks]);

  const isLoading = isTracksLoading || isFetching;
  const isSearching = useSelector(state => state.tracks.isSearching);
  const listOfFound = useSelector(store => store.tracks.listOfFound);
  // let currentTracks = null;

  if (isSearching) tracks = listOfFound;
  const trackElements = tracks.map((track) => (
    <Track key={track.id} isLoading={isLoading} track={track} />
  ));

  if (isError) return <Error value={error.error} />;

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
