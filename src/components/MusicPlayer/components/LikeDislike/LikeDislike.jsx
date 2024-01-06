import * as S from './styles';
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from 'services/tracksAPISlice';
import { Error } from 'components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const LikeDislike = ({ currentTrack }) => {
  const sprite = process.env.PUBLIC_URL + '/assets/img/sprite.svg';
  const currentUser = useSelector((state) => state.user.user);

  const visibleList = useSelector((state) => state.tracks.visibleList);
  const [isLiked, setIsLiked] = useState(
    currentTrack?.stared_user?.some(({ id }) => id === currentUser.id)
  );

  useEffect(() => {
    setIsLiked(
      currentTrack?.stared_user?.some(({ id }) => id === currentUser.id)
    );
  }, [currentTrack, currentUser, isLiked, visibleList]);
  const [like, { isError: isLikeError, error: likeError }] =
    useLikeTrackMutation();
  const [dislike, { isError: isDislikeError, error: dislikeError }] =
    useDislikeTrackMutation();
  const isError = isLikeError ?? isDislikeError;
  // const error = likeError ?? dislikeError;

  const handlerLikeClick = (id) => {
    if (isError) return;
    return isLiked ? dislike(id) : like(id);
  };

  return (
    <S.PlayerLikeDislikeGroup>
      <S.LikeSvg
        $isLiked={isLiked}
        alt="like"
        onClick={(e) => {
          e.stopPropagation();
          if (isError) return;
          handlerLikeClick(currentTrack.id);
        }}
      >
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </S.LikeSvg>
{/* 
      <S.DislikeSvg alt="dislike">
        <use xlinkHref={`${sprite}#icon-dislike`}></use>
      </S.DislikeSvg> */}
    </S.PlayerLikeDislikeGroup>
  );
};
