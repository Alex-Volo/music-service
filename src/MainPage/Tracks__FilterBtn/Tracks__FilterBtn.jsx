import classes from './Tracks__FilterBtn.module.css';
import Tracks__FilterModal from 'MainPage/Tracks__FilterModal/Tracks__FilterModal';
import { fakeState } from 'helpers/fakeState';

const Tracks__FilterBtn = ({
  id,
  isActive,
  title = 'исполнителю',
  makeBtnActive,
}) => {
  const getSortList = (title) => {
    const getTypeOfSort = (title) => {
      switch (title) {
        case 'году выпуска':
          return 'release_date';
        case 'жанру':
          return 'genre';
        default:
          return 'author';
      }
    };

    const typeOfSort = getTypeOfSort(title);
    let sortList = [];

    if (typeOfSort === 'release_date') {
      sortList = Array.from(
        new Set(
          fakeState.map((track) =>
            track[typeOfSort] ? track[typeOfSort].slice(0, 4) : 'Неизвестно'
          )
        )
      ).sort();
    } else {
      sortList = Array.from(
        new Set(fakeState.map((track) => track[typeOfSort]))
      ).sort();
    }

    return sortList;
  };

  const handleOnClick = () => {
    isActive ? makeBtnActive(0) : makeBtnActive(id);
  };

  const sortList = getSortList(title);
  return (
    <div>
      <div
        onClick={handleOnClick}
        className={`${classes.filterBtn} ${isActive && classes.active}`}
      >
        {title}
      </div>
      {isActive && <Tracks__FilterModal sortList={sortList} />}
    </div>
  );
};

export default Tracks__FilterBtn;
