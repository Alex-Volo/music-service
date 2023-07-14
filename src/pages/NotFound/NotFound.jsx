import Btn from 'components/Btn/Btn';
import * as S from './styles';
import cryingSmile from 'assets/img/crying.png';

export const NotFound = () => {
  return (
    <S.Container>
      <S.Heading>404</S.Heading>
      <S.Lead>
        Страница не найдена
        <S.Image src={cryingSmile} alt="crying smile" />
      </S.Lead>
      <S.Text>Возможно, она была удалена или перенесена на другой адрес</S.Text>
      <Btn value="Вернуться на главную" $isColored={true} link="/" />
    </S.Container>
  );
};
