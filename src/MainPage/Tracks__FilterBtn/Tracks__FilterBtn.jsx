import classes from './Tracks__FilterBtn.module.css';

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
    <div
      onClick={handleOnClick}
      className={`${classes.filterBtn} ${isActive && classes.active}`}
    >
      {title}
    </div>
  );
};

export default Tracks__FilterBtn;
