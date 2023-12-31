// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import { EntryInput, Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSignupMutation, useLoginMutation } from 'services/authAPISlice';
import { useUser } from 'hooks';

export const SignUp = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const logoBlackImgURL = '/assets/img/logo_black.svg';

  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [email, setEmail] = useState('');

  const [signup] = useSignupMutation();
  const [loginQuery] = useLoginMutation();

  const handleRegister = async () => {
    if (!email) {
      setError('Введите Email');
      return;
    }
    if (!password) {
      setError('Введите пароль');
      return;
    }
    if (password !== passwordAgain) {
      setError('Пароли не совпадают');
      return;
    }

    const { data: response, error: signupError } = await signup({
      email,
      password,
    });

    // Далее кривая обработка ошибок, ибо не умею
    if (signupError?.data) {
      console.warn('Ошибка регистрации КОМПОНЕНТ', signupError);
      const text = Object.values(signupError.data).join('\n');
      setError(text);
      return;
    }

    if (signupError) {
      console.warn('Ошибка регистрации КОМПОНЕНТ', signupError);

      setError('Пробелмы с сетью');
      return;
    }

    const { data: userAndTokens, error: loginError } = await loginQuery({
      email,
      password,
    });
    // Далее кривая обработка ошибок, ибо не умею
    if (loginError?.data) {
      console.warn('Ошибка логина КОМПОНЕНТ', loginError);

      setError(loginError.data.detail);
      return;
    }

    if (loginError) {
      console.warn('Ошибка логина КОМПОНЕНТ', loginError);

      setError('Пробелмы с сетью');
      return;
    }
    // Здесь убираю юзера в контекст
    login(userAndTokens[0]);
    navigate('/', { replace: true });
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
