import classes from './Tracks__FilterBtn.module.css';
import Tracks__FilterModal from 'MainPage/Tracks__FilterModal/Tracks__FilterModal';
const Tracks__FilterBtn = ({
  id,
  isActive,
  title = 'исполнителю',
  makeBtnActive,
}) => {
  const handleOnClick = () => {
    isActive ? makeBtnActive(0) : makeBtnActive(id);
  };
  return (
    <div>
      <div
        onClick={handleOnClick}
        className={`${classes.filterBtn} ${isActive && classes.active}`}
      >
        {title}
      </div>
      {isActive && <Tracks__FilterModal />}
    </div>
  );
};

export default Tracks__FilterBtn;
