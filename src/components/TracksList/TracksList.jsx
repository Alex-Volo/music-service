import * as S from './styles';
import { Track, ListHead, Error } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTracksQuery } from 'services/API';
import { setIsLoading } from 'store/tracksSlice';
import { useEffect } from 'react';

export const TracksList = ({ playlist }) => {
  // Запрос через RTKQ, рефетч при монтировании компонента и изменении аргументов
  // В traksSlice лежит extraReduser, который обеспечивает dispatch в state.tracks.list
  // и массив shuffledOrder, при каждом рефетч, для каждого конкретного списка треков
  const {
    isLoading: isTracksLoading,
    isFetching,
    isError,
    error,
  } = useGetTracksQuery(playlist, {
    refetchOnMountOrArgChange: true,
  });
  const isLoading = isTracksLoading || isFetching
  // const isLoading = useSelector((state) => state.tracks.isLoading);
  const tracks = useSelector((state) => state.tracks.list);

  if (isError) return <Error value={error} />;

  const trackElements = tracks.map((track) => (
    <Track
      key={track.id}
      isLoading={isLoading ?? true}
      track={track}
    />
  ));

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
