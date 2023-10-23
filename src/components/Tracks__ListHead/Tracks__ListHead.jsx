import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const Tracks__ListHead = () => {
  return (
    <S.ListHead>
      <div>Трек</div>
      <div>Исполнитель</div>
      <div>Альбом</div>
      <div></div>
      <S.TimeCol>
        <S.WatchSvg>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </S.WatchSvg>
      </S.TimeCol>
    </S.ListHead>
  );
};
