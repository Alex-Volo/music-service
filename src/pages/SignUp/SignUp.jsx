// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import { EntryInput, Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { regNewUser } from 'services/API';

export const SignUp = () => {
  const navigate = useNavigate();
  const logoBlackImgURL = '/assets/img/logo_black.svg';

  const [error, setError] = useState(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (!login) {
      setError('Введите логин');
      return;
    }
    if (!password) {
      setError('Введите пароль');
      return;
    }
    if (!email) {
      setError('Введите Email');
      return;
    }

    regNewUser(email, password, login)
      .then(() => navigate('/login'))
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
  }, [login, password, email]);

  return (
    <S.Form>
      <Link to="/login">
        <S.Logo src={process.env.PUBLIC_URL + logoBlackImgURL} alt="logo" />
      </Link>

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
            placeholder="Логин"
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
      </S.InputsList>

      <S.BtnContainer>
        <Btn
          value="Зарегистрироваться"
          $isColored={true}
          handler={handleRegister}
        />
      </S.BtnContainer>
    </S.Form>
  );
};
