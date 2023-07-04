import classes from './Tracks__FilterModal.module.css';

export const Tracks__FilterModal = ({ sortList }) => {
  const sortListElements = sortList.map((e) => (
    <li key={e}>
      <a href="#">{e}</a>
    </li>
  ));
  return (
    <div className={classes.modalWrapper}>
      <ul className={classes.modalList}> {sortListElements} </ul>
    </div>
  );
};

