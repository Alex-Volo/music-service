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
`;

export const PreviosSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const Play = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;

  & svg {
    fill: #d9d9d9;
  }
  &:hover svg {
    fill: #696969;
    stroke: #696969;
  }
  &:active svg {
    fill: #d9d9d9;
    stroke: #d9d9d9;
  }
`;

export const PlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;
export const Next = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  align-items: center;
`;

export const NextSvg = styled.svg`
  width: 15px;
  height: 14px;
`;
export const Repeat = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  & svg {
    fill: ${({ $isActive }) => ($isActive ? 'white' : 'gray')};
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
    fill: ${({ $isActive }) => ($isActive ? 'white' : 'gray')};
  }
`;
export const ShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
`;
