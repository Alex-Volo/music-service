import classes from './FilterBtn.module.css';

const FilterBtn = ({ title = 'исполнителю' }) => {
  return <div className={classes.filterBtn}>{title}</div>;
};

export default FilterBtn;
