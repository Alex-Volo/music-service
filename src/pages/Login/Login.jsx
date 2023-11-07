// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import { EntryInput, Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { fetchLogin } from 'helpers/fetchAPI';
import { UserContext } from 'store/context';

export const Login = () => {
  const navigate = useNavigate();
  const logoBlackImgURL = '/assets/img/logo_black.svg';

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

    fetchLogin(login, password)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        setCurrentUser(response);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.warn(error);
        if (error.response) {
          console.warn(error.response.data);
          const text = Object.values(error.response.data).join(' ');
          setError(text);
        } else {
          console.log(error.request);
          setError('Проблемы с сетью, проверьте подключение к сети интернет');
        }
      });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме
  useEffect(() => {
    setError(null);
  }, [login, password]);

  return (
    <S.Form>
      <Link to="/">
        <S.Logo src={logoBlackImgURL} alt="logo" />
      </Link>

      {/*Группа инпутов  */}
      <S.InputsList>
        <li
          style={{
            color: 'red',
            position: 'absolute',
            width: '300px',
            marginTop: '28px',
          }}
        >
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
        <Btn handler={handleLogin} value="Войти" $isColored={true} link="/" />

        <Btn
          handler={() => navigate('/registration')}
          value="Зарегистрироваться"
          $isColored={false}
        />
      </S.BtnContainer>
    </S.Form>
  );
};
