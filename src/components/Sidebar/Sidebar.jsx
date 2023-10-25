import * as S from './styles';
import { SidebarItem } from 'components';
import playlist01 from 'assets/img/playlist01.png';
import playlist02 from 'assets/img/playlist02.png';
import playlist03 from 'assets/img/playlist03.png';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Sidebar = ({ loadingClass }) => {
  console.log(loadingClass);
  if (loadingClass) {
    return (
      <SkeletonTheme
        baseColor="#202020"
        highlightColor="#444"
        height="50px"
        duration="3"
      >
        <S.Sidebar>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </S.Sidebar>
      </SkeletonTheme>
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
