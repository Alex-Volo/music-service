import * as S from './styles';
import { SidebarItem } from 'components';
import { Skeletons } from './Skeletons';

import playlist01 from 'assets/img/playlist01.png';
import playlist02 from 'assets/img/playlist02.png';
import playlist03 from 'assets/img/playlist03.png';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const isLoading = useSelector((state) => state.UI.isLoading);
  if (isLoading) {
    return (
      <S.Sidebar>
        <Skeletons />
      </S.Sidebar>
    );
  }

  return (
    <S.Sidebar>
      <SidebarItem
        img={playlist01}
        description="day's playlist"
        loadingClass={''}
        link="/playlist/1"
      />
      <SidebarItem
        img={playlist02}
        description="
100 dance hits"
        loadingClass={''}
        link="/playlist/2"
      />
      <SidebarItem
        img={playlist03}
        description="indie charge"
        loadingClass={''}
        link="/playlist/3"
      />
    </S.Sidebar>
  );
};
