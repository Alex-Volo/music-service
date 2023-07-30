import * as S from './styles';
import logo_black from 'assets/img/logo_black.svg';
import EntryInput from './EntryInput/EntryInput';
import EntryBtn from './EntryBtn/EntryBtn';
import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchLogin, regNewUser } from 'helpers/DAL';
import RegBtn from './RegBtn/RegBtn';
import Cookies from 'js-cookie';
import { setToken } from 'store/UISlice';
import { useDispatch } from 'react-redux';

const EntryForm = ({ form }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleLogin = async () => {
    alert(`Выполняется вход: ${login} ${password}`);
    fetchLogin(login, password)
      .then(() => {
        Cookies.set('token', '1');
        dispatch(setToken(Boolean(Cookies.get('token'))));
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.warn(error);
        console.warn(error.response.data);
        const text = Object.entries(error.response.data);
        setError(text);
      });
    // setError('Неизвестная ошибка входа');
  };

  const handleRegister = () => {
    alert(`Выполняется регистрация: ${login} ${password}`);
    regNewUser(email, password, login)
      .then(() => navigate('/login', { replace: true }))
      .catch((error) => {
        console.warn(error);
        console.warn(error.response.data);
        const text = Object.entries(error.response.data);
        setError(text);
      });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [form, login, password, email]);

  return (
    <S.Form>
      <AdviseBox />
      <Link to="/login">
        <S.Logo src={logo_black} alt="logo" />
      </Link>
      <S.InputsList>
        <li style={{ color: 'red', position: 'absolute' }}>{error}</li>
        <li>
          <EntryInput
            type="text"
            name="login"
            placeholder={form === 'registration' ? 'Логин' : 'E-mail'}
            value={login}
            onChange={(event) => {
              setLogin(event.target.value);
            }}
          />
        </li>
        <li>
          <EntryInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </li>
        {form === 'registration' && (
          <li>
            <EntryInput
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </li>
        )}
      </S.InputsList>
      <S.BtnContainer>
        {form !== 'registration' && (
          <EntryBtn
            handler={handleLogin}
            value="Войти"
            $isColored={true}
            link="/"
          />
        )}
        {form !== 'registration' ? (
          <EntryBtn
            value="Зарегистрироваться"
            $isColored={false}
            link="/registration"
          />
        ) : (
          <RegBtn
            value="Зарегистрироваться"
            $isColored={true}
            link="/login"
            isNeedAction={true}
            regData={{ email, password, login }}
            handler={handleRegister}
          />
        )}
      </S.BtnContainer>
    </S.Form>
  );
};

export default EntryForm;
