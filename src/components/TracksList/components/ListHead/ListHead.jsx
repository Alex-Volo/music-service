import * as S from './styles';

export const ListHead = () => {
  const sprite = 'assets/img/sprite.svg';

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
