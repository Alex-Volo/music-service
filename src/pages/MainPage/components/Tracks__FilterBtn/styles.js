import { styled } from 'styled-components';

export const FilterBtn = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 18px;
  padding: 6px 20px;
  border: 1px solid #fff;
  border-radius: 60px;
  white-space: nowrap;
  cursor: pointer;
  ${({ $isActive }) => $isActive && 'color: #ad61ff;\nborder-color: #d9b6ff;'}

  &:hover {
    color: #d9b6ff;
    border-color: #d9b6ff;
  }
`;

export const Shortcut = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -10px;
  top: -10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 13px;
  background-color: #ad61ff;
  color: #fff;
`;
