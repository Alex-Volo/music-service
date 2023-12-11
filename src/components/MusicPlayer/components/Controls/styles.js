import { styled } from 'styled-components';

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
`;

export const Previos = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-items: center;
  &:hover svg {
    fill: var(--hover-color);
    stroke: var(--hover-color);
  }
`;

export const PreviosSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: var(--active-color);
  stroke: var(--active-color);
`;

export const Play = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;

  & svg {
    fill: var(--active-color);
  }
  &:hover svg {
    fill: var(--hover-color);
    stroke: var(--hover-color);
  }
  &:active svg {
    fill: var(--hover-color);
    stroke: var(--hover-color);
  }
`;

export const PlaySvg = styled.svg`
  width: 22px;
  height: 20px;
`;
export const Next = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-items: center;
  &:hover svg {
    fill: var(--hover-color);
    stroke: var(--hover-color);
  }
`;

export const NextSvg = styled.svg`
  fill: var(--active-color);
  stroke: var(--active-color);
  width: 15px;
  height: 14px;
`;
export const Repeat = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  & svg {
    fill: ${({ $isActive }) =>
      $isActive ? 'var(--active-color)' : 'var(--inactive-color)'};
  }
`;
export const RepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
`;
export const Shuffle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  & svg {
    fill: ${({ $isActive }) =>
      $isActive ? 'var(--active-color)' : 'var(--inactive-color)'};
  }
`;
export const ShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
`;
