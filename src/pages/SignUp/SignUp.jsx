// import { AdviseBox } from 'components/AdviseBox/AdviseBox';
import * as S from './styles';
import logo_black from 'assets/img/logo_black.svg';
import { EntryInput } from 'components';
import { Btn } from 'components';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { regNewUser } from 'helpers/DAL';
// import Cookies from 'js-cookie';
// import { setToken } from 'store/UISlice';
import { useDispatch } from 'react-redux';
import { UserContext } from 'store/context';

export const SignUp = ({ form }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
    return regNewUser(email, password, login)
      .then(() => navigate('/login', { replace: true }))
      .catch((error) => {
        console.warn(error);
        if (error?.response?.data) {
          console.warn(error.response.data);
          const text = Object.entries(error.response.data).join(' ');
          setError(text);
        }
      });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [login, password, email]);

  return (
    <S.Form>
      <Link to="/login">
        <S.Logo src={logo_black} alt="logo" />
      </Link>

      <S.InputsList>
        <li style={{ color: 'red', position: 'absolute', width: '300px' }}>
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
