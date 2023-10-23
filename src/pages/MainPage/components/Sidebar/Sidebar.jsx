import * as S from './styles';
import { Sidebar__Item } from 'components';
import playlist01 from 'assets/img/playlist01.png';
import playlist02 from 'assets/img/playlist02.png';
import playlist03 from 'assets/img/playlist03.png';

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <Sidebar__Item
        img={playlist01}
        description="day's playlist"
        loadingClass={''}
        link='/playlist/1'
      />
      <Sidebar__Item
        img={playlist02}
        description="
100 dance hits"
        loadingClass={''}
        link='/playlist/2'

      />
      <Sidebar__Item
        img={playlist03}
        description="indie charge"
        loadingClass={''}
        link='/playlist/3'

      />
    </S.Sidebar>
  );
};
