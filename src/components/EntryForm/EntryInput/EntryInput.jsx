import classes from './EntryInput.module.css';


const EntryInput = ({placeholder}) => {
  return <input className={classes.input} type="text" placeholder={placeholder} />
      
};

export default EntryInput;
