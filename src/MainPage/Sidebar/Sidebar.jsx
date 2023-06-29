import classes from './Sidebar.module.css';
import Sidebar__Item from '../Sidebar__Item/Sidebar__Item';
import playlist01 from 'img/playlist01.png';
import playlist02 from 'img/playlist02.png';
import playlist03 from 'img/playlist03.png';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  // Вешает класс loading на три секунды, а затем убирает его
  const [loadingClass, setLoadingClass] = useState('loading');
  useEffect(() => {
    setTimeout(setLoadingClass, 3000, '');
  });

  return (
    <div className={classes.sideBar}>
      <Sidebar__Item
        img={playlist01}
        description="day's playlist"
        loadingClass={loadingClass}
      />
      <Sidebar__Item
        img={playlist02}
        description="
100 dance hits"
        loadingClass={loadingClass}
      />
      <Sidebar__Item
        img={playlist03}
        description="indie charge"
        loadingClass={loadingClass}
      />
    </div>
  );
};

export default Sidebar;
