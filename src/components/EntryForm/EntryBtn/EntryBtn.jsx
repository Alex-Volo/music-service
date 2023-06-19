import classes from './EntryBtn.module.css';

const EntryBtn = ({ value, colored }) => {
  return (
    <button className={classes.btn + ' ' + (colored && classes.purple)}>{value}</button>
  );
};

export default EntryBtn;
