import { Btn } from 'components';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const cryingSmileImgURL = '/assets/img/crying.png';
  const navigate = useNavigate();
  const goToMain = () => navigate('/', { replace: true });

  return (
    <S.Container>
      <S.Heading>404</S.Heading>
      <S.Lead>
        Страница не найдена
        <S.Image
          src={process.env.PUBLIC_URL + cryingSmileImgURL}
          alt="crying smile"
        />
      </S.Lead>
      <S.Text>Возможно, она была удалена или перенесена на другой адрес</S.Text>
      <Btn value="Вернуться на главную" $isColored={true} handler={goToMain} />
    </S.Container>
  );
};
