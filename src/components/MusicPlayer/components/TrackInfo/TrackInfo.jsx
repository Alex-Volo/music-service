import * as S from './styles';

export const TrackInfo = ({ currentTrack }) => {
  const sprite = '/assets/img/sprite.svg';

  return (
    <S.PlayerTrack>
      <S.TrackLogo>
        <S.TrackLogoSvg>
          <use xlinkHref={`${sprite}#icon-note`}></use>
        </S.TrackLogoSvg>
      </S.TrackLogo>

      <div>
        <>
          <S.Text>{currentTrack.name}</S.Text>
          <S.Text>{currentTrack.author}</S.Text>
        </>
      </div>
    </S.PlayerTrack>
  );
};
