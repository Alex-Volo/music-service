import * as S from './styles';
import { SearchFilter, TracksList } from 'components';
import { useEffect, useState } from 'react';
import { setTracks } from 'store/tracksSlice';
import { fetchAllTracks } from 'helpers/DAL';
import { useDispatch } from 'react-redux';

export const Favorites = ({ heading = 'Треки', playlist }) => {
//   const [loadingClass, setLoadingClass] = useState('loading');
//   const dispatch = useDispatch();
  // Загружаю все треки
//   useEffect(() => {
//     fetchAllTracks()
//       .then((data) => {
//         dispatch(setTracks(data));
//         setLoadingClass('');
//       })
//       .catch((error) => {
//         console.warn(error.message);
//         dispatch(setTracks(error.message));
//       });
//   }, []);

  return (
    <main>
      <S.Heading>Избранное</S.Heading>
      <SearchFilter />
      <TracksList playlist="favorites" />
    </main>
  );
};