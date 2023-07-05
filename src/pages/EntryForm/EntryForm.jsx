import * as S from './styles';
import logo_black from './logo_black.svg';
import EntryInput from './EntryInput/EntryInput';
import EntryBtn from './EntryBtn/EntryBtn';

const EntryForm = () => {
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
      </S.InputsList>
      <S.BtnContainer>
        <EntryBtn value="Войти" colored={true} />
        <EntryBtn value="Зарегистрироваться" colored={false} />
      </S.BtnContainer>
    </S.Form>
  );
};

export default EntryForm;
