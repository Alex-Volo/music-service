import classes from './Tracks__FilterModal.module.css';

const Tracks__FilterModal = ({ sortList }) => {
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

export default Tracks__FilterModal;
