import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';
import playlist01 from 'img/playlist01.png';
import playlist02 from 'img/playlist02.png';
import playlist03 from 'img/playlist03.png';
const Sidebar = () => {
  return (
    <div className={classes.sideBar}>
      <SidebarItem img={playlist01} description="day's playlist" />
      <SidebarItem
        img={playlist02}
        description="
100 dance hits"
      />
      <SidebarItem img={playlist03} description="indie charge" />
    </div>
  );
};

export default Sidebar;
