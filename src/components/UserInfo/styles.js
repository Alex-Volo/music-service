import { styled } from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  grid-column: 3 / -1;
  padding-right: 8%;
  min-width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Logout = styled.svg`
  width: 43px;
  height: 43px;
  cursor: pointer;
  transition: 0.3s;
  stroke: var(--text-color);
  fill: transparent;

  &:hover {
    stroke: #696969;
  }
`;
