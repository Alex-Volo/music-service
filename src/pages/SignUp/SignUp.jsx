// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import { EntryInput, Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { regNewUser, queryLogin } from 'services/API';
import { useUser } from 'hooks';

export const SignUp = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const logoBlackImgURL = '/assets/img/logo_black.svg';

  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    if (!password) {
      setError('Введите пароль');
      return;
    }
    if (!email) {
      setError('Введите Email');
      return;
    }
    if (password !== passwordAgain) {
      setError('Пароли не совпадают');
      return;
    }

    regNewUser(email, password)
      .then(() => queryLogin(email, password))
      .then((response) => login(response))
      .then(() => navigate('/'))
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
  }, [password, passwordAgain, email]);

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
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
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
            type="password"
            name="passwordAgain"
            placeholder="Пароль ещё раз"
            value={passwordAgain}
            onChange={(event) => {
              setPasswordAgain(event.target.value);
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
