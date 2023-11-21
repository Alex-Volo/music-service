import * as S from './styles';
import { Track, ListHead } from 'components';
import { useSelector } from 'react-redux';
import { useGetTracksQuery } from 'services/API';

export const TracksList = () => {
  // Пока не придумал, как правильно совместить RTK-Query с моей логикой
  // const {data = [], isLoading, isFetching, isError, error} = useGetTracksQuery();
  // console.log(data, 'это данные');
  // console.log(isLoading, 'Загружается ли');
  // console.log(isFetching, 'Фетчится ли');
  // const tracks = data;

  const isLoading = useSelector((state) => state.tracks.isLoading);

  const tracks = useSelector((state) => state.tracks.list);

  if (!Array.isArray(tracks)) return <div>Ошибка: {tracks}</div>;
  const trackElements = tracks.map((track) => (
    <Track key={track.id} isLoading={isLoading} track={track} />
  ));

  return (
    <S.TracksList>
      <ListHead />
      {trackElements}
    </S.TracksList>
  );
};
