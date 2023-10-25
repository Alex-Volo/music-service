import { styled } from 'styled-components';

export const ListHead  = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: calc((100% - 110px) * 0.4 + 50px) calc((100% - 110px) * 0.3) calc((100% - 110px) * 0.3) 20px 40px;
  color: #4e4e4e;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
`;

export const WatchSvg  = styled.svg`
  height: 12px;
  width: 12px;
  stroke: #696969;
  fill: transparent;
`;

export const TimeCol  = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
