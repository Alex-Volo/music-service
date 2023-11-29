import * as S from './styles';
import { SidebarItem } from 'components';
import { Skeletons } from './Skeletons';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const playlist01ImgURL = '/assets/img/playlist01.png';
  const playlist02ImgURL = '/assets/img/playlist02.png';
  const playlist03ImgURL = '/assets/img/playlist03.png';
  const isLoading = useSelector((state) => state.tracks.isLoading);

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
        img={playlist01ImgURL}
        description="day's playlist"
        link="/playlist/1"
      />
      <SidebarItem
        img={playlist02ImgURL}
        description="
100 dance hits"
        link="/playlist/2"
      />
      <SidebarItem
        img={playlist03ImgURL}
        description="indie charge"
        link="/playlist/3"
      />
    </S.Sidebar>
  );
};
