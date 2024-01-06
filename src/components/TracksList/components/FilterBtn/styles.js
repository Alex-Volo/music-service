import { styled } from 'styled-components';

export const FilterBtn = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 18px;
  padding: 6px 20px;
  border: 1px solid var(--text-color);
  border-radius: 60px;
  white-space: nowrap;
  cursor: pointer;
  ${({ $isActive }) => $isActive && 'color: #99a4f7;\nborder-color: #99a4f7;'}

  &:hover {
    color: #626bb2;
    border-color: #626bb2;
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
  background-color: #626bb2;
  color: #fff;

  &:hover::before {
    content: '×';
    position: absolute;
    font-size: 36px;
    display: block;
    color: var(--text-color);
    font-size: 25px;
    background-color: #626bb2;
  }
`;
