import { styled } from 'styled-components';

export const MusicPlayer = styled.div`

  /*!!!Не забыть скрыть плеер после проверки ДЗ!!! */

  ${(props) => (props.$isPlayerVisible ? 'display: flex;' : 'display: flex;')}
  width: inherit;
  z-index: 1;
  flex-direction: column;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.844);
`;
