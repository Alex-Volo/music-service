// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import logo_black from 'assets/img/logo_black.svg';
import { EntryInput, Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { fetchLogin } from 'helpers/DAL';
import { UserContext } from 'store/context';

export const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [login, setLogin] = useState('test@test.test');
  const [password, setPassword] = useState('test@test.test');
  const { setCurrentUser } = useContext(UserContext);

  const handleLogin = async () => {
    if (!login) {
      setError('Введите Email');
      return;
    }
    if (!password) {
      setError('Введите пароль');
      return;
    }

    return fetchLogin(login, password)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        setCurrentUser(response);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.warn(error);
        if (error?.response?.data) {
          console.warn(error.response.data);
          const text = Object.values(error.response.data).join(' ');
          setError(text);
        }
      });
  };

  const regBtnHandler = async () => navigate("/registration", { replace: true });
  

  // Сбрасываем ошибку если пользователь меняет данные на форме
  useEffect(() => {
    setError(null);
  }, [login, password]);

  return (
    <S.Form>
      <Link to="/">
        <S.Logo src={logo_black} alt="logo" />
      </Link>
      {/*Группа инпутов  */}
      <S.InputsList>
        <li style={{ color: 'red', position: 'absolute', width: '300px' }}>
          {error}
        </li>

        <li>
          <EntryInput
            type="text"
            name="login"
            placeholder="E-mail"
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
      </S.InputsList>
      {/*Группа кнопок  */}
      <S.BtnContainer>
        <Btn
          handler={handleLogin}
          value="Войти"
          $isColored={true}
          link="/"
        />

        <Btn
          handler={regBtnHandler}
          value="Зарегистрироваться"
          $isColored={false}
        />
      </S.BtnContainer>
    </S.Form>
  );
};
