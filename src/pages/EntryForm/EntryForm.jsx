import * as S from './styles';
import logo_black from './logo_black.svg';
import EntryInput from './EntryInput/EntryInput';
import EntryBtn from './EntryBtn/EntryBtn';
import { AdviseBox } from 'components/AdviseBox/AdviseBox';

const EntryForm = ({ form }) => {
  return (
    <S.Form>
      <AdviseBox />
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
          <EntryBtn value="Войти" $isColored={true} link="/" />
        )}
        {form !== 'registration' ? (
          <EntryBtn
            value="Зарегистрироваться"
            $isColored={false}
            link="/registration"
          />
        ) : (
          <EntryBtn
            value="Зарегистрироваться"
            $isColored={true}
            link="/login"
            isNeedAction={true}
          />
        )}
      </S.BtnContainer>
    </S.Form>
  );
};

export default EntryForm;
