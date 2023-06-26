import classes from './Tracks__FilterBtn.module.css';

const Tracks__FilterBtn = ({ title = 'исполнителю' }) => {
  return <div className={classes.filterBtn}>{title}</div>;
};

export default Tracks__FilterBtn;
