import * as S from './styles';
import { formatTime } from 'helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerVisible } from 'store/playerSlice';
import { setIsPaused } from 'store/playerSlice';
import {
  setActiveList,
  setCurrentTrack,
  setShuffledOrder,
} from 'store/tracksSlice';
import { Skeletons } from './Skeletons';
import { useUser } from 'hooks';
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from 'services/tracksAPISlice';

export const Track = ({ isLoading, track, playlist }) => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const visibleList = useSelector((state) => state.tracks.visibleList);
  const { currentUser } = useUser();
  const [like, { isSuccess: isLikeSuccess }] = useLikeTrackMutation();
  const [dislike, { isSuccess: isDislikeSuccess }] = useDislikeTrackMutation();

  const isAnimated = currentTrack.id === track.id ? true : false;
  const isPaused = useSelector((state) => state.player.isPaused) && isAnimated;

  let isLiked = track?.stared_user?.some(({ id }) => id === currentUser.id);
  if (playlist === 'favorites') isLiked = true;

  const handlerTrackClick = (track) => {
    dispatch(setActiveList(visibleList));
    dispatch(setShuffledOrder(visibleList));
    dispatch(setCurrentTrack(track));
    dispatch(setPlayerVisible());
    dispatch(isAnimated ? setIsPaused(!isPaused) : setIsPaused(false));
  };

  const handlerLikeClick = (id) => (isLiked ? dislike(id) : like(id));

  if (isLoading) {
    return (
      <S.Track>
        <Skeletons />
      </S.Track>
    );
  }

  return (
    <S.Track $isAnimated={isAnimated} onClick={() => handlerTrackClick(track)}>
      <S.TrackLogo $isAnimated={isAnimated}>
        <S.TrackLogoSvg $isAnimated={isAnimated} $isPaused={isPaused}>
          {isPaused ? (
            <use xlinkHref={`${sprite}#icon-pause`} />
          ) : (
            <use xlinkHref={`${sprite}#icon-note`} />
          )}
        </S.TrackLogoSvg>
      </S.TrackLogo>

      <S.TrackName>{track.name}</S.TrackName>
      <S.TrackAuthor>{track.author}</S.TrackAuthor>
      <S.TrackAlbum>{track.album}</S.TrackAlbum>
      <S.LikeWrapper>
        <S.TrackLikeSvg
          $isLiked={isLiked}
          onClick={(e) => {
            e.stopPropagation();
            handlerLikeClick(track.id);
          }}
        >
          <use xlinkHref={`${sprite}#icon-like`} />
        </S.TrackLikeSvg>
      </S.LikeWrapper>
      <S.TrackTime>{formatTime(track.duration_in_seconds)}</S.TrackTime>
    </S.Track>
  );
};
