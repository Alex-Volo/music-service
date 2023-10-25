import * as S from './styles';
import sprite from 'assets/img/icon/sprite.svg';

export const ListHead = () => {
  return (
    <S.ListHead>
      <div>ТРЕК</div>
      <div>ИСПОЛНИТЕЛЬ</div>
      <div>АЛЬБОМ</div>
      <div></div>
      <S.TimeCol>
        <S.WatchSvg>
          <use xlinkHref={`${sprite}#icon-watch`} />
        </S.WatchSvg>
      </S.TimeCol>
    </S.ListHead>
  );
};
