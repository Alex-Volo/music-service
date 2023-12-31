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

  if (isSearching) visibleList = listOfFound;

  const trackElements = visibleList.map((track) => (
    <Track key={track.id} isLoading={isLoading} track={track} playlist={playlist} />
  ));

  // if (isError) {
  //   // Если у ошибки 401-й код обновляем accesToken
  //   if (error.status === 401) {
  //     (async () => {
  //       const access = await refreshToken(refresh);
  //       console.log('обновился доступ', access);

  //       dispatch(setAccessToken(access));
  //       window.location.reload();
  //     })();
  //   }
  //   return <Error value={error.error} />;
  // }

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
