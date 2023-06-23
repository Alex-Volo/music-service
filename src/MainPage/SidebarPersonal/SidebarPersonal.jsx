import classes from './SidebarPersonal.module.css';

const SidebarPersonal = () => {
  return (
    <div className={classes.sidebarPersonal__container}>
      <p>Name</p>
      <div>Logout</div>
    </div>
  );
};

export default SidebarPersonal;
