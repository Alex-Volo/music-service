import classes from './EntryForm.module.css';
import logo_black from './logo_black.svg';
import EntryInput from './EntryInput/EntryInput';
import EntryBtn from './EntryBtn/EntryBtn';

const EntryForm = () => {
  return (
    <form className={classes.form}>
      <img className={classes.logo} src={logo_black} alt="logo" />
      <ul className={classes.inputsList}>
        <li>
          <EntryInput placeholder="Логин" />
        </li>
        <li>
          <EntryInput placeholder="Пароль" />
        </li>
      </ul>
      <div className={classes.btnContainer}>
        <EntryBtn value="Войти" colored={true} />
        <EntryBtn value="Зарегистрироваться" colored={false} />
      </div>
    </form>
  );
};

export default EntryForm;
