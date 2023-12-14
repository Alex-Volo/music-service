import { styled } from 'styled-components';

export const MusicPlayer = styled.div`
  ${(props) => (props.$isPlayerVisible ? 'display: flex;' : 'display: none;')}
  width: inherit;
  z-index: 1;
  flex-direction: column;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: var(--player-bg);
  user-select: none;
`;
