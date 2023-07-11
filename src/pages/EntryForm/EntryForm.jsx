import * as S from './styles';
import logo_black from './logo_black.svg';
import EntryInput from './EntryInput/EntryInput';
import EntryBtn from './EntryBtn/EntryBtn';

const EntryForm = ({ form }) => {
  const handleEnterClick = (e) => {
    e.preventDefault();
  };
  return (
    <S.Form>
      <S.Logo src={logo_black} alt="logo" />
      <S.InputsList>
        <li>
          <EntryInput placeholder="Логин" />
        </li>
        <li>
          <EntryInput placeholder="Пароль" />
        </li>
        {form === 'registration' && (
          <li>
            <EntryInput placeholder="Повторите пароль" />
          </li>
        )}
      </S.InputsList>
      <S.BtnContainer>
        {form !== 'registration' && (
          <EntryBtn value="Войти" colored={true} link="/" />
        )}
        {form !== 'registration' ? (
          <EntryBtn
            value="Зарегистрироваться"
            colored={false}
            link="/registration"
          />
        ) : (
          <EntryBtn value="Зарегистрироваться" colored={true} link="/login" />
        )}
      </S.BtnContainer>
    </S.Form>
  );
};

export default EntryForm;
