import classes from './Tracks__FilterBtn.module.css';
import Tracks__FilterModal from 'MainPage/Tracks__FilterModal/Tracks__FilterModal';
import { fakeState } from 'helpers/fakeState';

const Tracks__FilterBtn = ({
  id,
  isActive,
  title = 'исполнителю',
  makeBtnActive,
}) => {
  const getModalData = () => {
    const getTypeOfData = () => {
      switch (title) {
        case 'году выпуска':
          return 'release_date';
        case 'жанру':
          return 'genre';
        default:
          return 'author';
      }
    };
    const data = Array.from(
      new Set(fakeState.map((track) => track[getTypeOfData()]))
    ).sort();
    return data;
  };
  const handleOnClick = () => {
    console.log(getModalData());
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
