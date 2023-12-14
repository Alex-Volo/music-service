import * as S from './styles';
import { Track, ListHead, Error } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTracksQuery } from 'services/API';
import {
  setIsLoading,
  setVisibleList,
} from 'store/tracksSlice';
import { useEffect } from 'react';

export const TracksList = ({ playlist }) => {
  const dispatch = useDispatch();
  const visibleList = useSelector((state) => state.tracks.visibleList);

  const {
    data: tracks = visibleList,
    isLoading: isTracksLoading,
    isFetching,
    isError,
    error,
  } = useGetTracksQuery(playlist);

  useEffect(() => {
    dispatch(setVisibleList(tracks));
    dispatch(setIsLoading(isTracksLoading || isFetching));
  }, [tracks]);

  const isLoading = isTracksLoading || isFetching;
  const isSearching = useSelector((state) => state.tracks.isSearching);
  const listOfFound = useSelector((store) => store.tracks.listOfFound);
  // let currentTracks = null;

  if (isSearching) visibleList = listOfFound;

  const trackElements = visibleList.map((track) => (
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
